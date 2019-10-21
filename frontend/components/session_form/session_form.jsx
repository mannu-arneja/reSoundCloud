import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            username: '',
            photoFile: null,
        };
        
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
        this.showErrors = this.showErrors.bind(this);
        // this.handleContinue = this.handleContinue.bind(this);
        // this.continue = this.continue.bind(this);
    }

    handleUpdate(field) {
        return e => this.setState({[field]: e.target.value})
    };

    handleFile(e) {
        this.setState({photoFile: e.currentTarget.files[0]});
    }

    handleSubmit(e) {
        e.preventDefault();
        const { email, password, username, photoFile } = this.state
        const formData = new FormData();
        formData.append('user[email]', email);
        formData.append('user[password]', password);
        formData.append('user[username]', username);
        formData.append('user[photo]', photoFile);
        // const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => this.props.closeModal())
    };

    handleDemo() {
        this.props.login({ email: "demo@nyc.edu", password: "hunter2" })
            .then(() => this.props.closeModal());
    }

    showErrors() {

        return (
            <div>
                {this.props.errors.map((err, i) => (
                    <p key={`error-${i}`} className="errorText">{err}</p>
                ))}
            </div>
        );
    };


    // preForm() {
    //     return(
    //         < form onSubmit={this.handleSubmit} className="login-form" >
    //             <label>email:
    //             <input type="text"
    //                     value={this.state.email}
    //                     onChange={this.handleUpdate('email')}
    //                     className="login-field"
    //                 />
    //             </label>
    //             <br/>
    //             <input type="submit" value="Continue" className="submit-button" />
    //         </form >
    //     )
    // }


    render() {
        let inputNewUser = null;
        if (this.props.formType === 'signup') {
            inputNewUser = 
            <>
                <input type="file" 
                    onChange={this.handleFile}
                />
                <input type="text"
                    value={this.state.username}
                    onChange={this.handleUpdate('username')}
                    className="login-field"
                    placeholder="Your display name *"
                />
            </>
        }

        let showErrors = null;
        if (this.props.errors) {
            showErrors = 
                <div>
                    {this.props.errors.map((err, i) => (
                        <p key={`error-${i}`} className="errorText">{err}</p>
                    ))}
                </div>
        }

        return (
            <>

                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    <button className="demo-button" onClick={() => this.handleDemo()}>
                        Login as Guest
                </button>
                    <h1 className="form-divide">or</h1>

                    <form onSubmit={this.handleSubmit} className="signup-form" >
                        <label>
                            {inputNewUser}
                        </label>
                        <label>
                            <input type="text"
                                value={this.state.email}
                                onChange={this.handleUpdate('email')}
                                className="login-field"
                                placeholder="Your email address *"
                            />
                        </label>
                        <label>
                            <input type="password"
                                value={this.state.password}
                                onChange={this.handleUpdate('password')}
                                className="login-field"
                                placeholder="Your password *"
                            />
                        </label>
                        {showErrors}
                        <input type="submit" value="Continue" className="signup-button" />
                    </form >

                </div>
            </>
        )
    }

};


export default SessionForm;