import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class TrackListItem extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        // debugger;
    }

    playTrack(e) {
        e.stopPropagation();
        debugger;
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
        tracks: state.entities.tracks
    });



};



export default connect(msp)(TrackListItem);