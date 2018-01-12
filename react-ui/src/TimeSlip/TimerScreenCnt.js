import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TimerDisplay from './TimerDisplayCpt';
import Icons from './../Icons';
import './TimeSlipTimer.css';

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timerRunning: false,
      timeCounter: 0,
      timeConverted: '00:00',
      TimerId: null,
      startTime: null,
    }
    
    this.hideScreenAndPostTime = this.hideScreenAndPostTime.bind(this);
    this.setStartOrStopTime = this.setStartOrStopTime.bind(this);
    this.startTick = this.startTick.bind(this);
    this.stopTick = this.stopTick.bind(this);
    this.calculateAndPost = this.calculateAndPost.bind(this);
    this.saveAndReset = this.saveAndReset.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    if(e.keyCode === 27) this.hideScreenAndPostTime()
    if(e.keyCode === 32 || e.keyCode === 13) this.setStartOrStopTime()
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyPress, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeyPress, false);
  }
 
  hideScreenAndPostTime() {
    if (this.state.timerRunning) this.saveAndReset()
    this.props.hideTimerScreen();
  }

  saveAndReset() {
    this.calculateAndPost()
    this.stopTick();
    this.setState({timerRunning: false});
  }

  calculateAndPost() {
    let timeTotal = Date.now() - this.state.startTime;
    this.props.postTime(this.props.id, timeTotal);
  }

  setStartOrStopTime() {
    if (this.state.timerRunning) this.saveAndReset()
    else { 
      this.setState({startTime: Date.now()});
      this.setState({timerRunning: true});
      this.startTick();
    }
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

  render() {
    const { language, totalTimeConverted } = this.props

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

    const pStyle = {
      textAlign: 'center',
      fontSize: '22px',
    }

    const timmerButtonStyle = {
      textAlign: 'center',
      marginTop: '50px',
      fontSize: '50px',
      cursor: 'pointer',
      userSelect: 'none',
    }

    return (
      <div style={this.state.timerRunning ? startedTimerStyle : stoppedTimerStyle } onKeyPress={this.handleKeyPress}>
        <h1>{language}</h1>
        <p style={pStyle}>Total Time {totalTimeConverted}</p>
        <span 
          className="closeStyle" 
          onClick={this.hideScreenAndPostTime}>x
        </span>
        <TimerDisplay timeConverted={this.state.timeConverted} />
        <h2 
          style={timmerButtonStyle}
          onClick={this.setStartOrStopTime}>
          {( 
            this.state.timerRunning ?
            <Icons icon='pause' size="jumbo" /> 
          : 
            <Icons icon='play' size="jumbo" />
          )}
        </h2>
      </div>
    )
  }
}

Timer.propTypes = {
  language: PropTypes.string,
  totalTimeConverted: PropTypes.string,
  id: PropTypes.string, 
  hideTimerScreen: PropTypes.func,
  postTime: PropTypes.func,
}

export default Timer;
