import * as APIUtil from '../util/track_api_util';

export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK_ERRORS = 'RECEIVE_TRACK_ERRORS';

export const receiveTrack = (track) => {
    return ({
        type: RECEIVE_TRACK,
        track
    })
};

export const receiveTracks = (tracks) => {
    return ({
        type: RECEIVE_TRACKS,
        tracks
    })
};

export const fetchTrack = (id) => dispatch => {
    return (
        APIUtil.fetchTrack(id).then((track) => dispatch(receiveTrack(track))),
        error => dispatch({
            type: RECEIVE_TRACK_ERRORS,
            error
        })
    );
};

export const fetchTracks = () => dispatch => {
    // debugger
    return (
        APIUtil.fetchTracks().then((tracks) => dispatch(receiveTracks(tracks))),
        error => dispatch({
            type: RECEIVE_TRACK_ERRORS,
            error
        })
    );
};
