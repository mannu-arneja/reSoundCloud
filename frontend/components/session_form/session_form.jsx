import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUpdate(field) {
        return e => this.setState({[field]: e.target.value})
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state).then(this.render())
    }

    fullForm() {

        return (
            < form onSubmit = { this.handleSubmit } className = "login-form" >
            { this.props.formType }
            < label > email:
        <input type="text"
            value={this.state.email}
            onChange={this.handleUpdate('email')}
            className="login-field"
        />
                </label >
            <label>password:
                    <input type="password"
                    value={this.state.password}
                    onChange={this.handleUpdate('password')}
                    className="login-field"
                />
            </label>
            <input type="submit" value={this.props.formType} className="submit-button" />
            </form >
        )
    }

    preForm() {
        return(
            < form onSubmit={this.handleSubmit} className="login-form" >
                < label > email:
                <input type="text"
                        value={this.state.email}
                        onChange={this.handleUpdate('email')}
                        className="login-field"
                    />
                </label >
                <input type="submit" value={this.props.formType} className="submit-button" />
            </form >
        )
    }


    render() {
        // debugger
        // if (this.state.email) {
        //     {return this.fullForm()}
        // } else {
        //     {return this.preForm()}
        // }
        if (this.props.formType === 'signup'){
            return (this.preForm());
        } else {
            return (this.fullForm());
        }
    }

};


export default SessionForm;