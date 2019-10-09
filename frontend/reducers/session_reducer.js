import { RECEIVE_CURRENT_EMAIL, RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';
import { merge } from 'lodash';



const sessionReducer = (state={id:null}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_EMAIL:
            return merge({}, state, {email: action.user.email})
        case RECEIVE_CURRENT_USER:
            return merge({}, state, {id: Number(Object.keys(action.user))});
        case LOGOUT_CURRENT_USER:
            return merge({}, state, { id: null});
        default:
            return state;
    }
};

export default sessionReducer;