import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { receiveCurrentTrack, togglePause } from '../../actions/track_actions';
import { openModal } from '../../actions/modal_actions';

class ProfileTrackItem extends React.Component {
    constructor(props) {
        super(props);

        this.playTrack = this.playTrack.bind(this);
    };


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

    render() {
        if (this.props.tracks) {
            const { id, title, author, imageUrl } = this.props.tracks[this.props.trackID];
            const { paused, currentTrack, openModal } = this.props
            let show = currentTrack===id ? 'button-show' : '';
            let pauseStateClass = 'fas fa-play i-nudge'
            if (currentTrack) {
                if (!paused && currentTrack===id) {
                    pauseStateClass = 'fas fa-pause';
                }
            };
            return (
                <li className="profile-track-item">
                    <div className="profile-track-img">
                        <Link to={`/track/${id}`}>
                            <img src={imageUrl}/>
                        </Link>
                    </div>
                    <div className='profile-track-right'>
                        <div className='profile-track-header'>
                            <div className={`profile-play-button ${show}`} onClick={this.playTrack}>
                                <i className={pauseStateClass}></i>
                            </div>
                            <div className='profile-track-info'>
                                <div className='profile-track-author'>{author}</div>
                                <div className='profile-track-title'>{title}</div>
                            </div>
                        </div>
                        <div className='profile-track-wave'></div>
                        <div className='profile-track-controls'>
                            <button>edit</button>
                            <button onClick={() => openModal('deleteTrack')}>delete</button>
                        </div>
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
        togglePause: () => dispatch(togglePause()),
        openModal: mode => dispatch(openModal(mode)),
    });
};



export default connect(msp, mdp)(ProfileTrackItem);