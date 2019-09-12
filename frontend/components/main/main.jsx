import React from 'react';
import TrackIndex from './track_index';
import { connect } from 'react-redux';

//'discover' and after logging in

class Main extends React.Component {
    constructor(props){
        super(props);
    };

    render() {
        return(
            <div className="main-container">
                <h2 className='main-font'>New Music Now</h2>
                <TrackIndex />
            </div>
        )
    }

    
    
};

const msp = (state) => {
    return ({
        currentUser: state.entities.users[state.session.id]
    });
};

export default connect(msp)(Main);