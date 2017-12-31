import React, { Component } from 'react';
import TimeSlipForm from './TimeSlipForm';
import TimeSlipItem from './TimeSlipItem';
import * as apiCalls from './api';

class TimeSlipList extends Component{
  constructor(props){
    super(props)
    this.state = {
      timeSlips: []
    }
    this.loadTimeSlips();
    this.addTimeSlip = this.addTimeSlip.bind(this);
  }

  async loadTimeSlips(){
    let timeSlips = await apiCalls.getTimeSlips();
    this.setState({timeSlips});
  }

  async addTimeSlip(language, description){
    let newTimeSlip = await apiCalls.createTimeSlip(language, description);
    this.setState({timeSlips: [...this.state.timeSlips, newTimeSlip]});
  }

  render () {
    let timeSlip = this.state.timeSlips.map(slip => (
      <TimeSlipItem 
        key={slip._id}
        {...slip} 
      />
    ));
    let ulStyle = {};
    // let ulStyle = {'display': 'flex', 'alignContent': 'center'}
    return (
      <div>
        <h1>TStudy</h1>
        <TimeSlipForm addTimeSlip={this.addTimeSlip} />
        <ul style={ulStyle}>
          {timeSlip}
        </ul>
      </div>
    )
  }
}

export default TimeSlipList;
