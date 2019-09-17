import React from 'react';

class UserProfile extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return(
            <div className="profile-container">
                <h1>user profile test</h1>
            </div>
        )
    }
}

export default UserProfile