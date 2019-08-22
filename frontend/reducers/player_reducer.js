import { RECEIVE_CURRENT_TRACK, PAUSED } from '../actions/track_actions';
import { merge } from 'lodash';

const playerReducer = (state={paused:true}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_TRACK:
            return merge({}, state, {track: action.id});
        case PAUSED:
            return merge({}, state, {paused: !state.paused})
        default:
            return state;
    }
};

export default playerReducer;