import * as APIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

// regular action creators
export const receiveCurrentUser = (user) => {
    // debugger;
    return (
    {type: RECEIVE_CURRENT_USER,
    user: user}
    )
};

// export const logoutCurrentUser = () => {
//     debugger;
//     return (
//     {type: LOGOUT_CURRENT_USER}
//     )
// };

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
});

// thunk action creators
// export const login = user => dispatch => (
//         APIUtil.login(user).then(payload => dispatch(receiveCurrentUser(payload)));
//     );
// };

export const login = user => dispatch => { 
    // debugger;
    return APIUtil.login(user).then(user => 
            { return dispatch(receiveCurrentUser(user))}
        )
}

// export const logout = () => {
//     debugger
//     return (dispatch) => {
//         return APIUtil.logout()
//         .then(() => dispatch(logoutCurrentUser()));
//     };
// };

export const logout = () => dispatch => {
    debugger;
    return APIUtil.logout().then(() => dispatch(logoutCurrentUser())
    )
}

export const signup = (user) => {
    return (dispatch) => {
        APIUtil.signup(user)
        .then(payload => dispatch(receiveCurrentUser(payload)));
    };
};