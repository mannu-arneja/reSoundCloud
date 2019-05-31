import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';
import {merge} from 'lodash';

const modalReducer = (state={}, action) =>{
    
    switch (action.type) {
        case OPEN_MODAL:
            return action.modal;
        case CLOSE_MODAL:
            return null;
        default:
            return null;
    }
}

export default modalReducer;