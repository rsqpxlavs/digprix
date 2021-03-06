import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import FormInpFld from './password-fields';
import { GenerateBtn, CopyGeneratedPasswd } from './generate-and-copy';

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
 * password show hide eye btn component
 */
class EyeBtn extends Component {
    constructor(props){
        super(props);
        this.state = { showpasswd: false };
        this.togglePassword = this.togglePassword.bind(this);
    }

    togglePassword(){
        this.setState((prevState, props) => ({ showpasswd: !prevState.showpasswd }));
        this.props.onTogglePasswordShowClick(!this.state.showpasswd);
    }

    render(){
        const btnIcon = this.state.showpasswd ? 
                        <i className="fa fa-eye" aria-hidden="true"></i> : <i className="fa fa-eye-slash" aria-hidden="true"></i>;

        return (
            <button onClick={this.togglePassword} type="button" className="btn btn-secondary">
                {btnIcon}
            </button>
        );
    }
}

/**
 * password field and its container along with the show/hide password btn
 */
class FieldAndBtn extends Component{
    constructor(props){
        super(props);
        this.state = { fieldType: 'password', fieldValueChanged: false };
        this.handleToggleEvent = this.handleToggleEvent.bind(this);
        this.fieldValChanged = this.fieldValChanged.bind(this);
    }

    handleToggleEvent(show){
        if (show === true) this.setState({ fieldType: 'text' });
        else this.setState({ fieldType: 'password' });
    }

    fieldValChanged(){
        this.setState({ fieldValueChanged: true});
        this.props.onFieldValChange(true);
    }

    render(){
        return (
            <div className={this.props.theclassname}>
                <div className="col-10">
                    <FormInpFld placeholder={this.props.placeholder} fieldtype={this.state.fieldType} fldName={this.props.fieldName} onValueChange={this.fieldValChanged} />
                </div>
                <div className="col-2">
                    <EyeBtn onTogglePasswordShowClick={this.handleToggleEvent} />
                </div>
            </div>
        );
    }
}

/**
 * the entire password update form
 */
class PasswordFields extends Component {
    constructor(props) {
        super(props);
        this.state = { generatedPasswd: '', newpasswdgenerated: false, copied: false};
        this.generateNewPassword = this.generateNewPassword.bind(this);
        this.handlePasswdCopyClick = this.handlePasswdCopyClick.bind(this);
        this.valueChanged = this.valueChanged.bind(this);
        this.clearPasswd = this.clearPasswd.bind(this);
    };

    generateNewPassword(char)
    {
        const newPassword = randomPassword(char);
        this.setState({ generatedPasswd: newPassword, newpasswdgenerated: true, copied: false });
    }

    handlePasswdCopyClick(e)
    {
        this.setState({ copied: true });
        
        this.tmpelem.select();
        document.execCommand("Copy");
    }

    clearPasswd(e){
        e.preventDefault();
        this.setState({ generatedPasswd: '', newpasswdgenerated: false, copied: false });
    }

    valueChanged(status){
        //if it is the new password field
        if (status === true) this.setState({ generatedPasswd: '', newpasswdgenerated: false, copied: false });
    }

    render() {
        return (
            <div>
                <FieldAndBtn theclassname="form-group row mt-4" placeholder="Your Current Password" fieldName="curr_password" onFieldValChange={this.valueChanged.bind(this, false)} />

                <FieldAndBtn theclassname="form-group row" placeholder="Enter New password" fieldName="password" onFieldValChange={this.valueChanged.bind(this,true)} />

                <FieldAndBtn theclassname="form-group row mt-4" placeholder="Re-Enter New password" fieldName="password_confirmation" onFieldValChange={this.valueChanged.bind(this, false)} />

                <div className="row mt-4">
                    {this.state.newpasswdgenerated ?
                        <div style={{ marginLeft: '17px' }}>
                            <input ref={(el) => this.tmpelem = el} type="text" className="passwd-copy-fld-tmp" value={this.state.generatedPasswd} readOnly="readonly" /> &nbsp;&nbsp;&nbsp; <a className="text-danger" onClick={this.clearPasswd} href="#"><i className="fa fa-times-circle fa-lg" aria-hidden="true"></i></a>
                        </div>
                        :
                        null
                    }
                    
                    <div className="clearfix"></div>
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
            </div>
        );
    }
}

ReactDOM.render(<PasswordFields />, document.getElementById('passwd'));
