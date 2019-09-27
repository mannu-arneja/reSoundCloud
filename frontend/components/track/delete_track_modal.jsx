import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { deleteTrack } from '../../actions/track_actions';

function DeleteTrackModal ({ closeModal }) {


    return (
        <div className='modal-child delete-warning light-font' onClick={e => e.stopPropagation()}>
            <h2>Permanently delete this track?</h2>
            <div className='delete-box'>
                Removing this track is irreversible. You will lose all the plays, likes and comments for this track with no way to get them back.
                <div className='delete-buttons'>
                    <span onClick={() => closeModal()}>Cancel</span>
                    <button >Delete Forever</button>
                </div>
            </div>
        </div>
    )
}

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    delete: (id) => dispatch(deleteTrack(id)),
})

export default connect(null, mdp)(DeleteTrackModal)