import React from 'react';
import TrackIndex from './track_index';

//'discover' and after logging in

class Main extends React.Component {
    constructor(props){
        super(props);
    };

    render() {
        return(
            <div className="main-container">
                <h1>--main--</h1>
                <h1>Hear what’s trending for free in the reSoundCloud community</h1>
                <TrackIndex />
            </div>
        )
    }

    
    
};

export default Main;