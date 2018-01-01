import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TimeSlipForm extends Component{
  constructor(props){
    super(props)
    this.state = { 
      descriptionInput: '',
      languageInput: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({[name]: value});
  }
  
  handleSubmit(e){
    e.preventDefault();
    this.props.addTimeSlip(this.state.languageInput, this.state.descriptionInput)
    this.setState({languageInput: '', descriptionInput: ''});
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
      'color': '#344559',
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          name="languageInput"
          style={inputStyle}
          type="text" 
          placeholder="technology..."
          value={this.state.languageInput} 
          onChange={this.handleInputChange} />
        <input
          name="descriptionInput"
          style={inputStyle}
          type="text"
          placeholder="description..."
          value={this.state.descriptionInput} 
          onChange={this.handleInputChange} />
        <button>
        Add New Study Resource</button>
      </form>
    )
  }
}

TimeSlipForm.propTypes = {
  addTimeSlip: PropTypes.func
}

export default TimeSlipForm;
