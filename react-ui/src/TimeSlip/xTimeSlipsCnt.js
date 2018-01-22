import React, { Component } from 'react';
import Form from './FormCnt';
import TimeSlipCnt from './TimeSlipCnt';
import ListCnt from './ListCnt';
import ListCpt from './ListCpt';
import SummaryCnt from './SummaryCnt';
import HeadingCpt from './HeadingCpt';
import HamburgerMenuCnt from './HamburgerMenuCnt';
import * as apiCalls from './../api';


class TimeSlipsCnt extends Component{
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
    this.addTimeSlip = this.addTimeSlip.bind(this);
    this.toggleSummary = this.toggleSummary.bind(this);
    this.loadTimeSlips = this.loadTimeSlips.bind(this);
    this.calculateTimeTotals = this.calculateTimeTotals.bind(this);
    this.increaseTotalActiveTime = this.increaseTotalActiveTime.bind(this);
  }


  calculateTimeTotals() {
    let totalActiveTime = this.state.activeTimeSlips.reduce((slip, v) => {
      return slip + v.total_time;
    }, 0);

    let totalArchivedTime = this.state.archivedTimeSlips.reduce((slip, v) => {
      return slip + v.total_time;
    }, 0);

    this.setState({totalActiveTime});
    this.setState({totalArchivedTime});
  }

  increaseTotalActiveTime(amount) {
    let totalActiveTime = this.state.totalActiveTime + amount;
    this.setState({totalActiveTime});
  }

  async loadTimeSlips(){
    let timeSlips = await apiCalls.getTimeSlips();

    let activeTimeSlips = [];
    let archivedTimeSlips = [];

    timeSlips.forEach(slip => {
      if (!slip.completed) activeTimeSlips.push(slip);
      else archivedTimeSlips.push(slip);
    })

    this.setState({activeTimeSlips, archivedTimeSlips}, 
      () => this.calculateTimeTotals());
  }

  async addTimeSlip(language, url, description){
    let newTimeSlip = await apiCalls.createTimeSlip(language, url, description);
    this.setState(
      {activeTimeSlips: [newTimeSlip, ...this.state.activetimeSlips]}
    );
  }

  async archiveTimeSlip(timeSlip) {
    let updatedTimeSlip = await apiCalls.archiveTimeSlip(timeSlip); 

    let activeTimeSlips = this.state.activeTimeSlips.map(timeSlip =>
      (timeSlip._id === updatedTimeSlip._id) 
        ? {...timeSlip, completed: !timeSlip.completed}
        : timeSlip
      );
    let archivedTimeSlips = this.state.archivedTimeSlips.map(timeSlip =>
      (timeSlip._id === updatedTimeSlip._id) 
        ? {...timeSlip, completed: !timeSlip.completed}
        : timeSlip
      );
    this.setState({activeTimeSlips, archivedTimeSlips});
  }

  async deleteTimeSlip(id) {
    await apiCalls.deleteTimeSlip(id);

    let activeTimeSlips = this.state.activeTimeSlips.filter(slip => {
      return slip._id !== id
    });
    let archivedTimeSlips = this.state.archivedTimeSlips.filter(slip => {
      return slip._id !== id
    });
    this.setState({activeTimeSlips, archivedTimeSlips});
  }

  toggleSummary() {
    this.setState({showSummary: !this.state.showSummary});
  }

  render () {
    const activeList = this.state.activeTimeSlips.map(slip => (
      <TimeSlipCnt 
        key={slip._id}
        {...slip} 
        onArchive={this.archiveTimeSlip.bind(this, slip)}
      />
    ));

    return (
      <div>
      { this.state.showSummary ? 
        <SummaryCnt 
          toggleSummary={this.toggleSummary}
          archiveTimeSlip={this.archiveTimeSlip}
          deleteTimeSlip={this.deleteTimeSlip}
          totalActiveTime={this.state.totalActiveTime}
          totalArchivedTime={this.state.totalArchivedTime}
          activeTimeSlips={this.state.activeTimeSlips}
          archivedTimeSlips={this.state.archivedTimeSlips} />
        : 
        <div>
          <HeadingCpt />
          <HamburgerMenuCnt />
          <ListCnt 
            toggleSummary={this.toggleSummary}
            increaseTotalActiveTime={this.increaseTotalActiveTime}
            archiveTimeSlip={this.archiveTimeSlip}
            activeTimeSlips={this.state.activeTimeSlips}
          />
        </div>
      }
      </div>
    )
  }
}

export default TimeSlipsCnt;
