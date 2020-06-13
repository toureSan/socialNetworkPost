import React, { useState } from 'react';
import axios from 'axios';

export default function AuthForm({ role, history }) {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');


    const handleChange = e => {
        setIdentifier(
            e.target.value
        )
    }

    const handleChangePassword = e => {
        setPassword(
            e.target.value
        )
    }

    const handleSubmitAuth = e => {
        e.preventDefault();
        axios.post(`https://strapi-crea.5ika.org/auth/local`, { identifier, password })

            .then(
                res => {
                    //   console.log(res)
                    localStorage.setItem('data', JSON.stringify(res.data));
                    history.push('/ListPost');
                })

            .catch(err =>
                history.push('/404')
            )

    }

    return (
        <div>
            <h1>please {role}</h1>
            <form onSubmit={handleSubmitAuth}>
                <input
                    field='identifier'
                    value={identifier}
                    onChange={handleChange}
                    placeholder="votre nom"
                />
                <input
                    name="password"
                    type="password"
                    value={password}
                    onChange={handleChangePassword}
                />
                <button onClick={handleSubmitAuth}>Connection</button>
            </form>

        </div>
    )
}