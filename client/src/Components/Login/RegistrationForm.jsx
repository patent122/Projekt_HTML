import React, { useState } from 'react';

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

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
            <label>
                Imię:
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </label>
            <br />
            <label>
                Nazwisko:
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <br />
            <label>
                Hasło:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <br />
            <button type="submit">Wyślij</button>
        </form>
    );
};

export default Form;
