import { merge } from 'lodash';
import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';
import { RECEIVE_SESSION_ERRORS } from '../actions/session_actions';
import { UPDATE_TIME, PAUSED } from '../actions/track_actions';


const _init = {
    modalType: null,
    modalProps: "",
}

const modalReducer = (state=_init, action) =>{
    Object.freeze(state);

    let newState = merge({}, state)
    switch (action.type) {
        case OPEN_MODAL:
            newState.modalType = action.modal;
            newState.modalProps = action.modalProps;
            return newState;
        case CLOSE_MODAL:
            newState.modalType = null;
            return newState;
        case RECEIVE_SESSION_ERRORS:
            return state;
        case UPDATE_TIME:
            return state;
        case PAUSED:
            return state;
        default:
            return state;
    }
}

export default modalReducer;