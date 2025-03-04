import axios from 'axios';
import React, { useState } from 'react';

const Auth = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = isLogin ? '/api/auth/login' : '/api/auth/register';
        const data = isLogin ? { email, password } : { name, email, password };
        try {
            const response = await axios.post(url, data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {!isLogin && <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />}
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
            <button type="button" onClick={() => setIsLogin(!isLogin )}>Switch to {isLogin ? 'Register' : 'Login'}</button>
        </form>
    );
};

export default Auth;