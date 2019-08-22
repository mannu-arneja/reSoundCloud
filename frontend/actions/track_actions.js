import * as APIUtil from '../util/track_api_util';

export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK_ERRORS = 'RECEIVE_TRACK_ERRORS';
export const RECEIVE_CURRENT_TRACK = 'RECEIVE_CURRENT_TRACK';
export const PAUSED = 'PAUSED';

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

export const receiveTrackErrors = (errors) => ({
    type: RECEIVE_TRACK_ERRORS,
    errors
});

export const receiveCurrentTrack = (id) => ({
    type: RECEIVE_CURRENT_TRACK,
    id
})

export const togglePause = () => ({type: PAUSED})

export const fetchTrack = (id) => dispatch => {
    return (
        APIUtil.fetchTrack(id).then((track) => dispatch(receiveTrack(track)),
            err => dispatch(receiveTrackErrors(err)))
    );
};

export const fetchTracks = () => dispatch => {
    return (
        APIUtil.fetchTracks().then((tracks) => {
            dispatch(receiveTracks(tracks));
            },
            err => dispatch(receiveTrackErrors(err)))
    );
};

export const uploadTrack = track => dispatch => {
    return (
        APIUtil.uploadTrack(track).then(track => dispatch(receiveTrack(track)),
        err => dispatch(receiveTrackErrors(err)))
    );
};