import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TimeSlipForm extends Component{
  constructor(props){
    super(props)
    this.state = { 
      languageInput: '',
      descriptionInput: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.languageInput.focus();
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
    return (
      <form onSubmit={this.handleSubmit} style={{marginBottom: '50px'}}>
        <input 
          name="languageInput"
          ref={(input) => { this.languageInput = input; }}
          autoComplete="off"
          type="text" 
          placeholder="Technology..."
          value={this.state.languageInput} 
          onChange={this.handleInputChange} />
        <textarea
          name="descriptionInput"
          autoComplete="off"
          value={this.state.descriptionInput} 
          placeholder="Description..."
          onChange={this.handleInputChange}>
        </textarea>
        <button style={{display: 'none'}}>
        Add New Study Resource</button>
      </form>
    )
  }
}

TimeSlipForm.propTypes = {
  addTimeSlip: PropTypes.func
}

export default TimeSlipForm;
