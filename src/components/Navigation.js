import React from 'react';
import { Link } from 'react-router-dom';
import { SocialContext } from '../context/SocialContext';
import { Button } from 'react-bootstrap';
export default function Navigation() {
    const { loggedIn, setLoggedIn } = React.useContext(SocialContext);
    const logout = _ => {
        localStorage.removeItem('data');
        setLoggedIn(false);
    }
    return (
        <div>
            {loggedIn
                ? <Button className="danger" onClick={logout}>Log Out</Button>
                : <>
                    <Link to="/login">Please Login</Link>
                    <Link to="/register">Please Sign up</Link>
                </>}
            <Link to="/listUser">Liste Utilisateurs</Link>
            <Link to="/listPost">Liste Posts</Link>
            <Link to="/profile">Mon profile</Link>
        </div>
    )
}