import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

function DeleteModal() {

    return (
        <div className='modal-child-delete'>
            <h2>Permanently delete this track?</h2>
            <div className='delete-warning'>
                Removing this track is irreversible. You will lose all the plays, likes and comments for this track with no way to get them back.
            </div>
            <span className='delete-cancel' onClick={closeModal}>Cancel</span>
            <button className='delete-confirm'>Delete Forever</button>
        </div>
    )
}

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal),
})

export default connect(null, mdp)(DeleteModal)