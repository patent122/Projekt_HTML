import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new URLSearchParams();
        formData.append('email', email);
        formData.append('password', password);

        try {
            const response = await fetch('http://localhost/Login.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formData.toString(),
            });

            if (response.ok) {
                const data = await response.json();

                // Sprawdzenie czy dane logowania są zgodne
                const { id, email: storedEmail, password: storedPassword } = data;

                if (email === storedEmail && password === storedPassword) {
                    // Pomyślne zalogowanie
                    console.log('Zalogowano!');
                } else {
                    // Błąd logowania
                    setError('Nieprawidłowy email lub hasło');
                }
            } else {
                // Błąd logowania
                setError('Nieprawidłowy email lub hasło');
            }
        } catch (error) {
            // Błąd połączenia
            setError('Wystąpił błąd podczas logowania');
        }
    };

    return (
        <div>
            <h2 className="loginHeader">Login</h2>
            {error && <p className="error">{error}</p>}
            <form className="formContainer" onSubmit={handleSubmit}>
                <div>
                    <label className="label" htmlFor="email">Email:</label>
                    <input
                        className="inputField"
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div>
                    <label className="label" htmlFor="password">Password:</label>
                    <input
                        className="inputField"
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <button className="submitButton" type="submit">Sign in</button>
            </form>
        </div>
    );
};

export default Login;
