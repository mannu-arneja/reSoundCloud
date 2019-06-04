import React from 'react';
import PreNavContainer from './nav/pre_nav_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import Modal from './modal/modal';
import FrontContent from './main/front-content';
import Main from './main/main';

const App = () => (
    <div className="body-container">
        <Modal />
        <header className='header-container'>
            <div className='front-hero'>
                <div className="logo">
                    <i className="fab fa-soundcloud fa-3x"></i>
                    <h1>reSOUNDCLOUD</h1>
                </div>
                <PreNavContainer />
            </div>
            <FrontContent />
        </header>
        <Main />
    </div>
);

export default App;