import React, { useState } from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';





const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledInputRegister = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 7px;
  margin-top: 7px;


`;


const StyledButton = styled.button`

  background-color: lightblue;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;

`;
export default function Navigation({ role,history }) {
    const [username, setUserName] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [bio, setBio] = useState('');

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
    const handleChangeBio = e => {
        setBio(
            e.target.value
        )
    }
    const handleChangeEmail = e => {
        setEmail(
            e.target.value
        )
    }
    const handleChangePassword = e => {
        setPassword(
            e.target.value
        )
    }
    const handleSubmitRegister = e => {
        e.preventDefault();
        axios.post(`https://strapi-crea.5ika.org/auth/local/register`, { username, firstname, lastname, email, password, bio })

            .then(
                res => {
                    //   console.log(res)
                    localStorage.setItem('data', JSON.stringify(res.data));
                    history.push('/home');
                })

            .catch(err =>
                console.log(err)
            )

    }
    return (
        <>
        <StyledFormWrapper>
        <StyledForm onSubmit={handleSubmitRegister}>
        <h1>Please {role}</h1>
            <StyledInputRegister
                field='email'
                value={email}
                onChange={handleChangeEmail}
                placeholder="votre email"
            />

            <StyledInputRegister
                field='userName'
                value={username}
                onChange={handleChangeUserName}
                placeholder="Your username"
            />

            <StyledInputRegister
                field='firstName'
                value={firstname}
                onChange={handleChangeFirstName}
                placeholder="Your firstname"
            />

            <StyledInputRegister
                field='lastName'
                value={lastname}
                onChange={handleChangeLastName}
                placeholder="Your lastname"
            />


            <StyledInputRegister
                name="password"
                type="password"
                value={password}
                onChange={handleChangePassword}
                placeholder="Password is required"
            />

            <StyledTextArea
                name="bio"
                type="bio"
                value={bio}
                onChange={handleChangeBio}
                placeholder="Biographie is required"
            />

            <StyledButton onClick={handleSubmitRegister}>Sign up</StyledButton>
        </StyledForm>
        </StyledFormWrapper>
        </>
    )
}
