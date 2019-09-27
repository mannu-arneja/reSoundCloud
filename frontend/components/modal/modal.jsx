import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { login } from '../../actions/session_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import EmailFormContainer from '../session_form/email_form_container';
import DeleteTrackModal from '../track/delete_track_modal';

function Modal({ modal, closeModal, login }) {
    if (!modal) {
        return null;
    }

    let component;
    switch (modal) {
        case 'email':
            component = <EmailFormContainer />;
            break;
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        case 'deleteTrack':
            component = <DeleteTrackModal />;
            break;
        default:
            component = null;
    };

    return (
        <div className="modal-background" onClick={closeModal}>
            <i className="fas fa-times"></i>
            {component}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        login: (user) => dispatch(login(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);