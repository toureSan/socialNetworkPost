import React from 'react'; 
import { Link } from 'react-router-dom'; 
import { SocialContext } from '../context/SocialContext';


export default function Navigation (){
    const {loggedIn, setLoggedIn} = React.useContext(SocialContext);
    const logout = _ =>{
        JSON.parse(localStorage.removeItem('data')) ;
        setLoggedIn(false);
    }
    return ( 
        <div>
            <Link to="/login">Please Login</Link>
            <Link to="/register">Please Sign up</Link>
            <Link to="/listUsers">Liste Utilisateurs</Link>
            <Link to="/listPost">Liste Posts</Link>
        </div>
    )
}