import React, {useState} from 'react';
import './App.css';
import Navigation from './components/Navigation';
import AuthForm from './components/AuthForm'; 
import RegisterForm from './components/RegisterForm'; 
import { SocialContext } from './context/SocialContext';
import { Route, BrowserRouter as Router } from 'react-router-dom';
// import PrivateRoute from './utils/PrivateRoute'; 
import styled, { createGlobalStyle, css } from 'styled-components';
import ListPost from './components/ListPost';
import PrivateRoute from './utils/PrivateRoute';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(to bottom, #f05053, #e1eec3);
    height: 100%;
    margin: 0;
    color: black;
  }
`;

function App() {
  const [ postList, setPostList ] = useState([]);


  return (
    <>
    <GlobalStyle />
    <Router>
      <SocialContext.Provider value={{postList,setPostList}}>
        <div className="App">
        <Navigation />
         <Route path="/login" render={props => <AuthForm {...props} role="login" />} />
         <Route path="/register" render={ props => <RegisterForm {...props} role="register" />} />
         <PrivateRoute path="/listPost" component={ListPost} />
        </div>
      </SocialContext.Provider>
    </Router>
    </>
  );
}

export default App;
