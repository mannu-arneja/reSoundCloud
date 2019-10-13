import React from 'react';
import { connect } from 'react-redux';
import { updateTrack } from '../../actions/track_actions';
import { withRouter } from 'react-router-dom';

class UpdateTrackModal extends React.Component {
    constructor(props) {
        super(props)

        let { title, desc, audioFile, imageFile, imageUrl } = this.props.track 
        this.state = {
            title: title || "",
            desc: desc || "",
            audioFile: audioFile,
            imageFile: imageFile || null,
            imageUrl: imageUrl || null,
        }
        this.nextForm = React.createRef();
        this.imgPrev = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAudioFile = this.handleAudioFile.bind(this);
        this.handleImgFile = this.handleImgFile.bind(this);
    }

    handleUpdate(field) {
        return e => this.setState({ [field]: e.target.value })
    };

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('track[title]', this.state.title);
        formData.append('track[desc]', this.state.desc);
        formData.append('track[author_id]', this.props.currentUser.id);
        // if (this.state.audioFile) {
        //     formData.append('track[audio]', this.state.audioFile);
        // }
        if (this.state.imageFile) {
            formData.append('track[image]', this.state.imageFile);
        }
        this.props.upload(formData).then(this.props.history.push(`/user/${this.props.currentUser.id}`))
    }

    // handleAudioFile(e) {
    //     const reader = new FileReader();
    //     const file = e.currentTarget.files[0];
    //     reader.onloadend = () =>
    //         this.setState({ audioUrl: reader.result, audioFile: file });

    //     if (file) {
    //         reader.readAsDataURL(file);
    //     } else {
    //         this.setState({ audioUrl: "", audioFile: null });
    //     }
    //     this.nextForm.current.classList.add('visible');
    // }

    handleImgFile(e) {
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
            this.setState({ imageUrl: reader.result, imageFile: file });

        if (file) {
            reader.readAsDataURL(file);
        }
        // this.imgPrev.current.classList.add('img-prev')

        // change label text
        document.getElementById("up-img-btn").childNodes[1].textContent = "Replace image"
    }

    render() {
        let preview = this.state.imageUrl ? <img src={this.state.imageUrl}></img> : null;
        return (

            <div className='modal-child edit-form'>

                <div className="up-form">
                    <form onSubmit={this.handleSubmit}>
                        
                        <div className="up-form-next" ref={this.nextForm} >
                            <div className="up-form-img" ref={this.imgPrev}>
                                {preview}
                                <div className="up-form-img-button">
                                    <label id="up-img-btn">
                                        <i className="fas fa-camera"></i>
                                        Upload image
                                        <input type="file" className='hide' onChange={this.handleImgFile} />
                                    </label>
                                </div>
                            </div>
                            <div className="up-form-right">
                                <label >Title *
                                    <input type="text"
                                        value={this.state.title}
                                        onChange={this.handleUpdate('title')}
                                        className="upForm-title"
                                        placeholder="Name your track" // import file name
                                    />
                                </label>
                                <label >Description
                                    <textarea
                                        value={this.state.desc}
                                        onChange={this.handleUpdate('desc')}
                                        className="upForm-desc"
                                        placeholder="Describe your track"
                                    />
                                </label>
                                <input type="submit"
                                    value="Save"
                                    className="up-form-button"
                                />
                            </div>
                        </div>
                    </form>
                </div>

            </div >
        )
    }

}


const msp = (state) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        track: state.entities.tracks[state.ui.modal.modalProps]
    });
};

const mdp = dispatch => {
    return ({
        update: (id, track) => dispatch(updateTrack(id, track))
    })
}

export default withRouter(connect(msp, mdp)(UpdateTrackModal))