import * as APIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_CURRENT_EMAIL = 'RECEIVE_CURRENT_EMAIL';
export const RECEIVE_CURRENT_TRACK = 'RECEIVE_CURRENT_TRACK';

// regular action creators
export const receiveCurrentUser = (user) => {
    // debugger;
    return (
    {type: RECEIVE_CURRENT_USER,
    user: user}
    )
};

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveSessionErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const receiveCurrentTrack = (id) => ({
    type: RECEIVE_CURRENT_TRACK,
    id
})


// export const login = user => dispatch => { 
//     // debugger;
//     return APIUtil.login(user).then(user => 
//             {dispatch(receiveCurrentUser(user))}
//         ),
//         err => 
//             { debugger; dispatch(receiveErrors(err))}
// };

export const login = user => dispatch => {
    return (
        APIUtil.login(user).then(user => dispatch(receiveCurrentUser(user)),
        err => dispatch(receiveSessionErrors(err.responseJSON)))
    );
};

export const logout = () => dispatch => {
    //debugger;
    return (
        APIUtil.logout().then(() => dispatch(logoutCurrentUser()),
        err => dispatch(receiveSessionErrors(err.responseJSON)))
    );
};

// export const signup = (user) => {
//     return (dispatch) => {
//         APIUtil.signup(user)
//         .then(payload => dispatch(receiveCurrentUser(payload)));
//     };
// };
export const signup = user => dispatch => {
    // debugger
    return (
        APIUtil.signup(user).then(user => dispatch(receiveCurrentUser(user)),
        err => dispatch(receiveSessionErrors(err.responseJSON)))
    );
};

export const check_email = (user) => dispatch => {
    return (APIUtil.check_email(user)
        .then(payload => dispatch({
            type: RECEIVE_CURRENT_EMAIL,
            user: payload
        }),
        err => dispatch(receiveSessionErrors(err.responseJSON)))
    );
};