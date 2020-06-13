import React, { useState } from 'react';
import axios from 'axios';

export default function Navigation() {
    const [userName, setUserName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailRequired, setemailRequired] = useState('');


    const handleChangeUserName = e => {
        setUserName(
            e.target.value
        )
    }


    const handleChangeFirstName = e => {
        setFirstName(
            e.target.value
        )
    }

    const handleChangeLastName = e => {
        setLastName(
            e.target.value
        )
    }
    const handleChangeEmail = e => {
        setemailRequired(
            e.target.value
        )
    }
    return (

        <form onSubmit={handleSubmit}>
            <input
                field='userName'
                value={userName}
                onChange={handleChangeUserName}
                placeholder="Your username"
            />

            <input
                field='firstName'
                value={firstName}
                onChange={handleChangeFirstName}
                placeholder="Your firstname"
            />

            <input
                field='lastName'
                value={lastName}
                onChange={handleChangeLastName}
                placeholder="Your lastname"
            />

            <input
                field='email'
                value={emailRequired}
                onChange={handleChangeEmail}
                placeholder="votre email"
            />
            <input
                name=""
                type="password"
                value={password}
                onChange={handleChangePassword}
            />
            <button onClick={handleSubmit}>Connection</button>
        </form>
    )
}
