import React from 'react';
import PreNavContainer from './pre_nav_container';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className='front-hero'>
                <div className="logo">
                    <i className="fab fa-soundcloud fa-3x"></i>
                    <h1>reSOUNDCLOUD</h1>
                </div>
                <PreNavContainer />
            </div>
        )
    }



};

export default NavBar;

// const msp = state => {
//     return({
//         currentUser: state.entities.users[state.session.id]
//     });
// }

// const mdp = dispatch => {
//     return ({

//     });
// }