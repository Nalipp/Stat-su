import React, { Component } from 'react';
import Form from './FormCnt';
import ItemCnt from './ItemCnt';
import ListCpt from './ListCpt';
import SummaryCpt from './SummaryCpt';
import ItemSummary from './ItemSummary';

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
    const itemCnt = this.state.timeSlips.map(slip => (
      (slip.completed === false ?
        <ItemCnt 
          key={slip._id}
          {...slip} 
          onArchive={this.archiveTimeSlip.bind(this, slip)}
        />
        : null
      )
    ));

    const itemSummary = this.state.timeSlips.map(slip =>
      <ItemSummary 
        key={slip._id}
        {...slip} 
        onArchive={this.archiveTimeSlip.bind(this, slip)}
        onDelete={this.deleteTimeSlip.bind(this, slip)}
      />
    );

    return (
      <div>
      { this.state.showSummary ? 
        <div>
          <SummaryCpt toggleSummary={this.toggleSummary}/>
          <ul>{itemSummary}</ul>
        </div>
        : 
        <div>
          <ListCpt toggleSummary={this.toggleSummary} />
          <Form addTimeSlip={this.addTimeSlip} />
          <ul>{itemCnt}</ul>
        </div>
      }
      </div>
    )
  }
}

export default ListCnt;
        //
        // {...slip} 
        // onArchive={this.archiveTimeSlip.bind(this, slip)}
        // onDelete={this.deleteTimeSlip.bind(this, slip)}
