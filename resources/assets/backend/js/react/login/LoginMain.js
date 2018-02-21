import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import NProgress from 'nprogress';
import '../../libs/nprogress/nprogress.css';
import '../../../../../../public/assets/backend/css/error-tooltip.css';

/**
*error message alert component
*/
function ErrorAlert(props)
{
    const renderable = 
        (props.isError)? 
        <div className="alert alert-danger" role="alert">
            <strong><i className="fa fa-warning faa-flash animated"></i> Oh snap!</strong> incorrect credentials
        </div>
        :
        null
    return renderable;
}

/**
*valodation tooltip error component
*/
function ErrorTip(props)
{
    const renderable = 
    (props.invalid)? 
        <div className="errtip right">
            <span className="arrow"></span>
            <span className="text">{props.msg}</span>
        </div>
        :
        null
    return renderable;
}

/**
*tiny welcome back component
*/
function WelcomeBack(props) {
    const renderable = <span className="splash-description text-center mt-5 mb-5">
                            {props.loggedIn === true ? (
                                <div>
                                    Welcome Back <span className="text-info">{props.firstName}</span>
                                </div>
                                ) : 
                                'Login to your account'
                            }
                        </span>

    return renderable;
}

/**
*Main form component for backend login
*/
class LoginMain extends Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleRememberChange = this.handleRememberChange.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.state = {
                    user: '', 
                    password: '', 
                    remember: true, 
                    loggedin: false,
                    loggedInUser: '',
                    error: false, 
                    usererr: false, 
                    validationErrUsername: '', 
                    passworderr: false,
                    validationErrPasswd: ''
                };
    }

    validateFields()
    {
        if(this.state.user === '')
        {
            return {error: true, fld: {point: 'usererr', placeholder: 'validationErrUsername'}, msg: 'enter username'};
        }
        else if(this.state.user.length < 5)
        {
            return {error: true, fld: {point: 'usererr', placeholder: 'validationErrUsername'}, msg: 'username too small'};
        }
        else if(this.state.password === '')
        {
            return {error: true, fld: {point: 'passworderr', placeholder: 'validationErrPasswd'}, msg: 'password left empty'};
        }
        else if(this.state.password.length < 6)
        {
            return {error: true, fld: {point: 'passworderr', placeholder: 'validationErrPasswd'}, msg: 'too small password'};
        }
        
        return {error: false};
    }

    handleFormSubmit(e) {
        e.preventDefault();
        this.setState({error: false});

        const validate = this.validateFields();
        if(validate.error === false)
        {
            //disable the submit button
            this.submitBtn.setAttribute("disabled", "disabled");

            //nprogress start
            NProgress.set(0.4);
            NProgress.inc();

            const scopeThis = this;

            //hit the server
            axios.post(`${trans._loginHIT}`, {
                username : scopeThis.state.user,
                password : scopeThis.state.password,
                remember : scopeThis.state.remember
            }).then((response) => {
                NProgress.done();
                
                if(response.data.authenticated === true)
                {
                    scopeThis.setState({loggedin: true, loggedInUser: response.data.firstname});

                    location.assign(response.data.intended);
                    return;
                }

                scopeThis.setState({error: true, password: ''});
                scopeThis.submitBtn.removeAttribute("disabled");
            })
            .catch((error) => console.log(error));
            
            return;
        }

        const ErrorField = validate.fld;
        const ErrorMsg = validate.msg;

        this.setState({
            [ErrorField.point]: true, [ErrorField.placeholder]: ErrorMsg
        });

        return;
    }

    handleRememberChange() {
        this.setState((prevState, props) => ({remember: !prevState.remember}));
    }

    handleFormChange(e)
    {
        let fieldType = e.target.type;
        if (fieldType === 'text'){
            this.setState({user: e.target.value.trim(), usererr: false, validationErrUsername: ''});
        }
        else if (fieldType === 'password'){
            this.setState({password: e.target.value, passworderr: false, validationErrPasswd: ''});
        }

        return;
    }

    render() {
        return (
            <div>
                <WelcomeBack loggedIn={this.state.loggedin} firstName={this.state.loggedInUser} />

                <ErrorAlert isError={this.state.error} />

                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="icon s7-user"></i></span>
                            <input id="username" type="text" value={this.state.user} onChange={this.handleFormChange} placeholder="Username/ Email/ Mobile" autoComplete="off" autoFocus className="form-control" />
                            <ErrorTip invalid={this.state.usererr} msg={this.state.validationErrUsername} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group"><span className="input-group-addon"><i className="icon s7-lock"></i></span>
                            <input id="password" type="password" value={this.state.password} onChange={this.handleFormChange} placeholder="Password" className="form-control" />
                            <ErrorTip invalid={this.state.passworderr} msg={this.state.validationErrPasswd} />
                        </div>
                    </div>
                    <div className="form-group login-submit">
                        <button type="submit" ref={(el) => this.submitBtn = el} className="btn btn-lg btn-primary btn-block">Login</button>
                    </div>
                    <div className="form-group row login-tools">
                        <div className="col-6 login-remember">
                            <label className="custom-control custom-checkbox mt-2">
                                <input type="checkbox" checked={this.state.remember} onChange={this.handleRememberChange} name="remember" className="custom-control-input" />
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description">Remember me</span>
                            </label>
                        </div>
                        <div className="col-6 pt-2 text-right login-forgot-password"><a href={trans._resetURI}>Forgot Password?</a></div>
                    </div>
                </form>
            </div>
        );
    }
}

if (document.getElementById('Login-module')) {
    ReactDOM.render(<LoginMain />, document.getElementById('Login-module'));
}
