import React, { Component } from 'react';
import ListCnt from './ListCnt';
import * as apiCalls from './../api';
import SummaryCnt from './SummaryCnt';

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
    this.recalculateTime = this.recalculateTime.bind(this);
  }

  async loadTimeSlips(){
    let timeSlips = await apiCalls.getTimeSlips();
    this.setState({timeSlips}, () => this.calculateTotalTimes());
  }

  async archiveTimeSlip(timeSlip) {
    this.recalculateTime(timeSlip.total_time, timeSlip.completed);

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

  recalculateTime(timeAmount, changingToActive) {
    if (changingToActive) {
      let TotalActiveTime = this.state.TotalActiveTime + timeAmount;
      let TotalArchivedTime = this.state.TotalArchivedTime - timeAmount;
      this.setState({TotalActiveTime});
      this.setState({TotalArchivedTime});
    } else {
      let TotalActiveTime = this.state.TotalActiveTime - timeAmount;
      let TotalArchivedTime = this.state.TotalArchivedTime + timeAmount;
      this.setState({TotalActiveTime});
      this.setState({TotalArchivedTime});
    }
  }

  render() {
    return (
      <div>
        { this.state.showSummary ? 
          <SummaryCnt 
            timeSlips={this.state.timeSlips}
            totalActiveTime={this.state.totalActiveTime} 
            totalArchivedTime={this.state.totalArchivedTime} 
            toggleSummary={this.toggleSummary} 
            archiveTimeSlip={this.archiveTimeSlip}
            deleteTimeSlip={this.deleteTimeSlip}
            />
          : 
          <ListCnt 
            timeSlips={this.state.timeSlips} 
            toggleSummary={this.toggleSummary}
            addTimeSlip={this.addTimeSlip}
            archiveTimeSlip={this.archiveTimeSlip}
            deleteTimeSlip={this.deleteTimeSlip}
          />
        }
      </div>
    )
  }
}

export default TimeSlipsCnt;
