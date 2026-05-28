import React, { useState } from 'react';
import { loginUser } from '../../../services/UserService';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const { data } = await loginUser(credentials);
            localStorage.setItem('token', data.token);
            localStorage.setItem('userType', data.type);
            localStorage.setItem('firstName', data.firstName);
            
            // Enhancement 1 Redirection Logic
            if (data.type === 'admin') {
                navigate('/dashboard/users');
            } else if (data.type === 'editor') {
                navigate('/dashboard/articles');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div style={{ padding: '2rem', maxWidth: '400px', margin: '0 auto' }}>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required style={{ display: 'block', width: '100%', marginBottom: '10px' }} />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required style={{ display: 'block', width: '100%', marginBottom: '10px' }} />
                <button type="submit" style={{ width: '100%', padding: '10px' }}>Sign In</button>
            </form>
        </div>
    );
}