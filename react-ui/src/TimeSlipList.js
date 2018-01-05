import React, { Component } from 'react';
import TimeSlipForm from './TimeSlipForm';
import TimeSlipItem from './TimeSlipItem';
import * as apiCalls from './api';

class TimeSlipList extends Component{
  constructor(props){
    super(props)
    this.state = {
      timeSlips: [],
    }
    this.loadTimeSlips();
    this.addTimeSlip = this.addTimeSlip.bind(this);
  }

  async loadTimeSlips(){
    let timeSlips = await apiCalls.getTimeSlips();
    this.setState({timeSlips});
  }

  async addTimeSlip(language, url, description){
    let newTimeSlip = await apiCalls.createTimeSlip(language, url, description);
    this.setState({timeSlips: [newTimeSlip, ...this.state.timeSlips]});
  }

  async deleteTimeSlip(id) {
    await apiCalls.deleteTimeSlip(id);
    let timeSlips = this.state.timeSlips.filter(slip => slip._id !== id);
    this.setState({timeSlips});
  }

  async archiveTimeSlip(timeSlip) {
    let updatedTimeSlip = await apiCalls.archiveTimeSlip(timeSlip); 
    let timeSlips = this.state.timeSlips.map(timeSlip =>
      (timeSlip._id === updatedTimeSlip._id) 
        ? {...timeSlip, completed: !timeSlip.completed}
        : timeSlip
      );
    this.setState({timeSlips});
  }

  render () {
    const wrapper = {
      display: 'flex',
      alignItems: 'center',
      margin: '80px 0px 40px 0px',
    }

    const h1Style = {
      fontSize: '60px',
      flexGrow: '2',
      color: '#344559',
      letterSpacing: '6px',
    }

    const timeSlipItem = this.state.timeSlips.map(slip => (
      (slip.completed === false ?
        <TimeSlipItem 
          key={slip._id}
          {...slip} 
          onArchive={this.archiveTimeSlip.bind(this, slip)}
        />
        : null
      )
    ));
    return (
      <div>
        <div style={wrapper}>
          <h1 style={h1Style}>T
            <span style={{color: '#fff'}}>Study</span>
          </h1>
        </div>
        <TimeSlipForm addTimeSlip={this.addTimeSlip} />
        <ul>
          {timeSlipItem}
        </ul>
      </div>
    )
  }
}

export default TimeSlipList;
