const express = require('express');
const router = express.Router();
const { 
    getUsers, 
    createUser, 
    updateUser, 
    deleteUser, 
    loginUser 
} = require('../controllers/userController');

// Routes handling base paths: /api/users
router.route('/')
    .get(getUsers)   // Fetch users list
    .post(createUser); // Handles user registrations / sign-ups

// Routes handling parametrized object paths: /api/users/:id
router.route('/:id')
    .put(updateUser)    // Update specific account data fields
    .delete(deleteUser); // Remove account record completely

// Dedicated authentication handler endpoint: /api/users/login
router.post('/login', loginUser);

module.exports = router;