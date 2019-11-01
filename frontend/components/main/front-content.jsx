import React from 'react';
import TrackIndex from './track_index';
import PreNavContainer from '../nav/pre_nav_container';

function FrontContent(){
    return(
        <>
            <PreNavContainer />
            <div className="frontHero-container">
                <div className="frontHero-content">
                    <h2>What's next in music is first on reSoundCloud</h2>
                    <p>Upload your first track and begin your journey.
                        reSoundCloud gives you space to create, find your fans, and connect with other artists.
                    </p>
                    <br/>
                    <button className="signup-button">Start uploading today</button>
                </div>
            </div>
            <div className="front-tracks">
                <h1 className='light-font'>Hear what’s trending for free in the reSoundCloud community</h1>
                <TrackIndex limit="10" shuffle/>
            </div>
        </>
    )
}

export default FrontContent;