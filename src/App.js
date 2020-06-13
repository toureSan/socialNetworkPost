import React, {useState} from 'react';
import './App.css';
import Navigation from './components/Navigation';
import AuthForm from './components/AuthForm'; 
import RegisterForm from './components/RegisterForm'; 
import { SocialContext } from './context/SocialContext';
import { Route, BrowserRouter as Router } from 'react-router-dom';
// import PrivateRoute from './utils/PrivateRoute'; 



function App() {
  // const [ listPost, setPost ] = useState([]);

  return (
    
    <Router>
      <SocialContext.Provider>
        <div className="App">
        <Navigation />
         <Route path="/login" render={props => <AuthForm {...props} role="login" />} />
         <Route path="/register" render={ props => <RegisterForm {...props} role="register" />} />
         {/* <Route path="/listPost" component={ListPost} /> */}
        </div>
      </SocialContext.Provider>
    </Router>

  );
}

export default App;
