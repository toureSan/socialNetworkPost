import React, {useState} from 'react';
import './App.css';
import Navigation from './components/Navigation';
import AuthForm from './components/AuthForm'; 
import { SocialContext } from './context/SocialContext';
import { Route, BrowserRouter as Router } from 'react-router-dom';




function App() {
  // const [ listUser, setUser ] = useState([]);

  return (
    
    <Router>
      <SocialContext.Provider>
        <div className="App">
        <Navigation />
        
         <Route path="/login" render={props => <AuthForm {...props} role="login" />} />
         {/* <Route path="/register" render={ props => <AuthForm {...props} role="register" />} /> */}
         {/* <Route path="/listUsers" component={ListUsers} /> */}
        </div>
      </SocialContext.Provider>
    </Router>

  );
}

export default App;
