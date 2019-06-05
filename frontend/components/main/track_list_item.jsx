import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class TrackListItem extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        if (this.props.tracks) {
            const { id, title, author } = this.props.tracks[this.props.trackID];
            return (
                <li className="track-list-item">
                    <Link to={`/tracks/${id}`} className="track-list-title">{title}</Link>
                    <p>{author}</p>
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