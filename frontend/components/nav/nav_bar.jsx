import React from 'react';
import PreNavContainer from './pre_nav_container';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        let { currentUser, logout, openModal } = this.props;
        let greet;
        if (currentUser) {
            let photo = currentUser.photoUrl ? <img src={this.props.currentUser.photoUrl} /> : null;

            greet = 
            <>
                <button className='nav-button flex' onClick={() => this.props.history.push(`/user/${this.props.currentUser.id}`)}>
                    <div className='nav-prof'>{photo}</div>
                    {currentUser.username}
                </button>
                <button className="nav-button" onClick={() => { logout(); this.props.history.push("/"); }}>Log Out</button>
            </>
        } else {
            greet = 
            <>
                <button className="login-button" onClick={() =>  openModal('login')}>Sign in</button>
                <button className="create-button" onClick={() => openModal('signup')}>Create account</button>
            </>
        }


        return (
            <div className='banner'>
                <div className="nav-container">
                    <div className="nav-logo">
                        <i className="fab fa-soundcloud"></i>
                    </div>
                    <button className='nav-button' onClick={() => this.props.history.push("/")}>Home</button>
                    <button className='nav-button' onClick={() => this.props.history.push("/upload")}>Upload</button>
                    <div className="greet">
                        {greet}
                    </div>
                </div>
            </div>
        )
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
        openModal: modal => dispatch(openModal(modal))
    });
};


export default connect(msp,mdp)(NavBar);