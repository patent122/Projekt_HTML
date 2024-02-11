import React, { useState } from 'react';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false); // Dodana nowa wartość stanu

    const handleSubmit = (e) => {
        e.preventDefault();

        // Tworzenie obiektu URLSearchParams i dodawanie parametrów
        const formData = new URLSearchParams();
        formData.append('email', email);
        formData.append('password', password);

        if (loggedIn) {
            console.log("Pomyślnie zalogowano");
        } else {
            console.log("Niepoprawne dane");
        }

        // Wywołanie metody fetch i przekazanie danych do pliku PHP
        fetch('http://localhost/Login2.php', {
            method: 'POST',
            body: formData,
        })
            .then((response) => {
                if (response.ok) {
                    // Logowanie powiodło się - ustawienie stanu "loggedIn" na true
                    setLoggedIn(true);
                } else {
                    // Obsługa niepoprawnej odpowiedzi
                }
            })
            .catch((error) => {
                // Obsługa błędów
                console.error('Błąd podczas wysyłania żądania:', error);
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Zaloguj</button>
            </form>
        </div>
    );
}

export default LoginForm;
