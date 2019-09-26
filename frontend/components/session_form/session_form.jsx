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
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
    };

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
        const signupForm = 
        <>
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
        </>

        const loginForm =
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

        // switch (this.props.formType) {
        //     case 'login':
        //         return loginForm;
        //     case 'signup':
        //         return signupForm;
        //     default:
        //         return null;
        // }
        let inputUsername = null;
        if (this.props.formType === 'signup') {
            inputUsername = 
                <input type="text"
                value={this.state.username}
                onChange={this.handleUpdate('username')}
                className="login-field"
                placeholder="Your display name *"
                />
        }

        return (
        <>
            < form onSubmit = { this.handleSubmit } className = "signup-form" >
            <label>
                {inputUsername}
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
        </>
        )
    }

};


export default SessionForm;