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
    this.handleKeyPress = this.handleKeyPress.bind(this);
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

  handleKeyPress(e) {
    if(e.key === 'Enter' && e.shiftKey === false) {
      this.handleSubmit(e); // <--- all the form values are in a prop
    }
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
          onKeyPress={this.handleKeyPress}
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
