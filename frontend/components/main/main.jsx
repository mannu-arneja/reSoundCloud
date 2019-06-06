import React from 'react';
import TrackIndex from './track_index';

class Main extends React.Component {
    constructor(props){
        super(props);
    };

    render() {
        return(
            <div className="main-container">
                <h1>Hear what’s trending for free in the SoundCloud community</h1>
                <h1>test <br />test <br />test <br />test <br />test <br />test <br />test <br />test <br />test <br /></h1>
                <h1>test <br />test <br />test <br />test <br />test <br />test <br />test <br />test <br />test <br /></h1>
                <h1>test <br />test <br />test <br />test <br />test <br />test <br />test <br />test <br />test <br /></h1>
                <h1>test <br />test <br />test <br />test <br />test <br />test <br />test <br />test <br />test <br /></h1>
                <h1>test <br />test <br />test <br />test <br />test <br />test <br />test <br />test <br />test <br /></h1>
                <h1>test <br />test <br />test <br />test <br />test <br />test <br />test <br />test <br />test <br /></h1>
                <h1>test <br />test <br />test <br />test <br />test <br />test <br />test <br />test <br />test <br /></h1>
                <TrackIndex />
            </div>
        )
    }

    
    
};

export default Main;