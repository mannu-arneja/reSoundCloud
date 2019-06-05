import React from 'react';
import PreNavContainer from './nav/pre_nav_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import Modal from './modal/modal';
import FrontContent from './main/front-content';
import Main from './main/main';
import NavBar from './nav/nav_bar';

const App = () => (
    <div className="body-container">
        <header className='header-container'>
            <Modal />
            <NavBar />
        </header>
            <FrontContent />
        <Main />
    </div>
);

export default App;