import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormCpt from './../Form/FormCpt';

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

    console.log('value', value);
    console.log('name', name);

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
      this.setState({isErrorBorder: true});
    }
  }

  render(){
    return (
      <FormCpt
        language={this.state.language}
        languageValid={this.state.languageValid}
        url={this.state.url}
        urlValid={this.state.urlValid}
        description={this.state.description} 
        descriptionValid={this.state.descriptionValid}
        isErrorBorder={!this.state.isErrorBorder}
        handleInputChange={this.handleInputChange}
        checkSubmit={this.checkSubmit}
      />
    )
  }
}

Form.propTypes = {
  addTimeSlip: PropTypes.func
}

export default Form;
