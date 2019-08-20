import { RECEIVE_CURRENT_EMAIL, RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_CURRENT_TRACK} from '../actions/session_actions';
import { merge } from 'lodash';



const sessionReducer = (state={id:null}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_EMAIL:
            return merge({}, state, {email: action.user.email})
        case RECEIVE_CURRENT_USER:
            const { user } = action;
            return merge({}, state, {id: user.id});
        case LOGOUT_CURRENT_USER:
            return merge({}, state, { id: null});
        case RECEIVE_CURRENT_TRACK:
            return merge({}, state, {track: action.id})
        default:
            return state;
    }
};

export default sessionReducer;