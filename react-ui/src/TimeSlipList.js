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

  async addTimeSlip(language, url, description){
    let newTimeSlip = await apiCalls.createTimeSlip(language, url, description);
    this.setState({timeSlips: [...this.state.timeSlips, newTimeSlip]});
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
    const studyStyle = {
      marginLeft: '12px',
      borderRadius: '10px',
      padding: '6px 10px',
      color: 'white',
      background: '#1CABA7',
      cursor: 'pointer',
    }
    const buildStyle = {};
    Object.keys(studyStyle).forEach(k => {
      buildStyle[k] = studyStyle[k];
    });
    buildStyle.background = '#EE715D';

    const timeSlip = this.state.timeSlips.reverse().map(slip => (
      <TimeSlipItem 
        key={slip._id}
        {...slip} 
      />
    ));
    return (
      <div>
        <div style={wrapper}>
          <h1 style={h1Style}>T
            <span style={{color: '#fff'}}>Study</span>
          </h1>
          <div>
            <span style={studyStyle}>study</span>
            <span style={buildStyle}>build</span>
          </div>
        </div>
        <TimeSlipForm addTimeSlip={this.addTimeSlip} />
        <ul>
          {timeSlip}
        </ul>
      </div>
    )
  }
}

export default TimeSlipList;
