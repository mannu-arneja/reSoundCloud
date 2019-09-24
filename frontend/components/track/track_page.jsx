import React from 'react'

class TrackPage extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className='trackpage-container'>
                --track page--
                # {this.props.match.params.id} !
            </div>
        )
    }
}

export default TrackPage