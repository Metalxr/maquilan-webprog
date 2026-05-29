import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { createUser } from '../../services/UserService';

const inputClasses = 'mt-2 w-full rounded-xl border border-zinc-300 bg-zinc-100 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:bg-zinc-50';
const actionButtonClassName = 'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

const SignUpPage = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        age: '',
        gender: '',
        contactNumber: '',
        address: '',
        type: 'viewer' // Public signups default securely to 'viewer'
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSignUpSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');

        try {
            await createUser(formData);
            setSuccessMessage('Account registered successfully! Redirecting to Log In...');
            
            // Redirect smoothly to sign in page after 2 seconds
            setTimeout(() => {
                navigate('/auth/signin');
            }, 2000);
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed. Please check inputs.');
        }
    };

    return (
        <>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Sign Up</h1>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
                Create your account with the same monochrome layout and shared button treatment.
            </p>

            {error && (
                <div className="mt-4 rounded-xl bg-red-50 border border-red-200 p-3 text-xs text-red-600 font-medium">
                    {error}
                </div>
            )}
            
            {successMessage && (
                <div className="mt-4 rounded-xl bg-green-50 border border-green-200 p-3 text-xs text-green-600 font-medium">
                    {successMessage}
                </div>
            )}

            <form className="mt-8 space-y-5" onSubmit={handleSignUpSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                        <label htmlFor="firstName" className="text-sm font-medium text-zinc-700">First Name</label>
                        <input id="firstName" name="firstName" type="text" required placeholder="First Name" className={inputClasses} value={formData.firstName} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="text-sm font-medium text-zinc-700">Last Name</label>
                        <input id="lastName" name="lastName" type="text" required placeholder="Last Name" className={inputClasses} value={formData.lastName} onChange={handleInputChange} />
                    </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-3">
                    <div>
                        <label htmlFor="age" className="text-sm font-medium text-zinc-700">Age</label>
                        <input id="age" name="age" type="number" required placeholder="21" className={inputClasses} value={formData.age} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label htmlFor="gender" className="text-sm font-medium text-zinc-700">Gender</label>
                        <input id="gender" name="gender" type="text" required placeholder="Male/Female" className={inputClasses} value={formData.gender} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label htmlFor="contactNumber" className="text-sm font-medium text-zinc-700">Contact No.</label>
                        <input id="contactNumber" name="contactNumber" type="text" required placeholder="09123456789" className={inputClasses} value={formData.contactNumber} onChange={handleInputChange} />
                    </div>
                </div>

                <div>
                    <label htmlFor="address" className="text-sm font-medium text-zinc-700">Home Address</label>
                    <input id="address" name="address" type="text" required placeholder="Philippines" className={inputClasses} value={formData.address} onChange={handleInputChange} />
                </div>

                <div>
                    <label htmlFor="username" className="text-sm font-medium text-zinc-700">Username</label>
                    <input id="username" name="username" type="text" required placeholder="username" className={inputClasses} value={formData.username} onChange={handleInputChange} />
                </div>

                <div>
                    <label htmlFor="email" className="text-sm font-medium text-zinc-700">Email address</label>
                    <input id="email" name="email" type="email" required placeholder="user@example.com" className={inputClasses} value={formData.email} onChange={handleInputChange} />
                </div>

                <div>
                    <label htmlFor="password" className="text-sm font-medium text-zinc-700">Password</label>
                    <input id="password" name="password" type="password" required placeholder="••••••••" className={inputClasses} value={formData.password} onChange={handleInputChange} />
                    <p className="mt-1.5 text-xs text-zinc-500">
                        Use a secure password with letters and numbers.
                    </p>
                </div>

                <Button type="submit" variant="primary" className={actionButtonClassName}>
                    Create Account
                </Button>
            </form>

            <div className="mt-8 border-t border-zinc-200 pt-6 text-sm text-zinc-600">
                Already have an account?{' '}
                <Link to="/auth/signin" className="font-semibold text-zinc-900 transition hover:text-zinc-600">
                    Log in
                </Link>
            </div>
        </>
    );
};

export default SignUpPage;