import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, check_email } from '../../actions/session_actions'
import { closeModal, openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {

    return {
        errors: state.errors.session,
        formType: 'email',
        // navLink: <Link to="/login">create account</Link>,
    };
};

const mdp = dispatch => {
    return {
        processForm: (user) => dispatch(check_email(user)),
        openModal: (next) => dispatch(openModal(next)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(msp, mdp)(SessionForm);