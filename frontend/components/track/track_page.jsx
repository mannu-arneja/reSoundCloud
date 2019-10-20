import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { receiveCurrentTrack, togglePause, fetchTrack } from '../../actions/track_actions';
import { openModal } from '../../actions/modal_actions';


class TrackPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            fetched: false
        };

        this.playTrack = this.playTrack.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.fetchTrack(this.props.match.params.id)
        .then(() => this.setState({fetched: true}))
    }

    playTrack(e) {
        e.stopPropagation();
        if (this.props.currentTrack !== this.props.match.params.id) {
            this.props.receiveCurrentTrack(this.props.match.params.id);
            if (this.props.paused) {
                this.props.togglePause();
            }
        } else {
            this.props.togglePause();
        }
    }

    render() {

        if (this.state.fetched) {
            const { id, title, author, author_id, imageUrl } = this.props.tracks[this.props.match.params.id];
            const { paused, currentTrack, currentUser, openModal } = this.props
            let pauseStateClass = 'fas fa-play i-nudge';
            if (currentTrack) {
                if (!paused) {
                    pauseStateClass = 'fas fa-pause';
                }
            };

            let trackAdmin = null;
            if (author_id === currentUser) {
                trackAdmin =
                    <div className='profile-track-controls'>
                        <button onClick={() => openModal('editTrack', id)}>
                            <i className="fas fa-pencil-alt"></i>Edit
                        </button>
                        <button onClick={() => openModal('deleteTrack', id)}>
                            <i className="fas fa-trash"></i>Delete
                        </button>
                    </div>
            }
        

            return (
                <div className='trackpage-container'>

                    <div className='trackpage-banner'>
                        <div className='trackpage-header'>
                            <div className={`trackpage-play button-show`} onClick={this.playTrack}>
                                <i className={pauseStateClass}></i>
                            </div>
                            <div className='trackpage-info'>
                                <Link to={`/user/${author_id}`}>
                                    <div className='trackpage-author'>{author}</div>
                                </Link>
                                <div className='trackpage-title'>{title}</div>
                            </div>
                        </div>
                        <div className='trackpage-img'>
                            <img src={imageUrl}/>
                        </div>
                    </div>

                    <div className='trackpage-main-container'>
                        <div className='trackpage-main'>
                            <div className='comment-container'>
                                <input className='comment-input' type="text" placeholder="Write a comment"/>
                            </div>
                            {trackAdmin}
                        </div>
                    </div>

                </div>
            )

        } else {
            return null;
        }//prop.tracks conditional
    }
}

const msp = state => {

    return ({
        tracks: state.entities.tracks,
        paused: state.ui.player.paused,
        currentTrack: state.ui.player.track,
        currentUser: state.session.id
    });
};

const mdp = dispatch => {

    return ({
        fetchTrack: (id) => dispatch(fetchTrack(id)),
        receiveCurrentTrack: (id) => dispatch(receiveCurrentTrack(id)),
        togglePause: () => dispatch(togglePause()),
        openModal: (mode, props) => dispatch(openModal(mode, props)),
    });
};

export default connect(msp, mdp)(TrackPage)