import React from 'react';

class Volume extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            prev: 0 
        };

        this.dragging = false;
        this.open = false;
        this.startDrag = this.startDrag.bind(this)
        this.dragVol = this.dragVol.bind(this)
        this.stopDrag = this.stopDrag.bind(this)
        this.toggleMute = this.toggleMute.bind(this)
    }

    componentDidMount() {
        document.addEventListener('mousemove', e => {
            this.dragVol(e)
        });
        document.addEventListener('mouseup', e => {
            this.stopDrag(e)
        });
    }

    posY(e) {
        let val = 100 - (e.clientY - this._bar.getClientRects()[0].y)
        if (val < 0) val = 0;
        if (val > 100) val = 100;
        return val;
    }

    startDrag(e) {
        e.preventDefault();
        this.dragging = true;
        this.props.onVolChange(this.posY(e) / 100)
    }

    dragVol(e) {
        if (this.dragging) {
            this.props.onVolChange(this.posY(e) / 100)
        }
    }

    stopDrag(e) {
        if (this.dragging) {
            this.dragVol(e)
            this.dragging = false
        }
        console.log(this.props.val)
    }

    toggleMute() {
        this.setState({
            prev: this.props.val
        })
        this.state.prev !== 0 ? this.props.onVolChange(this.state.prev) : this.props.onVolChange(0)
    }


    render() {
        let iconClass;
        iconClass = (this.props.val === 0) ? 'fas fa-volume-mute' : (this.props.val > .5) ? 'fas fa-volume-up' : 'fas fa-volume-down'

        return (
            <div className='volume'>
                <button className={iconClass}
                        onClick={this.toggleMute}>
                </button>
                <div className={'volume-background ' + (this.dragging ? 'vol-show' : '')}>
                    <div className="volume-bar-area"
                         onMouseDown={this.startDrag}>
                    </div>
                </div>
                <div className={'volume-bar ' + (this.dragging ? 'vol-bar-show' : '') }
                    ref={(ref) => this._bar = ref}>
                    <div className='volume-bar-val'
                        ref={(ref) => this._barVal = ref}
                        style={{height: (this.props.val * 100) + '%' }}>
                    </div>
                    <div className="volume-bar-head"
                        style={{ bottom: this.props.val * 100}}>
                    </div>
                </div>
            </div>
        )
    }
}

export default Volume