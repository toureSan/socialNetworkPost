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

const StyledInput = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 7px;
  margin-top: 7px;

  text-align:center;
`;


const StyledButton = styled.button`

  background-color: #f7797d;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

export default function AuthForm({ role, history }) {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState([])

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
                    localStorage.setItem('data', JSON.stringify(res.data));
                    setUser(res.data.user);
                    history.push('/home');
                    // console.log(res.data.user);
                    // history.push('/registerForm');
                })
            .catch(err =>
                history.push('/404')
            )
    }

    return (
        <>
           
            <StyledFormWrapper>
                <StyledForm onSubmit={handleSubmitAuth}>
                <h1>Please {role}</h1>
              
                <label htmlFor="identifier">email or username</label>
                    <StyledInput
                        name='identifier'
                        type="text"
                        value={identifier}
                        onChange={handleChange}       
                    />

                    <label htmlFor="identifier">your username</label>
                    <StyledInput
                       name='identifier'
                        type="password"
                        value={password}
                        onChange={handleChangePassword}
                        
                    />
 
                    <StyledButton onClick={handleSubmitAuth}>Connection</StyledButton>
              

                </StyledForm>
                {/* <p>{user & user.username}</p> */}
            </StyledFormWrapper>
        </>
    )
}