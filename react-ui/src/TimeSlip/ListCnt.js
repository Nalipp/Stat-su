import React, { Component } from 'react';
import Form from './FormCnt';
import UnarchivedItemCnt from './ItemCnt';
import ListCpt from './ListCpt';
import ListHeading from './ListHeading';
import SummaryCnt from './SummaryCnt';
import * as apiCalls from './../api';

class ListCnt extends Component{
  constructor(props){
    super(props)
    this.state = {
      timeSlips: [],
      showSummary: false,
    }
    this.loadTimeSlips();
    this.addTimeSlip = this.addTimeSlip.bind(this);
    this.toggleSummary = this.toggleSummary.bind(this);
  }

  async loadTimeSlips(){
    let timeSlips = await apiCalls.getTimeSlips();
    this.setState({timeSlips});
  }

  async addTimeSlip(language, url, description){
    let newTimeSlip = await apiCalls.createTimeSlip(language, url, description);
    this.setState({timeSlips: [newTimeSlip, ...this.state.timeSlips]});
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

  toggleSummary() {
    this.setState({showSummary: !this.state.showSummary});
  }

  render () {
    const unarchivedItemList = this.state.timeSlips.map(slip => (
      (slip.completed === false &&
        <UnarchivedItemCnt 
          key={slip._id}
          {...slip} 
          onArchive={this.archiveTimeSlip.bind(this, slip)}
        />
      )
    ));

    return (
      <div>
      { this.state.showSummary ? 
        <SummaryCnt 
          archiveTimeSlip={this.archiveTimeSlip}
          deleteTimeSlip={this.deleteTimeSlip}
          timeSlips={this.state.timeSlips}
          toggleSummary={this.toggleSummary} />
        : 
        <ListCpt>
          <ListHeading toggleSummary={this.toggleSummary} />
          <Form addTimeSlip={this.addTimeSlip} />
          <ul>{unarchivedItemList}</ul>
        </ListCpt>
      }
      </div>
    )
  }
}

export default ListCnt;
