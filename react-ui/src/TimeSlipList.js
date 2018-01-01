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
    const h1Style = {
      'fontSize': '60px',
      'margin': '80px 0px 40px 0px'
    }
    const spanStyle = {
      'color': '#fff',
    }
    const timeSlip = this.state.timeSlips.map(slip => (
      <TimeSlipItem 
        key={slip._id}
        {...slip} 
      />
    ));
    return (
      <div>
        <h1 style={h1Style}>T<span style={spanStyle}>Study</span></h1>
        <TimeSlipForm addTimeSlip={this.addTimeSlip} />
        <ul>
          {timeSlip}
        </ul>
      </div>
    )
  }
}

export default TimeSlipList;
