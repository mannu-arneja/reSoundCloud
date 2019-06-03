import React from 'react';
import { Link } from 'react-router-dom';

function Greeting({currentUser, logout, openModal}){


    if (currentUser) {
        return (
            <div className="greet">
                <h1>{currentUser.username}!</h1>       
                <button className="login-button" onClick={logout}>Log Out</button>
            </div>
        )
    } else {
        return (
            <nav className="signin">
                <button className="login-button" onClick={()=>openModal('login')}>Sign in</button>
                <button className="signup-button" onClick={()=>openModal('signup')}>Create account</button>
            </nav>
        )
    }

};

export default Greeting;