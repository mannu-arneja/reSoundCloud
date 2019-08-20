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
        if (this.state.track_src) {
            audio.src = this.state.track_src;
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentTrack !== prevProps.currentTrack) {
            this.setState ({
                track_src: this.props.tracks[this.props.currentTrack].audioUrl
            })
        }
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

const mapStateToProps = state => ({
    currentTrack: state.session.track,
    tracks: state.entities.tracks,
})


export default connect(mapStateToProps)(Player);