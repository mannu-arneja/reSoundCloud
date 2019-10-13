import React from 'react';
import { connect } from 'react-redux'
import ProfileTrackItem from '../user/profile_track_item';
import { fetchTracks } from '../../actions/track_actions';


class ProfileTrackIndex extends React.Component {
    constructor(props) {
        super(props);

        this.handleTrackCountChange = this.handleTrackCountChange.bind(this);
    };

    componentDidMount() {
        // console.log(this.props.tracks.length ? 'yes' : 'no');
        if (!this.props.tracks.length) {
            this.props.fetchTracks();
        }
    }

    componentDidUpdate() {
        const count = Object.values(this.props.tracks).filter(a => a.author_id===this.props.user).length
        this.handleTrackCountChange(count);
    }

    handleTrackCountChange(count) {
        this.props.onTrackCountChange(count)
    }

    render() {
        if (this.props.tracks) {
            let trackList = Object.values(this.props.tracks).filter(el => this.props.user ? el.author_id === this.props.user : el).map(track => {
                return (
                    <ProfileTrackItem key={`track-${track.id}`} trackID={track.id} />
                )
            });


            return (
                <ul className="profile-track-list">
                    {trackList}
                </ul>
            )
        } else {
            return (
                <div className='profile-empty'>No Tracks Uploaded</div>
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

export default connect(msp,mdp)(ProfileTrackIndex);