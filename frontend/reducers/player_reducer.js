import { RECEIVE_CURRENT_TRACK } from '../actions/session_actions';
import { merge } from 'lodash';

const playerReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_TRACK:
            return merge({},state, {track: action.id})
        default:
            return state;
    }
};

export default playerReducer;