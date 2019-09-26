import React from 'react';
import { closeModal, openModal } from '../../actions/modal_actions';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            username: '',
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showErrors = this.showErrors.bind(this);
        // this.handleContinue = this.handleContinue.bind(this);
        // this.continue = this.continue.bind(this);
    }

    handleUpdate(field) {
        return e => this.setState({[field]: e.target.value})
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
    };
    // handleSubmit(e) {
    //     debugger
    //     e.preventDefault();
    //     this.props.processForm(this.state).then(
    //         (closeModal()),
    //         (() => openModal(this.props.formType))
    //     );
    // };

    // handleContinue(e) {
    //     e.preventDefault();
    //     this.props.processForm(this.state).then
    // }

    // continue(){
    //     this.props.closeModal();
    //     this.props.openModal('login');
    // }

    showErrors() {

        // let errorText;
        // if (this.props.errors.errors) {
        //     debugger;
        //     this.props.errors.errors.forEach(err => {
        //         errorText = <p>{err}</p>;
        //     });
        // }
        // return errorText;
        return (
            <div>
                {this.props.errors.map((err, i) => (
                    <p key={`error-${i}`} className="errorText">{err}</p>
                ))}
            </div>
        );
    };


    loginForm() {

        return (
            <>
            < form onSubmit = { this.handleSubmit } className = "login-form" >
                <label>
                <input type="text"
                    value={this.state.email}
                    onChange={this.handleUpdate('email')}
                    className="login-field"
                    placeholder="Your email address *"
                />
                </label >
                <br/>
                <label>
                    <input type="password"
                    value={this.state.password}
                    onChange={this.handleUpdate('password')}
                    className="login-field"
                    placeholder="Your password *"
                />
                </label>
                <br/>
                {this.showErrors()}
                <input type="submit" value="Continue" className="signup-button" />
            </form >
            </>
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
                    placeholder="Your display name *"
                />
                </label >
                <br/>
                <label>
                <input type="text"
                    value={this.state.email}
                    onChange={this.handleUpdate('email')}
                    className="login-field"
                    placeholder="Your email address *"
                />
                </label >
                <br/>
                <label>
                    <input type="password"
                    value={this.state.password}
                    onChange={this.handleUpdate('password')}
                    className="login-field"
                    placeholder="Your password *"
                />
                </label>
                <br/>
                {this.showErrors()}
                <input type="submit" value="Continue" className="signup-button" />
            </form >
        )
    }

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