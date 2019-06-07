import { merge } from 'lodash';
import { RECEIVE_TRACK, RECEIVE_TRACKS } from '../actions/track_actions';

const tracksReducer = (oldState = [], action) => {

    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_TRACK:
            return merge({}, oldState, action.track);
        case RECEIVE_TRACKS:
            return action.tracks;
        default:
            return oldState;
    }
}

export default tracksReducer;