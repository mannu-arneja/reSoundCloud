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
            if (this.props.paused) {
                this.props.togglePause();
            }
        } else {
            this.props.togglePause();
        }
    }

    componentDidUpdate() {
        // debugger;
    }

    render() {
        if (this.props.tracks) {
            const { id, title, author, imageUrl } = this.props.tracks[this.props.trackID];
            const { paused, currentTrack } = this.props
            let show = currentTrack===id ? 'button-show' : '';
            let pauseStateClass = 'fas fa-play i-nudge'
            if (currentTrack) {
                if (!paused && currentTrack===id) {
                    pauseStateClass = 'fas fa-pause';
                }
            };
            return (
                <li className="track-list-item">
                    <Link to={`/track/${id}`} className="track-list-title">
                    <div className="track-list-img">
                        <img src={imageUrl}/>
                    </div>
                    {title}
                    <p>{author}</p>
                    </Link>
                    <div className={`play-button ${show}`} onClick={this.playTrack}>
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