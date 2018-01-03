import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TimeSlipForm extends Component{
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
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateField = this.validateField.bind(this);
    this.checkSubmit = this.checkSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  componentDidMount(){
    this.language.focus();
  }

  handleInputChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({[name]: value}, () => this.validateField(name, value));
  }

  validateField(inputName, value) {
    switch(inputName) {
    case 'language':
      let languageValid = value.length <= 1000;
      this.setState({languageValid}, () => this.validateForm());
      break;
    case 'url':
      let urlValid = value.length <= 1000;
      this.setState({urlValid}, () => this.validateForm());
      break;
    case 'description':
      let descriptionValid = value.length <= 30000 && value.length > 2;
      this.setState({descriptionValid}, () => this.validateForm());
      break;
    default:
      break;
  }
}

validateForm() {
  this.setState({formValid: this.state.languageValid && this.state.urlValid && this.state.descriptionValid});
}

  handleSubmit(e){
    this.props.addTimeSlip(
      this.state.language, 
      this.state.url,
      this.state.description
    )
    this.setState({language: '', url: '', description: '', descriptionValid: false, formValid: false});
    this.language.focus();
  }

  checkSubmit(e) {
    if(e.key === 'Enter' && e.shiftKey === false) {
      if (this.state.formValid) {
        this.handleSubmit(e);
      } else {
        // color the discription outline red
      }
    }
  }

  render(){
    return (
      <form style={{marginBottom: '50px'}}>
        <input 
          name="language"
          ref={(input) => { this.language = input; }}
          autoComplete="off"
          onChange={this.handleInputChange}
          onKeyPress={this.checkSubmit}
          type="text" 
          placeholder="Technology..."
          value={this.state.language} />
        <input 
          name="url"
          ref={(input) => { this.url = input; }}
          autoComplete="off"
          onChange={this.handleInputChange}
          onKeyPress={this.checkSubmit}
          type="text" 
          placeholder="Url..."
          value={this.state.url} />
        <textarea
          name="description"
          autoComplete="off"
          onChange={this.handleInputChange}
          onKeyPress={this.checkSubmit}
          value={this.state.description} 
          placeholder="Description...">
        </textarea>
        <button type="button" style={{display: 'none'}}>
        Add New Study Resource</button>
      </form>
    )
  }
}

TimeSlipForm.propTypes = {
  addTimeSlip: PropTypes.func
}

export default TimeSlipForm;
