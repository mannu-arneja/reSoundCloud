import React from 'react';
import {connect} from 'react-redux';
import {togglePause, updateTime} from '../../actions/track_actions'

class Player extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            track_src: null,
            progress: 0,
            seeking: false,
        }

        this.writePending = false;
        this.seekHead = false;
        this.handlePlay = this.handlePlay.bind(this);
        this.handleTime = this.handleTime.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.startSeek = this.startSeek.bind(this);
        this.stopSeek = this.stopSeek.bind(this);
        this.seek = this.seek.bind(this);
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
            audio.autoplay = true;
            audio.load();
            // if (!this.props.paused) {
            //     audio.oncanplay = function() {
            //         this.play();
            //     }
            // }
        }
        if (this.props.paused !== prevProps.paused) {
            this.props.paused ? audio.pause() : audio.play();
        }
    }

    handlePlay() {
        if (this.props.currentTrack) {
            this.props.togglePause();
        }
    }

    handleTime() {
        const audio = this.audioEl
        this.props.updateTime(audio.currentTime)
        if (!this.state.seeking) {
            this.setState({
                progress: audio.currentTime / audio.duration
            })
        }
        // debugger;
    }

    handleBack() {
        this.setState({
            progress: 0
        })
        this.writePending = true;
        if (this.props.paused) {
            this.handlePlay();
        }
    }

    startSeek(e) {
        let progress = (e.clientX - this._barSeek.offsetLeft) / this._barSeek.clientWidth
        this.setState({
            seeking: true,
            progress: progress
        });

        this.seek(e)
    }

    seek(e) {
        if (this.state.seeking) {
            let progress = (e.clientX - this._barSeek.offsetLeft) / this._barSeek.clientWidth
            this.setState({
                progress: progress
            });
            // this.writePending = true;
        }
        
    }
    
    stopSeek(e){
        this.setState({
            seeking: false
        });
        this.seek(e)
        console.log(this.state.progress)
        this.writePending = true;

        // this.seekHead = false;
    }

    render() {
        const pauseStateClass = this.props.paused ? 'fas fa-play' : 'fas fa-pause'
        let currentTime;
        let duration;
        if (this.audioEl) {
            if (this.props.currentTrack) {
                duration = this.audioEl.duration ? formatTime(this.audioEl.duration) : " ";
            }
            if (this.state.seeking) {
                currentTime = formatTime(this.audioEl.duration * this.state.progress)
            } else {
                currentTime = this.props.currentTime ? formatTime(this.props.currentTime) : " ";
            }
        }
        if (this.writePending) {
            this.writePending = false;
            this.audioEl.currentTime = this.audioEl.duration * this.state.progress;
        }
        return (
            <>
                <section className={"player-section " + (this.props.currentTrack ? 'player-show' : '')}>
                    <div className="player-controls">
                        <button className='fas fa-step-backward'
                                onClick={this.handleBack}>
                        </button>
                        <button className={pauseStateClass}
                                onClick={this.handlePlay}>
                        </button>
                        <button className='fas fa-step-forward button-disabled'></button>
                        <span className="player-time">{currentTime}</span>
                        <div className='player-progress'>
                            <div className='progress-bar'
                                 ref={(ref) => this._bar  = ref} 
                                 style={{width: (this.state.progress * 100) + '%'}}>
                            </div>
                            <div className='progress-bar-seek'
                                 ref={(ref) => this._barSeek  = ref}
                                 onMouseDown={this.startSeek}
                                 onMouseMove={this.seek}
                                 onMouseUp={this.stopSeek}
                                 onMouseLeave={(this.stopSeek, ()=> this.seekHead = false)}
                                 onMouseOver={() => this.seekHead = true}>
                            </div>
                            <div className={"progress-head " + (this.seekHead ? 'playhead-show' : '')}
                                 style={{left: (this.state.progress * 100) + '%'}}>

                            </div>
                        </div>
                        <span>{duration}</span>
                    </div>
                </section>
                <audio 
                    ref={(ref) => this.audioEl = ref}
                    onEnded={this.handlePlay}
                    onTimeUpdate={this.handleTime}>
                </audio>
            </>
        )
    }
    
}

function formatTime(s) {

    let time = new Date()

    time.setMinutes(0);
    time.setSeconds(Math.floor(s));
    
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    
    // minutes = (minutes < 10) ? `0${minutes}` : minutes;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;

    return (`${minutes}:${seconds}`)
}

const mapStateToProps = state => ({
    currentTrack: state.ui.player.track,
    paused: state.ui.player.paused,
    currentTime: state.ui.player.currentTime,
    tracks: state.entities.tracks,
});

const mapDispatchToProps = dispatch => ({
    togglePause: () => dispatch(togglePause()),
    updateTime: (time) => dispatch(updateTime(time)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Player);