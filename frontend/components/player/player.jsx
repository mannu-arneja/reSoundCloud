import React from 'react';
import {connect} from 'react-redux';

class Player extends React.Component {
    constructor(props) {
        super(props)

        // this.state = {}

    }

    render() {
        return (
            <section className="player-section">
                <div className="player-controls">
                    ----musicPlayer----
                </div>
            </section>
        )
    }
    
}

export default Player;