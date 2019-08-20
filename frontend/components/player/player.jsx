import React from 'react';
import {connect} from 'react-redux';

class Player extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            track_src: null,
        }

    }

    componentDidMount() {
        const audio = this.audioEl;
    }

    render() {
        return (
            <>
                <section className="player-section">
                    <div className="player-controls">
                        <button className='fas fa-step-backward'></button>
                        <button className='fas fa-play'></button>
                        <button className='fas fa-step-forward'></button>
                        ----musicPlayer----
                    </div>
                </section>
                <audio 
                    ref={(ref) => this.audioEl = ref}>
                </audio>
            </>
        )
    }
    
}

export default Player;