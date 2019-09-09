import React from 'react';

class Volume extends React.Component {
    constructor(props) {
        super(props);


    }

    handleVolChange() {
        debugger;
        this.props.onVolChange(e.target)
    }


    render() {
        return (
            <div className='volume'>
                <button className='fas fa-volume-up'></button>
                <div className='volume-bar'></div>
                <div className='volume-bar-seek'></div>
                <div className='volume-bar-head'></div>
            </div>
        )
    }
}

export default Volume