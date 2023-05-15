import React, { useState } from 'react';
import './RegistrationForm.scss';

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formError, setFormError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Sprawdzanie czy pola są wypełnione
        if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || password.trim() === '') {
            setFormError(true);
            return;
        }

        // Przygotowanie danych w formacie 'application/x-www-form-urlencoded'
        const formData = new URLSearchParams();
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('email', email);
        formData.append('password', password);

        // Wysyłanie danych przez POST do pliku PHP na serwerze
        fetch('http://localhost/Register.php', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.text())
            .then(data => {
                // Obsługa odpowiedzi z serwera
                console.log('Odpowiedź z serwera:', data);
            })
            .catch(error => {
                // Obsługa błędów
                console.error('Błąd:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            {formError && <p>Please fill in all fields.</p>}
            <label className="lab">
                Name:
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </label>
            <br />
            <label className="lab">
                Last name:
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </label>
            <br />
            <label className="lab">
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <br />
            <label className="lab">
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <br />
            <button type="submit">Create an account</button>
        </form>
    );
};

export default Form;
