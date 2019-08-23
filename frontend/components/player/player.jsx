import React from 'react';
import {connect} from 'react-redux';
import {togglePause} from '../../actions/track_actions'

class Player extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            track_src: null,
        }
        // this.handlePlay = this.handlePlay.bind(this)
    }

    componentDidUpdate(prevProps) {
        const audio = this.audioEl;
        if (this.props.currentTrack !== prevProps.currentTrack) {
            // this.setState ({
            //     track_src: this.props.tracks[this.props.currentTrack].audioUrl
            // }, () => {
            //     audio.src = this.state.track_src;
            //     audio.play();
            // })
            audio.src = this.props.tracks[this.props.currentTrack].audioUrl
            audio.load();
            if (!this.props.paused) {
                audio.oncanplay = function() {
                    this.play();
                }
            }
        }
        if (this.props.paused !== prevProps.paused) {
            this.props.paused ? audio.pause() : audio.play();
        }
    }

    // handlePlay() {
    //     this.props.togglePause();
    // }

    render() {
        const pauseStateClass = this.props.paused ? 'fas fa-play' : 'fas fa-pause'
        return (
            <>
                <section className="player-section">
                    <div className="player-controls">
                        <button className='fas fa-step-backward'></button>
                        <button className={pauseStateClass}
                                onClick={this.props.togglePause}></button>
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
    currentTrack: state.ui.player.track,
    paused: state.ui.player.paused,
    tracks: state.entities.tracks,
});

const mapDispatchToProps = dispatch => ({
    togglePause: () => dispatch(togglePause()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Player);