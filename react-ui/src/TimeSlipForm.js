import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TimeSlipForm extends Component{
  constructor(props){
    super(props)
    this.state = { 
      languageInput: '',
      urlInput: '',
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
    this.props.addTimeSlip(
      this.state.languageInput, 
      this.state.urlInput,
      this.state.descriptionInput
    )
    this.setState({languageInput: '', urlInput: '', descriptionInput: ''});
  }

  handleKeyPress(e) {
    if(e.key === 'Enter' && e.shiftKey === false) {
      this.handleSubmit(e);
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
        <input 
          name="urlInput"
          ref={(input) => { this.urlInput = input; }}
          autoComplete="off"
          type="text" 
          placeholder="Url..."
          value={this.state.urlInput} 
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
