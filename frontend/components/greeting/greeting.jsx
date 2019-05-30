import React from 'react';
import { Link } from 'react-router-dom';

function Greeting({currentUser, logout, openModal}){


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
                <button onClick={()=>openModal('login')}>Login</button>
                <button onClick={()=>openModal('signup')}>Sign up</button>
            </nav>
        )
    }

};

export default Greeting;