import React, { useState } from 'react';
import Navigation from './components/Navigation';
import AuthForm from './components/AuthForm';
import RegisterForm from './components/RegisterForm';
import { SocialContext } from './context/SocialContext';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import ListPost from './components/ListPost';
import Profile from './components/Profile';
import ListUser from './components/ListUser';
import PrivateRoute from './utils/PrivateRoute';



const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
   background:lightblue;
    height: 100%;
    margin: 0;
    color: black;
  }
`;

function App() {
  const [postList, setPostList] = useState([]);
  const [listUser, setListUser] = useState([])
  const [profile, setProfile] = useState([]);
  const [loggedIn, setLoggedIn] = useState(JSON.parse(localStorage.getItem("data")) ? true : false);

  return (
    <>
      <GlobalStyle />
      <Router>
        <SocialContext.Provider value={{ postList, setPostList, listUser, setListUser, loggedIn, setLoggedIn, profile, setProfile }}>
          <div className="App">
            <Navigation />
            <Route path="/login" render={props => <AuthForm {...props} role="login" />} />
            <Route path="/register" render={props => <RegisterForm {...props} role="register" />} />
            <PrivateRoute path="/listPost" component={ListPost} />
            <PrivateRoute path="/listUser" component={ListUser} />
            <PrivateRoute path="/profile" component={Profile} />
          </div>
        </SocialContext.Provider>
      </Router>
    </>
  );
}

export default App;
