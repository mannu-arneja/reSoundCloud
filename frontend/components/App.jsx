import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import Modal from './modal/modal';

const App = () => (
    <div>
        <Modal />
        <header>
        <h1>reSoundCloud</h1>
        <GreetingContainer />
        </header>


    </div>
);

export default App;