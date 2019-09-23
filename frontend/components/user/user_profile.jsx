import React from 'react';
import { connect } from 'react-redux';
import ProfileTrackIndex from './profile_track_index';



class UserProfile extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        console.log(this.props.users[this.props.match.params.id])
    }

    render() {
        const user = this.props.users[this.props.match.params.id];
        return(
            <div className="profile-container">
                <div className="profile-banner">
                    <h3 className="profile-name">{user.username}</h3>
                </div>
                <div className="profile-tabs">
                    <ul>Tracks</ul>
                </div>
                <div className="profile-body">
                    <div className='profile-main'>
                        <ProfileTrackIndex user={user.id} />
                    </div>
                    <div className='profile-side'>
                        <h4>Tracks</h4>
                        <p>0</p>
                    </div>
                </div>
            </div>
        )
    }
}

const msp = state => {
    return ({
        users: state.entities.users,
        currentUser: state.session.id
    });
}

export default connect(msp)(UserProfile)