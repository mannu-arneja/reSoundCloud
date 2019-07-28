import React from 'react';
import {connect} from 'react-redux';

class Player extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            track: null,
        }

    }

    render() {
        return (
            <section className="player-section">
                <div className="player-controls">
                    <button className='fa fa-chevron-left'></button>
                    <button className='fas fa-play'></button>
                    <button className='fa fa-chevron-right'></button>
                    ----musicPlayer----
                </div>
            </section>
        )
    }
    
}

export default Player;