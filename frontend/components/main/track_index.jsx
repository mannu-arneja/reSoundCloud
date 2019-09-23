import React from 'react';
import { connect } from 'react-redux'
import TrackListItem from './track_list_item';
import { fetchTracks } from '../../actions/track_actions';

class TrackIndex extends React.Component {
    constructor(props) {
        super(props);
    };
    
    componentDidMount(){
        this.props.fetchTracks();
    }
    
    render() {
        
        if (this.props.tracks) {

            
            let trackList = Object.values(this.props.tracks).map(track => {
                return  (
                    <TrackListItem key={`track-${track.id}`} trackID={track.id}/>
                )
            });

            return (
                <ul className="track-list">
                    {trackList}
                </ul>
            )
        }
    }
};

const msp = state => {

    return ({
        tracks: state.entities.tracks
    });
};

const mdp = dispatch => {
    return ({
        fetchTracks: () => dispatch(fetchTracks())
    })
}

export default connect(msp, mdp)(TrackIndex);