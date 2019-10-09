import React from 'react';
import { connect } from 'react-redux';
import ProfileTrackIndex from './profile_track_index';
import { fetchUser } from '../../actions/user_actions';



class UserProfile extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            trackCount: 0,
            fetched: false,
        };

        this.handleTrackCountChange = this.handleTrackCountChange.bind(this);
    }

    componentDidMount() {
        const userID = this.props.match.params.id
        this.props.fetchUser(userID).then(() => this.setState({
            fetched: true
        }));
    }

    handleTrackCountChange(count) {
        this.setState ({
            trackCount: count
        })
    }

    render() {
        let user;
        let profile;

        if (this.state.fetched) {
            user = this.props.users[this.props.match.params.id]

            profile = 
                <>
                    <div className="profile-banner">
                        <h3 className="profile-name">{user.username}</h3>
                    </div>
                    <div className="profile-tabs">
                        <ul>Tracks</ul>
                    </div>
                    <div className="profile-body">
                        <div className='profile-main'>
                            <ProfileTrackIndex
                                user={user.id}
                                onTrackCountChange={this.handleTrackCountChange}
                            />
                        </div>
                        <div className='profile-side'>
                            <h4>Tracks</h4>
                            <p>{this.state.trackCount}</p>
                        </div>
                    </div>
                </>
        } else {
            profile = null;
        }


        return(
            <div className="profile-container">
                {profile}
            </div>
        )
    }
}

const msp = state => {
    return ({
        users: state.entities.users,
    });
}

const mdp = dispatch => {
    return ({
        fetchUser: (id) => dispatch(fetchUser(id))
    })
};

export default connect(msp,mdp)(UserProfile)