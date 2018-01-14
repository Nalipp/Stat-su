import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputCpt from './inputCpt';
import TextAreaCpt from './TextAreaCpt';

class Form extends Component{
  constructor(props){
    super(props)
    this.state = { 
      language: '',
      url: '',
      description: '',
      languageValid: true,
      urlValid: true,
      descriptionValid: false,
      formValid: false,
      isErrorBorder: false,
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateField = this.validateField.bind(this);
    this.checkSubmit = this.checkSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleInputChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({[name]: value}, () => this.validateField(name, value));
  }

  validateField(inputName, value) {
    console.log('inputName', inputName); 
    console.log('value', value); 
    switch(inputName) {
    case 'language':
      var languageValid = value.length < 30;
      this.setState({languageValid}, () => this.validateForm());
      break;
    case 'url':
      var urlValid = value.length < 10000;
      this.setState({urlValid}, () => this.validateForm());
      break;
    case 'description':
      var descriptionValid = value.length < 1000 && value.length > 4;
      this.setState({descriptionValid, isErrorBorder: !descriptionValid}, 
        () => this.validateForm());
      break;
    default:
      break;
    }
  }

  validateForm() {
    this.setState({formValid: 
      this.state.languageValid && 
      this.state.urlValid && 
      this.state.descriptionValid});
  }

  handleSubmit(){
    this.props.addTimeSlip(
      this.state.language, 
      this.state.url,
      this.state.description
    )
    this.setState({
      language: '', 
      url: '', 
      description: '', 
      descriptionValid: false, 
      formValid: false
    });
  }

  checkSubmit(e) {
    console.log('this.state.formValid', this.state.formValid);
    if(e.key === 'Enter' && e.shiftKey === false) {
      if (this.state.formValid) return this.handleSubmit(e);
      console.log(this.state.isErrorBorder);
      this.setState({isErrorBorder: true}, () => console.log(this.state.isErrorBorder));
    }
  }

  render(){
    return (
      <form style={{marginBottom: '50px'}}>
        <InputCpt 
          name="language"
          placeholder="Topic..."
          value={this.state.language}
          valid={this.state.languageValid}
          onChange={this.handleInputChange}
          onKeyPress={this.checkSubmit}
        />
        <InputCpt 
          name="url"
          placeholder="Link..."
          value={this.state.url}
          valid={this.state.urlValid}
          onChange={this.handleInputChange}
          onKeyPress={this.checkSubmit}
        />
        <TextAreaCpt
          name="description"
          placeholder="Description..."
          value={this.state.description} 
          valid={!this.state.isErrorBorder}
          onChange={this.handleInputChange}
          onKeyPress={this.checkSubmit}
        ></TextAreaCpt>
        <button type="button" style={{display: 'none'}}>
        Add New Study Resource</button>
      </form>
    )
  }
}

Form.propTypes = {
  addTimeSlip: PropTypes.func
}

export default Form;
