const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// @desc    Get All Users (Excludes passwords for security)
// @route   GET /api/users
const getUsers = async (req, res) => {
    try {
        const users = await User.find({}, "-password"); 
        res.json({ users });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create User / Sign Up (Fulfills Enhancement 3)
// @route   POST /api/users
const createUser = async (req, res) => {
    try {
        const { email, username, password } = req.body;

        // Validation checks
        if (!password) {
            return res.status(400).json({ message: "Password is required" });
        }

        const existingEmail = await User.findOne({ email });
        const existingUsername = await User.findOne({ username });
        if (existingEmail || existingUsername) {
            return res.status(400).json({ message: "Email or username already registered" });
        }

        // Securely hash password and save new record
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ 
            ...req.body, 
            password: hashedPassword 
        });

        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Update User Account Parameters
// @route   PUT /api/users/:id
const updateUser = async (req, res) => {
    try {
        // Safe Hashing Guard: Only re-hash if the password field is modified and isn't already a bcrypt hash string
        if (req.body.password && !req.body.password.startsWith('$2a$')) {
            req.body.password = await bcrypt.hash(req.body.password, 10);
        } else if (req.body.password === "") {
            // Remove password field from the payload if sent empty to avoid clearing it out
            delete req.body.password;
        }

        const user = await User.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true, runValidators: true }
        );

        if (!user) {
            return res.status(404).json({ message: 'User record not found' });
        }

        res.json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Delete User Account
// @route   DELETE /api/users/:id
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User record not found' });
        }
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Authenticate User Session (Fulfills Enhancement 1)
// @route   POST /api/users/login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        // 1. Account Existence Validation
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // 2. ENHANCEMENT 1 Restriction: Viewers are barred entirely from logging into dashboards
        if (user.type === 'viewer') {
            return res.status(403).json({ message: 'Access denied: Viewers are restricted from logging in.' });
        }

        // 3. Status Validation
        if (!user.isActive) {
            return res.status(403).json({ message: 'Your account is inactive. Please contact support.' });
        }

        // 4. Password Verification Match
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // 5. Generate JSON Web Token (JWT)
        const token = jwt.sign(
            { id: user._id, email: user.email, type: user.type },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        res.json({ 
            message: 'Login successful', 
            token, 
            type: user.type, 
            firstName: user.firstName 
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getUsers, createUser, updateUser, deleteUser, loginUser };