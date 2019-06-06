import React from 'react';
import PreNavContainer from './pre_nav_container';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        let { currentUser, logout } = this.props;

        if (currentUser) {
            return (
                <div className='banner'>
                    <div className="logo">
                        <i className="fab fa-soundcloud fa-3x"></i>
                    </div>
                    <div className="greet">
                        <h1>{currentUser.username}!</h1>
                        <button className="login-button" onClick={logout}>Log Out</button>
                    </div>
                </div>
            )
        } else {
            return (
                    <PreNavContainer />
            )
        }
    }
};


const msp = (state) => {
    return ({
        currentUser: state.entities.users[state.session.id]
    });
};

const mdp = (dispatch) => {
    return ({
        logout: () => dispatch(logout()),
    });
};


export default connect(msp,mdp)(NavBar);