import React from 'react';

class Volume extends React.Component {
    constructor(props) {
        super(props);

        this.handleVolChange = this.handleVolChange.bind(this)
    }

    handleVolChange(e) {
        let val = 100 - (e.clientY - this._bar.getClientRects()[0].y)
        if (val < 0) val = 0;
        if (val > 100) val = 100;
        console.log(val)
        this.props.onVolChange(val / 100)
    }


    render() {
        return (
            <div id='volume'>
                <button className='fas fa-volume-up'></button>
                <div id='volume-background'
                    onMouseDown={this.handleVolChange}></div>
                <div id='volume-bar'
                    ref={(ref) => this._bar = ref}>
                    <div id='volume-bar-val'
                        ref={(ref) => this._barVal = ref}
                        style={{height: (this.props.val * 100) + '%' }}>
                    </div>
                </div>
                <div id='volume-bar-head'></div>
            </div>
        )
    }
}

export default Volume