import React, { useState } from 'react';
import './RegisterForm.scss';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('Register.php', {
            method: 'POST',
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <form onSubmit={handleSubmit} className='register-form'>
            <label htmlFor='firstName'>Imię</label>
            <input
                type='text'
                id='firstName'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
                required
            />

            <label htmlFor='lastName'>Nazwisko</label>
            <input
                type='text'
                id='lastName'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                required
            />

            <label htmlFor='email'>E-mail</label>
            <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
            />

            <label htmlFor='password'>Hasło</label>
            <input
                type='password'
                id='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                required
            />

            <button type='submit'>Zarejestruj się</button>
        </form>
    );
};

export default RegisterForm;


