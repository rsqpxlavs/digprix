import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import NProgress from 'nprogress';
import '../../../../../../public/assets/backend/lib/nprogress/nprogress.css';

export default class LoginMain extends Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleRememberChange = this.handleRememberChange.bind(this);
        this.state = {remember: true};
    }

    handleFormSubmit(e) {
        e.preventDefault();
        NProgress.set(0.4);
        NProgress.inc();
        console.log(trans.foo);
        NProgress.done();
    }

    handleRememberChange() {
        this.setState((prevState, props) => ({remember: !prevState.remember}));
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="icon s7-user"></i></span>
                        <input id="username" type="text" name="username" placeholder="Username/Email/Mobile" autoComplete="off" autoFocus className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group"><span className="input-group-addon"><i className="icon s7-lock"></i></span>
                        <input id="password" type="password" name="password" placeholder="Password" className="form-control" />
                    </div>
                </div>
                <div className="form-group login-submit">
                    <button type="submit" className="btn btn-lg btn-primary btn-block">Login</button>
                </div>
                <div className="form-group row login-tools">
                    <div className="col-6 login-remember">
                        <label className="custom-control custom-checkbox mt-2">
                            <input type="checkbox" checked={this.state.remember} onChange={this.handleRememberChange} name="remember" className="custom-control-input" />
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description">Remember me</span>
                        </label>
                    </div>
                    <div className="col-6 pt-2 text-right login-forgot-password"><a href="#">Forgot Password?</a></div>
                </div>
            </form>
        );
    }
}

if (document.getElementById('Login-module')) {
    ReactDOM.render(<LoginMain />, document.getElementById('Login-module'));
}
