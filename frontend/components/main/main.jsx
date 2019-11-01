import React from 'react';
import TrackIndex from './track_index';
import { connect } from 'react-redux';
import SideProfile from './side-profile';
import { fetchUsers } from '../../actions/user_actions';

//'discover' and after logging in

class Main extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            fetched: false
        }
    };


    componentDidMount() {
        this.props.fetchUsers()
        .then(this.setState({
            fetched: true,
        }))
    }

    render() {
        let sideProfs = null;
        if (this.state.fetched) {
            sideProfs = Object.values(this.props.users).filter(user => user.photoUrl).map( user => {
                return (
                    <SideProfile key={`user-${user.id}`} id={user.id} />
                )
            })

        }
        return(
            <div className="main-container">
                <div className='main-body'>
                    <h2 className='main-font'>New Music Now</h2>
                    <TrackIndex />
                </div>
                <div className='main-side'>
                    <div className='side-profiles light-font'>
                        <i className="fas fa-user-friends"></i>
                        Who to Follow
                    </div>
                    {sideProfs}
                </div>
            </div>
        )
    }

    
    
};

const msp = (state) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users
    });
};

const mdp = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(msp, mdp)(Main);