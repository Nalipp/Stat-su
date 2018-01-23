import React, { Component } from 'react';
import ListCnt from './ListCnt';
import * as apiCalls from './../api';
import SummaryCnt from './SummaryCnt';

class TimeSlipsCnt extends Component {
  constructor(props){
    super(props)
    this.state = {
      timeSlips: [],
      showSummary: false,
    }
    this.loadTimeSlips();
    this.toggleSummary = this.toggleSummary.bind(this);
    this.addTimeSlip = this.addTimeSlip.bind(this);
    this.archiveTimeSlip = this.archiveTimeSlip.bind(this);
  }

  async loadTimeSlips(){
    let timeSlips = await apiCalls.getTimeSlips();
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

  render() {
    return (
      <div>
        { this.state.showSummary ? 
          <SummaryCnt 
            timeSlips={this.state.timeSlips}
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
