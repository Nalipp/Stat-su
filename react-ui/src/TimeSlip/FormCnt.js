import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormCpt from './../Form/FormCpt';
import InputCpt from '../Form/inputCpt';
import TextAreaCpt from '../Form/TextAreaCpt';

class FormCnt extends Component{
  constructor(props){
    super(props)
    this.state = { 
      language: '',
      url: '',
      description: '',
      languageValid: true,
      urlValid: true,
      descriptionValid: true,
      formValid: false,
      languageCharMax: 30,
      descriptionCharMax: 200
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
    switch(inputName) {
    case 'language':
      var languageValid = value.length < 31;
      this.setState({languageValid}, () => this.validateForm());
      break;
    case 'url':
      var urlValid = value.length < 10000;
      this.setState({urlValid}, () => this.validateForm());
      break;
    case 'description':
      var descriptionValid = value.length < 201;
      this.setState({descriptionValid}, () => this.validateForm());
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

  checkSubmit(e) {
    if(e.key === 'Enter' && e.shiftKey === false) {
      if (this.state.formValid) this.handleSubmit(e);
    }
  }

  handleSubmit(){
    this.props.addTimeSlip(
      this.state.language, 
      this.state.url,
      this.state.description
    )
    this.setState({
      language: '', 
      description: '', 
      url: '', 
      languageValid: true, 
      descriptionValid: true, 
      urlValid: true, 
      formValid: false,
    })
  }

  render(){
    return (
      <FormCpt>
        <InputCpt 
          autofocus
          name="language"
          placeholder="Topic..."
          value={this.state.language}
          valid={this.state.languageValid}
          handleInputChange={this.handleInputChange}
          checkSubmit={this.checkSubmit}
          charCount={this.state.language.length}
          charMax={this.state.languageCharMax}
        />

        <TextAreaCpt
          refCallback={null}
          name="description"
          placeholder="Description..."
          value={this.state.description} 
          valid={this.state.descriptionValid}
          handleInputChange={this.handleInputChange}
          checkSubmit={this.checkSubmit}
          charCount={this.state.description.length}
          charMax={this.state.descriptionCharMax}
        />

        <InputCpt
          name="url"
          placeholder="Link..."
          value={this.state.url}
          valid={this.state.urlValid}
          handleInputChange={this.handleInputChange}
          checkSubmit={this.checkSubmit}
        />
      </FormCpt>
    )
  }
}

FormCnt.propTypes = {
  addTimeSlip: PropTypes.func
}

export default FormCnt;
