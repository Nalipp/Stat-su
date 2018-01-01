import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TimeSlipForm extends Component{
  constructor(props){
    super(props)
    this.state = { 
      languageInput: '',
      descriptionInput: '',
    }
    this.updateLanguageInput = this.updateLanguageInput.bind(this);
    this.updateDescriptionInput = this.updateDescriptionInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateLanguageInput(e){
    this.setState({languageInput: e.target.value})
  }

  updateDescriptionInput(e){
    this.setState({descriptionInput: e.target.value})
  }
  
  handleSubmit(){
    this.props.addTimeSlip(this.state.languageInput, this.state.descriptionInput)
  }

  render(){
    const inputStyle = {
      'display': 'block',
      'fontSize': '16px',
      'background': '#74C4F9',
      'border': 'none',
      'borderBottom': '2px solid #344559',
      'margin': '12px 0px',
      'padding': '2px 4px',
      'width': '100%',
    }
    return (
      <form>
        <input 
          style={inputStyle}
          type="text" 
          placeholder="technology..."
          value={this.state.languageInput} 
          onChange={this.updateLanguageInput} />
        <input
          style={inputStyle}
          type="text"
          placeholder="description..."
          onChange={this.updateDescriptionInput} />
        <button onClick={this.handleSubmit}>Add New Study Resource</button>
      </form>
    )
  }
}

TimeSlipForm.propTypes = {
  addTimeSlip: PropTypes.func
}

export default TimeSlipForm;
