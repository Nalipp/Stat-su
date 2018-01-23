import React, { Component } from 'react';
import ListCnt from './ListCnt';
import * as apiCalls from './../api';
import SummaryCnt from './SummaryCnt';

class TimeSlipsCnt extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeTimeSlips: [],
      archivedTimeSlips: [],
      totalActiveTime: 0,
      totalArchivedTime: 0,
      showSummary: false,
    }
    this.loadTimeSlips();
    this.toggleSummary = this.toggleSummary.bind(this);
    this.addTimeSlip = this.addTimeSlip.bind(this);
    this.archiveTimeSlip = this.archiveTimeSlip.bind(this);
    this.partitionActiveAndArchived = this.partitionActiveAndArchived.bind(this);
    this.recalculateTimeOnArchive = this.recalculateTimeOnArchive.bind(this);
    this.deleteTimeSlip = this.deleteTimeSlip.bind(this);
    this.recalculateTimeOnDelete = this.recalculateTimeOnDelete.bind(this);
  }

  async loadTimeSlips(){
    let timeSlips = await apiCalls.getTimeSlips();
    this.partitionActiveAndArchived(timeSlips);
  }

  async archiveTimeSlip(timeSlip) {
    this.recalculateTimeOnArchive(timeSlip.total_time, timeSlip.completed);

    let updatedTimeSlip = await apiCalls.archiveTimeSlip(timeSlip); 

    if (updatedTimeSlip.completed) {
      this.setState({ archivedTimeSlips: [...this.state.archivedTimeSlips, updatedTimeSlip] })
      let activeTimeSlips = this.state.activeTimeSlips.filter(slip => slip._id !== updatedTimeSlip._id);
      this.setState({activeTimeSlips})
    } else {
      this.setState({ activeTimeSlips: [...this.state.activeTimeSlips, updatedTimeSlip] })
      let archivedTimeSlips = this.state.archivedTimeSlips.filter(slip => slip._id !== updatedTimeSlip._id);
      this.setState({archivedTimeSlips})
    }
  }

  async deleteTimeSlip(timeSlip) {
    await apiCalls.deleteTimeSlip(timeSlip._id);
    let activeTimeSlips = this.state.activeTimeSlips.filter(slip => slip._id !== timeSlip._id);
    let archivedTimeSlips = this.state.archivedTimeSlips.filter(slip => slip._id !== timeSlip._id);
    this.recalculateTimeOnDelete(timeSlip.total_time)
    this.setState({activeTimeSlips, archivedTimeSlips});
  }

  async addTimeSlip(language, url, description){
    let newTimeSlip = await apiCalls.createTimeSlip(language, url, description);
    this.setState({activeTimeSlips: [newTimeSlip, ...this.state.activeTimeSlips]});
  }

  toggleSummary() {
    this.setState({showSummary: !this.state.showSummary});
  }

  partitionActiveAndArchived(timeSlips) {
    let activeTimeSlips = [];
    let archivedTimeSlips = [];
    let totalActiveTime = 0;
    let totalArchivedTime = 0;

    timeSlips.forEach(slip => {
      if (!slip.completed) {
        totalActiveTime += slip.total_time;
        activeTimeSlips.push(slip);
      } else {
        totalArchivedTime += slip.total_time;
        archivedTimeSlips.push(slip);
      }
    });

    this.setState({
      activeTimeSlips, 
      archivedTimeSlips, 
      totalActiveTime, 
      totalArchivedTime
    });
  }

  recalculateTimeOnArchive(timeAmount, changingToActive) {
    if (changingToActive) {
      let totalActiveTime = this.state.totalActiveTime + timeAmount;
      let totalArchivedTime = this.state.totalArchivedTime - timeAmount;
      this.setState({totalActiveTime, totalArchivedTime});
    } else {
      let totalActiveTime = this.state.totalActiveTime - timeAmount;
      let totalArchivedTime = this.state.totalArchivedTime + timeAmount;
      this.setState({totalActiveTime, totalArchivedTime});
    }
  }

  recalculateTimeOnDelete(timeAmount) {
    let totalArchivedTime = this.state.totalArchivedTime - timeAmount;
    this.setState({totalArchivedTime});
  }

  render() {
    return (
      <div>
        { this.state.showSummary ? 
          <SummaryCnt 
            activeTimeSlips={this.state.activeTimeSlips}
            archivedTimeSlips={this.state.archivedTimeSlips}
            totalActiveTime={this.state.totalActiveTime} 
            totalArchivedTime={this.state.totalArchivedTime} 
            toggleSummary={this.toggleSummary} 
            archiveTimeSlip={this.archiveTimeSlip}
            deleteTimeSlip={this.deleteTimeSlip}
            />
          : 
          <ListCnt 
            activeTimeSlips={this.state.activeTimeSlips} 
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
