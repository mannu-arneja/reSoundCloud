import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { receiveCurrentTrack, togglePause } from '../../actions/track_actions';

class TrackListItem extends React.Component {
    constructor(props) {
        super(props);

        this.playTrack = this.playTrack.bind(this);
    };

    componentDidMount() {
        // debugger;
    }

    playTrack(e) {
        e.stopPropagation();
        if (this.props.currentTrack !== this.props.trackID) {
            this.props.receiveCurrentTrack(this.props.trackID);
        } else {
            this.props.togglePause();
        }
        // debugger;
    }

    render() {
        if (this.props.tracks) {
            const { id, title, author, imageUrl } = this.props.tracks[this.props.trackID];
            const { paused, currentTrack } = this.props
            const pauseStateClass = paused && currentTrack===id ? 'fas fa-pause' : 'fas fa-play'
            return (
                <li className="track-list-item">
                    <Link to={`/tracks/${id}`} className="track-list-title">
                    <div className="track-list-img">
                        <img src={imageUrl}/>
                    </div>
                    {title}
                    <p>{author}</p>
                    </Link>
                    <div className='play-button' onClick={this.playTrack}>
                        <i className={pauseStateClass}></i>
                    </div>
                </li>
            )
        }
    }

};

const msp = state => {

    return ({
        tracks: state.entities.tracks,
        paused: state.ui.player.paused,
        currentTrack: state.ui.player.track
    });
};

const mdp = dispatch => {

    return ({
        receiveCurrentTrack: (id) => dispatch(receiveCurrentTrack(id)),
        togglePause: () => dispatch(togglePause())
    });
};



export default connect(msp, mdp)(TrackListItem);