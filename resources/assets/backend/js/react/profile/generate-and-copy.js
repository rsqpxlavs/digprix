import React, { Component } from 'react';

/**
 * the generate button component
 */
export class GenerateBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {passwordLength: 8};
        this.lengthSelect = this.lengthSelect.bind(this);
    }

    lengthSelect(length){
        this.setState({ passwordLength: length});
        this.props.onGenerateClick(length);
    }

    render() {
        return (
            <div className="btn-group btn-space">
                <button type="button" onClick={this.props.onGenerateClick.bind(this, this.state.passwordLength)} className="btn btn-secondary"><i className="icon icon-left s7-lock"></i> Gen. Password</button>
                <button type="button" data-toggle="dropdown" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" aria-expanded="false"><span className="s7-angle-down"></span><span className="sr-only">Toggle Dropdown</span></button>
                <div role="menu" className="dropdown-menu">
                    <a href="javascript:void(0);" onClick={this.lengthSelect.bind(this, 8)} className="dropdown-item">8 Character</a>
                    <a href="javascript:void(0);" onClick={this.lengthSelect.bind(this, 12)} className="dropdown-item">12 Character</a>
                    <a href="javascript:void(0);" onClick={this.lengthSelect.bind(this, 16)} className="dropdown-item">16 Character</a>
                </div>
            </div>
        );
    }
}

/**
 * the copy to clipboard component
 */
export class CopyGeneratedPasswd extends Component {
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
