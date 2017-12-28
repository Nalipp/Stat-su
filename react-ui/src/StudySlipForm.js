import React, { Component } from 'react';

class StudySlipForm extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      languageInput: '',
      descriptionInput: '',
    }
    this.updateLanguageInput = this.updateLanguageInput.bind(this);
    this.updateDescriptionInput = this.updateDescriptionInput.bind(this);
  }

  updateLanguageInput(e) {
    this.setState({languageInput: e.target.value})
  }

  updateDescriptionInput(e) {
    this.setState({descriptionInput: e.target.value})
  }

  render() {
    return (
      <form>
        <input 
          type="text" 
          value={this.state.languageInput} 
          onChange={this.updateLanguageInput} />
        <input
          type="text"
          onChange={this.updateDescriptionInput} />
      </form>
    )
  }
}

export default StudySlipForm;
