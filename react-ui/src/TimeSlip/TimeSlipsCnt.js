import React, { Component } from 'react';
import ListCnt from './ListCnt';
import * as apiCalls from './../api';

class TimeSlipsCnt extends Component {
  constructor(props){
    super(props)
    this.state = {
      timeSlips: [],
      TotalActiveTime: 0,
      TotalArchivedTime: 0,
      showSummary: false,
    }
    this.loadTimeSlips();
    this.toggleSummary = this.toggleSummary.bind(this);
    this.addTimeSlip = this.addTimeSlip.bind(this);
    this.archiveTimeSlip = this.archiveTimeSlip.bind(this);
    this.calculateTotalTimes = this.calculateTotalTimes.bind(this);
    this.recalculateActiveTime = this.recalculateActiveTime.bind(this);
    this.recalculateArchivedTime = this.recalculateArchivedTime.bind(this);
  }

  async loadTimeSlips(){
    let timeSlips = await apiCalls.getTimeSlips();
    this.setState({timeSlips}, () => this.calculateTotalTimes());
  }

  async archiveTimeSlip(timeSlip) {

    if (timeSlip.completed) {
      this.recalculateActiveTime(timeSlip.total_time, '+')
      this.recalculateArchivedTime(timeSlip.total_time, '-')
    } else {
      this.recalculateArchivedTime(timeSlip.total_time, '+')
      this.recalculateActiveTime(timeSlip.total_time, '-')
    }
    let updatedTimeSlip = await apiCalls.archiveTimeSlip(timeSlip); 
    let timeSlips = this.state.timeSlips.map(timeSlip =>
      (timeSlip._id === updatedTimeSlip._id) 
        ? {...timeSlip, completed: !timeSlip.completed}
        : timeSlip
      );
    this.setState({timeSlips});
  }

  async deleteTimeSlip(id) {
    await apiCalls.deleteTimeSlip(id);
    let timeSlips = this.state.timeSlips.filter(slip => slip._id !== id);
    this.setState({timeSlips});
  }

  async addTimeSlip(language, url, description){
    let newTimeSlip = await apiCalls.createTimeSlip(language, url, description);
    this.setState({timeSlips: [newTimeSlip, ...this.state.timeSlips]});
  }

  toggleSummary() {
    this.setState({showSummary: !this.state.showSummary});
  }

  calculateTotalTimes() {
    let TotalActiveTime = 0;
    let TotalArchivedTime = 0;

    this.state.timeSlips.forEach(v => {
      if (!v.completed) TotalActiveTime += v.total_time;
      else TotalArchivedTime += v.total_time;
    });

    this.setState({TotalActiveTime, TotalArchivedTime});
  }

  recalculateActiveTime(timeAmount, operator) {
    if (operator === '+') {
      let TotalActiveTime = this.state.TotalActiveTime + timeAmount;
      this.setState({TotalActiveTime})
    } else {
      let TotalActiveTime = this.state.TotalActiveTime - timeAmount;
      this.setState({TotalActiveTime})
    }
  }

  recalculateArchivedTime(timeAmount, operator) {
    if (operator === '+') {
      let TotalArchivedTime = this.state.TotalArchivedTime + timeAmount;
      this.setState({TotalArchivedTime})
    } else {
      let TotalArchivedTime = this.state.TotalArchivedTime - timeAmount;
      this.setState({TotalArchivedTime})
    }
  }

  render() {
    return (
      <ListCnt 
        timeSlips={this.state.timeSlips} 
        showSummary={this.state.showSummary}
        archiveTimeSlip={this.archiveTimeSlip}
        deleteTimeSlip={this.deleteTimeSlip}
        toggleSummary={this.toggleSummary}
        addTimeSlip={this.addTimeSlip}
        totalActiveTime={this.state.TotalActiveTime}
        totalArchivedTime={this.state.TotalArchivedTime}
      />
    )
  }
}

export default TimeSlipsCnt;
