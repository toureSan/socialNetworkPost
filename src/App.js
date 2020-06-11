import React, {useState} from 'react';
import './App.css';
import Navigation from './components/Navigation';
import AuthForm from './components/AuthForm'; 
import { SocialContext } from './context/SocialContext';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';



function App() {
  const [ listUser, setUser ] = useState([]); 
  const [jwt, setJwt] = useState('');
  const [users, setUsers] = useState([]);
  
  const header = {
    Authorization: `Bearer ${jwt}`,
  }
  const getJwt = (localHeader) => {
    axios.post('https://strapi-crea.5ika.org/auth/local',
    {
      identifier: 'shareTester', 
      password: 'sharepassword', 
      headers: {
        localHeader
      }
    },
    ).then(response => {
      setJwt(response.data.jwt); 
      setUser(response.data.user); 
    })

  }
  return (
    
    // <Router>
    //   <SocialContext.Provider>
    //     <div className="App">
    //     <Navigation />
        
    //      <Route path="/login" render={props => <AuthForm {...props} role="login" />} />
    //      <Route path="/register" render={ props => <AuthForm {...props} role="register" />} />
    //      {/* <Route path="/listUsers" component={ListUsers} /> */}
        

    //     </div>
    //   </SocialContext.Provider>
    // </Router>

    <div>
    <p>{jwt}</p>
    <p>{users && users.username}</p>
      
    </div>

  );
}

export default App;
