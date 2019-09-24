import React from 'react';
import PreNavContainer from './nav/pre_nav_container';
import { Switch, Route } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import Modal from './modal/modal';
import FrontContent from './main/front-content';
import Main from './main/main';
import NavBar from './nav/nav_bar';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import UploadForm from './upload/upload_form';
import Player from './player/player';
import UserProfile from './user/user_profile'
import TrackPage from './track/track_page';

const App = () => (
    <>
        <header className='header-container'>
            <Modal />
            <Route path="/" component={NavBar} />
        </header>
        <Switch>
            <AuthRoute exact path="/" component={FrontContent} />
            <ProtectedRoute path="/discover" component={Main} />
            <ProtectedRoute path="/upload" component={UploadForm} />
            <ProtectedRoute path="/user/:id" component={UserProfile} />
            <ProtectedRoute path="/track/:id" component={TrackPage} />
        </Switch>
        <footer>
            <Player />
        </footer>
    </>
);

export default App;