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

    shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
    
    render() {
        
        if (this.props.tracks) {
            const { tracks, limit, shuffle }  = this.props;
            
            let trackList = Object.values(tracks).slice(0,limit).map(track => {
                return  (
                    <TrackListItem key={`track-${track.id}`} trackID={track.id}/>
                )
            });

            if (shuffle) this.shuffle(trackList);

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