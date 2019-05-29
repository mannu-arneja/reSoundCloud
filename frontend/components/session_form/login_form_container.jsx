import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'net';

const msp = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'login',
        navLink: <Link to="/signup">create account</Link>,
    };
};

const mdp = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
    };
};

export default connect(msp,mdp)(SessionForm);