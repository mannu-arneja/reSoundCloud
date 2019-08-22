import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { receiveCurrentTrack } from '../../actions/track_actions';

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
        dispatch(receiveCurrentTrack(this.props.trackID))
        // debugger;
    }

    render() {
        if (this.props.tracks) {
            const { id, title, author, imageUrl } = this.props.tracks[this.props.trackID];
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
                        <i className="fas fa-play"></i>
                    </div>
                </li>
            )
        }
    }

};

const msp = state => {

    return ({
        tracks: state.entities.tracks,
        paused: state.ui.player.paused
    });
};

const mdp = dispatch => {

    return ({
        receiveCurrentTrack: (id) => dispatch(receiveCurrentTrack(id)),
    });
};



export default connect(msp, mdp)(TrackListItem);