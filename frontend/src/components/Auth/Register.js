import React, { useState } from 'react';

function RegistrationForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                setMessage('User registered successfully');
                setUsername('');
                setPassword('');
            } else {
                const data = await response.json();
                setMessage(data.error || 'Failed to register user. Please try again later.');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Failed to register user. Please try again later.');
        }
    };

    return (
        <div className='mt-5 max-w-md mx-auto text-center bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
            <div className='text-center flex flex-col p-8 my-4'>
                <h1 className="text-2xl font-bold mb-4 text-[#374357]">User Registration</h1>
                <form onSubmit={handleSubmit} className="text-left">
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-semibold text-gray-600 mb-2">Username:</label>
                        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="border w-full py-2 px-3 mb-3" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-600 mb-2">Password:</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border w-full py-2 px-3 mb-3" required />
                    </div>
                    <button type="submit" className='bg-slate-600 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white hover:bg-[#374357]'>Register</button>
                </form>
                <div>{message}</div>
            </div>
        </div>
    );
}

export default RegistrationForm;
