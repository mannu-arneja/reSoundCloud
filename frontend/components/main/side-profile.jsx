import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

function SideProfile({ user }) {
    
    let photo = user.photoUrl ? <img src={user.photoUrl} /> : null;

    // if (user) {
    //     debugger;
    //     photo = <img src={user.photoUrl} />
    // }

    return(
        <>
            <div className='sideprof-container light-font'>
                <div className='sideprof-left'>
                    <div className='sideprof-img'>
                        <Link to={`user/${user.id}`}>
                            {photo}
                        </Link>
                    </div>
                    <Link to={`user/${user.id}`}>
                        <h3 className='sideprof-name'>{user.username}</h3>
                    </Link>
                </div>
                <Link to={`user/${user.id}`}>
                    <div className='sideprof-btn'>Visit</div>
                </Link>
            </div>
        </>
    )
}

const msp = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.id],
    }
}

export default connect(msp)(SideProfile);