import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/**
 * random password generator
 */
function randomPassword(length) {
    var chars = "abcdefghijklmnopqrstuvwxyz~.`!@#$%^&*()-+<>|\/\\=?;:'\"ABCDEFGHIJKLMNOP1234567890";
    var pass = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    return pass;
}

/**
 * the entire password update form
 */
class PasswordFields extends Component {
    constructor(props) {
        super(props);
        this.state = { newpassword: '', confpassword: '', newpasswdgenerated: false, copied: false};
        this.generateNewPassword = this.generateNewPassword.bind(this);
        this.handleNewPasswordChange = this.handleNewPasswordChange.bind(this);
        this.handleConfPasswordChange = this.handleConfPasswordChange.bind(this);
        this.handlePasswdCopyClick = this.handlePasswdCopyClick.bind(this);
    };

    generateNewPassword()
    {
        const newPassword = randomPassword(10);
        this.newPasswdFld.setAttribute('type', 'text');
        this.setState({ newpassword: newPassword, confpassword: '', newpasswdgenerated: true, copied: false });
    }

    handleNewPasswordChange(e)
    {
        this.setState({ newpassword: e.target.value, newpasswdgenerated: false });
        this.newPasswdFld.setAttribute('type', 'password');
    }

    handleConfPasswordChange(e)
    {
        this.setState({ confpassword: e.target.value });
    }

    handlePasswdCopyClick(e)
    {
        this.setState({ copied: true });
        this.newPasswdFld.select();
        document.execCommand("Copy");
    }

    render() {
        return (
            <form>
                <div className="form-group row mt-4">
                    <label className="col-2 col-form-label">Current Password</label>
                    <div className="col-10">
                        <input type="password" placeholder="Your Current Password" className="form-control" />
					</div>
                </div>

                <div className="form-group row">
                    <label className="col-2 col-form-label">New Password</label>
                    <div className="col-10">
                        <input type="password" ref={(el) => this.newPasswdFld = el} placeholder="Enter New password" onChange={this.handleNewPasswordChange} value={this.state.newpassword} className="form-control" />
					</div>
                </div>
                <div className="form-group row">
                    <label className="col-2 col-form-label">Confirm New Password</label>
                    <div className="col-10">
                        <input type="password" placeholder="Re-Enter New password" onChange={this.handleConfPasswordChange} value={this.state.confpassword} className="form-control" />
                    </div>
                </div>

                <div className="row pt-5">
                    <div className="col-8">

                        <GenerateBtn onGenerateClick={this.generateNewPassword} />

                        <CopyGeneratedPasswd 
                            enablebtn={this.state.newpasswdgenerated} 
                            copied={this.state.copied} 
                            onPasswdCopyClick={this.handlePasswdCopyClick} />

                    </div>
                    <div className="col-4">
                        <p className="text-right">
                            <button type="submit" className="btn btn-space btn-primary">Update Password</button>
                        </p>
                    </div>
                </div>
			</form>
        );
    }
}

/**
 * the generate button component
 */
class GenerateBtn extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <button type="button" onClick={this.props.onGenerateClick} className="btn btn-rounded btn-space btn-secondary">
                <i className="icon icon-left s7-lock"></i> Gen. Password
            </button>
        );
    }
}

/**
 * the generate button component
 */
class CopyGeneratedPasswd extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        const toreturn = this.props.enablebtn? 
                        <button onClick={this.props.onPasswdCopyClick} type="button" className="btn btn-dark custom-tooltip">
                            <span className="custom-tooltiptext">
                                {this.props.copied ? 'password copied' : 'copy password !'}
                            </span>
                            <i className="icon s7-copy-file"></i>
                        </button>
                        :
                        null;
        return toreturn;
    }
}

class MainPasswordsComponent extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <PasswordFields />
            </div>
        );
    };
}

ReactDOM.render(<MainPasswordsComponent />, document.getElementById('passwd'));
