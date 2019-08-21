import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';
import { RECEIVE_SESSION_ERRORS } from '../actions/session_actions';

const modalReducer = (state={}, action) =>{
    
    switch (action.type) {
        case OPEN_MODAL:
            return action.modal;
        case CLOSE_MODAL:
            return null;
        case RECEIVE_SESSION_ERRORS:
            return state;
        default:
            return null;
    }
}

export default modalReducer;