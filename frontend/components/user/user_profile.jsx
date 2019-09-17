import React from 'react';
import { connect } from 'react-redux';


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
                <div className="profile-body">
                    <div className="profile-tabs"></div>
                    <div className='profile-main'></div>
                    <div className='profile-side'></div>
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