import React from 'react'; 
import { Link } from 'react-router-dom'; 

export default function Navigation (){
    return ( 
        <div>
            <Link to="/login">Please Login</Link>
            <Link to="/register">Please Sign up</Link>
            <Link to="/login">Liste Utilisateurs</Link>
        </div>
    )
}