import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import Modal from './modal/modal';
import FrontContent from './front-content';

const App = () => (
    <div className="body-container">
        <Modal />
        <header className='header-container'>
            <div className='front-hero'>
                <div className="logo">
                    <i className="fab fa-soundcloud fa-3x"></i>
                    <h1>reSOUNDCLOUD</h1>
                </div>
                <GreetingContainer />
            </div>
            <FrontContent />
        </header>
    </div>
);

export default App;