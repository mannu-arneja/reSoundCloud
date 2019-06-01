import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleContinue = this.handleContinue.bind(this);
        this.continue = this.continue.bind(this);
    }

    handleUpdate(field) {
        return e => this.setState({[field]: e.target.value})
    };

    handleSubmit(e) {
        debugger
        e.preventDefault();
        this.props.processForm(this.state).then(this.continue())
    }

    handleContinue(e) {
        e.preventDefault();
        this.props.processForm(this.state)
    }

    continue(){
        debugger
        this.props.closeModal();
        this.props.openModal('login');
    }

    componentDidUpdate(){
        debugger
    }

    fullForm() {

        return (
            < form onSubmit = { this.handleSubmit } className = "login-form" >
                <label>email:
                <input type="text"
                    value={this.state.email}
                    onChange={this.handleUpdate('email')}
                    className="login-field"
                />
                </label >
                <br/>
                <label>password:
                    <input type="password"
                    value={this.state.password}
                    onChange={this.handleUpdate('password')}
                    className="login-field"
                />
                </label>
                <br/>
                <input type="submit" value="Continue" className="submit-button" />
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
                debugger
                return (this.fullForm());
            case 'signup':
                return (this.fullForm());
            default:
                return null;
        }
    }

};


export default SessionForm;