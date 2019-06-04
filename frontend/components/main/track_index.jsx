import React from 'react';
import { connect } from 'react-redux'

class TrackIndex extends React.Component {
    constructor(props) {
        super(props);
    };
    

    render() {
        return(
            <h1>hi</h1>
        )
    }



};

const msp = state => {

    return ({
        tracks: state.entities.tracks
    });
};

const mdp = dispatch => {
    return ({

    });
};

export default connect(msp,mdp)(TrackIndex);