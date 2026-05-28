import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button'; 
// Import your user service layer connector
import { loginUser } from '../../services/UserService';

const inputClasses = 'mt-2 w-full rounded-xl border border-zinc-300 bg-zinc-100 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:bg-zinc-50';
const actionButtonClassName = 'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

const SignInPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(''); // Reset errors on submittal
        
        try {
            const res = await loginUser({ email, password });
            
            // Save state payloads to handle permissions across pages
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('userType', res.data.type); // Stores 'admin', 'editor', or 'viewer'
            localStorage.setItem('firstName', res.data.firstName);

            // Redirect smoothly to your dashboard area
            navigate('/dashboard/users');
        } catch (err) {
            // Catches invalid passwords, unregistered emails, and "viewer" blocks (Enhancement 1)
            setErrorMessage(err.response?.data?.message || 'Login connection failed.');
        }
    };

    return (
        <>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Log In</h1>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
                Access your account with the same monochrome wireframe language used across the site.
            </p>

            {errorMessage && (
                <div className="mt-4 rounded-xl bg-red-50 border border-red-200 p-3 text-xs text-red-600 font-medium">
                    {errorMessage}
                </div>
            )}

            <form className="mt-8 space-y-5" onSubmit={handleLoginSubmit}>
                <div>
                    <label htmlFor="signin-email" className="text-sm font-medium text-zinc-700">
                        Email address
                    </label>
                    <input
                        id="signin-email"
                        type="email"
                        required
                        placeholder="yourname@example.com"
                        autoComplete="email"
                        className={inputClasses}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="signin-password" className="text-sm font-medium text-zinc-700">
                        Password
                    </label>
                    <input
                        id="signin-password"
                        type="password"
                        required
                        placeholder="••••••••"
                        autoComplete="current-password"
                        className={inputClasses}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <Button type="submit" variant="primary" className={actionButtonClassName}>
                    Log In
                </Button>
            </form>

            <div className="mt-8 border-t border-zinc-200 pt-6 text-sm text-zinc-600">
                Don't have an account?{' '}
                <Link to="/auth/signup" className="font-semibold text-zinc-900 transition hover:text-zinc-600">
                    Sign up
                </Link>
            </div>
        </>
    );
};

export default SignInPage;