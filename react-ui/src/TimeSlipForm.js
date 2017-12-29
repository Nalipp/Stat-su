import React, { Component } from 'react';

class TimeSlipForm extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      languageInput: '',
      descriptionInput: '',
    }
    this.updateLanguageInput = this.updateLanguageInput.bind(this);
    this.updateDescriptionInput = this.updateDescriptionInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateLanguageInput(e) {
    this.setState({languageInput: e.target.value})
  }

  updateDescriptionInput(e) {
    this.setState({descriptionInput: e.target.value})
  }
  
  handleSubmit(addTimeSlip) {
    this.props.addTimeSlip(this.state.languageInput, this.state.descriptionInput)
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
        <button onClick={this.handleSubmit}>Add New Study Resource</button>
      </form>
    )
  }
}

export default TimeSlipForm;
