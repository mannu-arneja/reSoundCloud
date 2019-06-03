import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            username: '',
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleContinue = this.handleContinue.bind(this);
        // this.continue = this.continue.bind(this);
    }

    handleUpdate(field) {
        return e => this.setState({[field]: e.target.value})
    };

    handleSubmit(e) {
        debugger
        e.preventDefault();
        this.props.processForm(this.state)
        // .then(() => this.props.closeModal())
    }

    handleContinue(e) {
        e.preventDefault();
        this.props.processForm(this.state)
    }

    // continue(){
    //     this.props.closeModal();
    //     this.props.openModal('login');
    // }

    showErrors() {
        debugger
    }


    loginForm() {

        return (
            < form onSubmit = { this.handleSubmit } className = "login-form" >
                <label>
                <input type="text"
                    value={this.state.email}
                    onChange={this.handleUpdate('email')}
                    className="login-field"
                    placeholder="Your Email Address"
                />
                </label >
                <br/>
                <label>
                    <input type="password"
                    value={this.state.password}
                    onChange={this.handleUpdate('password')}
                    className="login-field"
                    placeholder="Your Password"
                />
                </label>
                <br/>
                <input type="submit" value="Continue" className="submit-button" />
                {this.showErrors()}
            </form >
        )
    }

    signupForm() {

        return (
            < form onSubmit = { this.handleSubmit } className = "signup-form" >
                <label>
                <input type="text"
                    value={this.state.username}
                    onChange={this.handleUpdate('username')}
                    className="login-field"
                    placeholder="Your Display Name"
                />
                </label >
                <br/>
                <label>
                <input type="text"
                    value={this.state.email}
                    onChange={this.handleUpdate('email')}
                    className="login-field"
                    placeholder="Your Email Address"
                />
                </label >
                <br/>
                <label>
                    <input type="password"
                    value={this.state.password}
                    onChange={this.handleUpdate('password')}
                    className="login-field"
                    placeholder="Your Password"
                />
                </label>
                <br/>
                <input type="submit" value="Continue" className="submit-button" />
                {this.showErrors()}
            </form >
        )
    }

    preForm() {
        return(
            < form onSubmit={this.handleSubmit} className="login-form" >
                <label>email:
                <input type="text"
                        value={this.state.email}
                        onChange={this.handleUpdate('email')}
                        className="login-field"
                    />
                </label>
                <br/>
                <input type="submit" value="Continue" className="submit-button" />
            </form >
        )
    }


    render() {
        // debugger
        // if (this.props.formType === 'signup'){
        //     return (this.preForm());
        // } else {
        //     return (this.fullForm());
        // }

        switch (this.props.formType) {
            case 'email':
                return (this.preForm());
            case 'login':
                return (this.loginForm());
            case 'signup':
                return (this.signupForm());
            default:
                return null;
        }
    }

};


export default SessionForm;