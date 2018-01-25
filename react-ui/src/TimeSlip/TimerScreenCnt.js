import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TimerScreenCpt from './TimerScreenCpt';

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timerRunning: false,
      timeCounter: 0,
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
    let totalTime = Date.now() - this.state.startTime;
    this.props.postTime(this.props.id, totalTime);
  }

  setStartOrStopTime() {
    if (this.state.timerRunning) this.saveAndReset()
    else { 
      this.setState({startTime: Date.now()});
      this.setState({timerRunning: true});
      this.startTick();
    }
  }

  startTick() {
    let timeCounter = this.state.timeCounter;
    let TimerId = setInterval(() => {
      timeCounter += 1000;
      this.setState({timeCounter});
    }, 1000)
    this.setState({TimerId});
  }

  stopTick() {
    clearInterval(this.state.TimerId);
  }

  render() {
    return (
      <TimerScreenCpt 
        {...this.props}
        timerRunning={this.state.timerRunning}
        handleKeyPress={this.handleKeyPress}
        timeCounter={this.state.timeCounter}
        hideScreenAndPostTime={this.hideScreenAndPostTime}
        setStartOrStopTime={this.setStartOrStopTime}
      />
    )
  }
}

Timer.propTypes = {
  language: PropTypes.string,
  id: PropTypes.string, 
  hideTimerScreen: PropTypes.func,
  postTime: PropTypes.func,
  totalTime: PropTypes.number,
}

export default Timer;
