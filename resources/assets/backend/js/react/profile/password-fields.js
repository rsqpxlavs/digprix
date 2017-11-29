import React, { Component } from 'react';

/**
 * the form input fields
 */
class FormInpFld extends Component {
    constructor(props){
        super(props);
        this.state = { value: '' };
        this.handleValueChange = this.handleValueChange.bind(this);
    }

    handleValueChange(e){
        this.setState({ value: e.target.value });
        this.props.onValueChange();
    }

    render(){
        const field = <input className="form-control" type={this.props.fieldtype} 
                            placeholder={this.props.placeholder}
                            onChange={this.handleValueChange} 
                            value={this.state.value} />

        return field;
    }
}

export default FormInpFld;
