import { merge, omit } from 'lodash';
import { RECEIVE_TRACK, RECEIVE_TRACKS, REMOVE_TRACK } from '../actions/track_actions';

const tracksReducer = (oldState = [], action) => {

    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_TRACK:
            return merge({}, oldState, action.track);
        case RECEIVE_TRACKS:
            return action.tracks;
        case REMOVE_TRACK:
            return omit(oldState, action.id);
        default:
            return oldState;
    }
}

export default tracksReducer;