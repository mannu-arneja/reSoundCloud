import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from "../actions/session_actions";


const sessionErrorsReducer = (oldState={}, action) => {

    switch (action.type) {
        case RECEIVE_ERRORS:
            return ({}, oldState, {errors: action.errors});
        case RECEIVE_CURRENT_USER:
            return ({}, oldState, {errors: null});
        default:
            return oldState;
    }
};

export default sessionErrorsReducer;