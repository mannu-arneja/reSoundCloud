import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUpdate(field) {
        return e => this.setState({[field]: e.target.value})
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
    }


    render() {

        return(
            <form onSubmit={this.handleSubmit} className="login-form">
                {this.props.formType}
                <label>username: 
                    <input type="text"
                           value={this.state.username}
                           onChange={this.handleUpdate('username')}
                           className="login-field"
                    />
                </label>
                <label>password: 
                    <input type="password"
                           value={this.state.password}
                           onChange={this.handleUpdate('password')}
                           className="login-field"
                    />
                </label>
                <input type="submit" value={this.props.formType} className="submit-button"/>
            </form>
        )

    }

};


export default SessionForm;