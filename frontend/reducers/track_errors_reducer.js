import { RECEIVE_TRACK_ERRORS } from "../actions/track_actions";


const trackErrorsReducer = (oldState = [], action) => {
    debugger
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_TRACK_ERRORS:
            return action.errors;
        default: 
            return oldState;
    }
}

export default trackErrorsReducer;