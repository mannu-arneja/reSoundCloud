import * as APIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

// regular action creators
const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
});

// thunk action creators
export const login = (user) => {
    return (dispatch => {
        APIUtil.login(user)
        .then(payload => dispatch(receiveCurrentUser(payload)));
    });
};

export const logout = () => {
    return (dispatch) => {
        APIUtil.logout()
        .then(() => dispatch(logoutCurrentUser()));
    };
};

export const signup = (user) => {
    return (dispatch) => {
        APIUtil.signup(user)
        .then(payload => dispatch(receiveCurrentUser(payload)));
    };
};