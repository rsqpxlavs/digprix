import React, { Component } from 'react';

/**
 * the form input fields
 */
class FormInpFld extends Component {
    state = { value: '' };

    handleValueChange = (e) => {
        this.setState({ value: e.target.value });
        this.props.onValueChange();
    }

    render = () => {
        const field = <input className="form-control" type={this.props.fieldtype} name={this.props.fldName}
                            placeholder={this.props.placeholder}
                            onChange={this.handleValueChange} 
                            value={this.state.value} />

        return field;
    }
}

export default FormInpFld;
