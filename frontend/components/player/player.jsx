import React from 'react';
import {connect} from 'react-redux';
import {togglePause, updateTime} from '../../actions/track_actions'
import Volume from './volume'

class Player extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            track_src: null,
            progress: 0,
            seeking: false,
            volume: 100,
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

    componentDidMount() {
        document.addEventListener('mousemove', e => {
            this.seek(e)
        });
        document.addEventListener('mouseup', e => {
            this.stopSeek(e)
        });
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

    handleBack(e) {
        this.writePending = true;
        this.setState({
            progress: 0
        }, () => this.stopSeek(e))

        if (this.props.paused) {
            this.handlePlay();
        }
    }

    handleVolChange(val) {
        this.setState({
            volume: val,
        })
    }

    startSeek(e) {
        e.preventDefault();
        let progressPx = e.clientX - this._barSeek.offsetLeft;
        let progress = progressPx / this._barSeek.clientWidth
        this.setState({
            seeking: true,
            progress: progress
        });
        this.writePending = true;
        this.seek(e)
    }

    seek(e) {
        if (this.state.seeking) {
            let progressPx = e.clientX - this._barSeek.offsetLeft;
            if (progressPx < 0) return 0;
            if (progressPx > 350) return 350;
            let progress = progressPx / this._barSeek.clientWidth
            this.setState({
                progress: progress
            });
            // this.writePending = true;
            console.log(e.clientX - this._barSeek.offsetLeft)
        }
    }
    
    stopSeek(e){
        this.setState({
            seeking: false
        });
        this.seek(e)
        if (this.writePending && this.audioEl.duration) {
            debugger;
            this.writePending = false;
            this.audioEl.currentTime = this.audioEl.duration * this.state.progress;
        }
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
                                 onMouseDown={this.startSeek}>
                            </div>
                            <div className={"progress-head " + (this.state.seeking ? 'playhead-show' : '')}
                                 style={{left: (this.state.progress * 100) + '%'}}>
                            </div>
                        </div>
                        <span>{duration}</span>
                        <Volume 
                            onVolChange={this.handleVolChange}
                        />
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