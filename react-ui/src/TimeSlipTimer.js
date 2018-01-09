import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TimerDisplay from './TimeSlipTimerDisplay';
import * as apiCalls from './api';

class TimeSlipTimer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timerRunning: false,
      timeCounter: 0,
      timeConverted: '00:00',
      TimerId: null,
    }
    this.postStartTime = this.postStartTime.bind(this);
    this.postStopTime = this.postStopTime.bind(this);
    this.hideScreenAndPostStopTime = this.hideScreenAndPostStopTime.bind(this);
    this.postStartOrStopTime = this.postStartOrStopTime.bind(this);
    this.startTick = this.startTick.bind(this);
    this.stopTick = this.stopTick.bind(this);
  }

  postSlipStartTime(id, startTime) {
    apiCalls.postSlipStartTime(id, startTime); 
  }

  postSlipStopTime(id, stopTime) {
    apiCalls.postSlipStopTime(id, stopTime); 
  }

  convertTime(seconds) {
    let date = new Date(null);
    date.setSeconds(seconds);
    let baseConverstion = date.toISOString()
    let timeConverted;

    if (baseConverstion[12] === '0') {
      timeConverted = baseConverstion.substr(14, 5);
    } else {
      timeConverted = baseConverstion.substr(11, 8);
    }

    this.setState({timeConverted});
  }

  startTick() {
    let timeCounter = this.state.timeCounter;
    let TimerId = setInterval(() => {
      timeCounter += 1;
      this.convertTime(timeCounter);
      this.setState({timeCounter});
    }, 1000)
    this.setState({TimerId});
  }

  stopTick() {
    clearInterval(this.state.TimerId);
  }

  postStartTime(id) {
    console.log('start time', Date.now());
    this.postSlipStartTime(id, Date.now());
    this.setState({timerRunning: true});
  }

  postStopTime(id) {
    console.log('stop time', Date.now());
    this.postSlipStopTime(id, Date.now());
    this.setState({timerRunning: false});
    // postToTimeTotal
  }

  hideScreenAndPostStopTime() {
    if (this.state.timerRunning) {
      this.postStopTime(this.props.id);
    }
    this.props.hideTimerScreen();
  }

  postStartOrStopTime() {
    if (this.state.timerRunning) {
      this.stopTick();
      this.setState({timeCounter: 0});
      this.setState({timeConverted: '00:00'});
      this.postStopTime(this.props.id);
    }
    else { 
      this.startTick();
      this.postStartTime(this.props.id); 
    }
  }

  render() {
    const { language, totalTime } = this.props;

    const stoppedTimerStyle = {
      background: '#EE715D',
      position: 'fixed',
      width: '100%',
      height: '100%',
      top: '0',
      bottom: '0',
      right: '0',
      left: '0',
      margin: 'auto',
    }

    const startedTimerStyle = {
      background: '#72DA66',
      position: 'fixed',
      width: '100%',
      height: '100%',
      top: '0',
      bottom: '0',
      right: '0',
      left: '0',
      margin: 'auto',
    }

    const h1Style = {
      textAlign: 'center',
      fontSize: '120px',
      marginTop: '100px',
    }

    const spanStyle = {
      position: 'absolute',
      top: '0',
      right: '0',
      padding: '5px 35px 35px 35px',
      fontSize: '80px',
      color: 'white',
      cursor: 'pointer',
    }

    const pStyle = {
      textAlign: 'center',
      fontSize: '22px',
    }

    const timmerButtonStyle = {
      textAlign: 'center',
      marginTop: '30px',
      fontSize: '80px',
      cursor: 'pointer',
      userSelect: 'none',
    }

    return (
      <div style={this.state.timerRunning ? startedTimerStyle : stoppedTimerStyle }>
        <h1 style={h1Style}>{language}</h1>
        <p style={pStyle}>Total Time {totalTime}</p>
        <span 
          style={spanStyle} 
          onClick={this.hideScreenAndPostStopTime}>x
        </span>
        <TimerDisplay timeConverted={this.state.timeConverted} />
        <h2 
          style={timmerButtonStyle}
          onClick={this.postStartOrStopTime}>
          {(this.state.timerRunning ? 'stop' : 'start')}
        </h2>
      </div>
    )
  }
}

TimeSlipTimer.propTypes = {
  language: PropTypes.string,
  totalTime: PropTypes.string,
  id: PropTypes.string, 
  hideTimerScreen: PropTypes.func,
}

export default TimeSlipTimer;
