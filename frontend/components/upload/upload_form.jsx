import React from 'react';
import { connect } from 'react-redux';
import { uploadTrack } from '../../actions/track_actions';

class UploadForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            desc: "",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
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
        debugger
        this.props.upload(formData).then(this.props.history.push('/tracks'))
    }
    
    render() {


        return(
            <div className="upload-container">
                <div className="up-form">
                    <form onSubmit={this.handleSubmit}>
                        <div className="track-file">
                            <input type="file" className="signup-button" ></input>
                            <label>choose file to upload</label>
                            <p>Provide FLAC, WAV, ALAC or AIFF for best audio quality.</p>
                        </div>
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
                               className="signup-button"
                        />
                    </form>
                </div>
            </div>
        )
    }
    
}


const msp = (state) => {
    return ({
        currentUser: state.entities.users[state.session.id]
    });
};

const mdp = dispatch => {
    return ({
        upload: (track) => dispatch(uploadTrack(track))
    })
}

export default connect(msp,mdp)(UploadForm)