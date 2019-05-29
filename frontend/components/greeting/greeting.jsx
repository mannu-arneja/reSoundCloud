import React from 'react';
import { Link } from 'react-router-dom';

function Greeting({currentUser, logout}){


    if (currentUser) {
        return (
            <div className="greet">
                <h1>{currentUser.username}!</h1>       
                <button onClick={logout}>Log Out</button>
            </div>
        )
    } else {
        return (
            <nav className="signin">
                <Link to="/signup">Sign Up </Link> 
                <Link to="/login">Sign In</Link>
            </nav>
        )
    }

};

export default Greeting;