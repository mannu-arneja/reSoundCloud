import React from 'react';
import { Link } from 'react-router-dom';

function Greeting({currentUser}){
debugger
    if (currentUser) {
        return (
            <>
                <h1>{currentUser.username}!</h1>       
                <button onClick={logout}>Log Out</button>
            </>
        )
    } else {
        return (
            <>
                <Link to="/signup">Sign Up </Link> 
                <Link to="/login">Sign In</Link>
            </>
        )
    }

};

export default Greeting;