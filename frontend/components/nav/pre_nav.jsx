import React from 'react';
import { Link } from 'react-router-dom';

function PreNav({openModal, currentUser}){
    

    return (
        <div className='banner-splash'>
            <div className="logo">
                <i className="fab fa-soundcloud fa-3x"></i>
                <h1>reSOUNDCLOUD</h1>
            </div>
            <nav className="signin">
                <button className="login-button" onClick={()=>openModal('login')}>Sign in</button>
                <button className="create-button" onClick={()=>openModal('signup')}>Create account</button>
            </nav>
        </div>
    )
};

export default PreNav;