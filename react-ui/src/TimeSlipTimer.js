import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timerRunning: false,
    }
    this.postStartTime = this.postStartTime.bind(this);
    this.postStopTime = this.postStopTime.bind(this);
  }

  postStartTime(id) {
    console.log('start time', Date.now());
    this.setState({timerRunning: true});
  }

  postStopTime(id) {
    console.log('stop time', Date.now());
    this.setState({timerRunning: false});
    // postToTimeTotal
  }

  render() {
    const { language, description } = this.props;

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
    }

    const timmerButtonStyle = {
      textAlign: 'center',
      marginTop: '80px',
      fontSize: '80px',
      cursor: 'pointer',
      userSelect: 'none',
    }

    return (
      <div style={this.state.timerRunning ? startedTimerStyle : stoppedTimerStyle }>
        <h1 style={h1Style}>{language}</h1>
        <p style={pStyle}>{description}</p>
        <span 
          style={spanStyle} 
          onClick={this.hideScreenAndPostStopTime}>x
        </span>
        <h2 
          style={timmerButtonStyle}
          onClick={this.postStartOrStopTime}>
          {(this.timerRunning ? 'stop' : 'start')}
        </h2>
      </div>
    )
  }

  hideScreenAndPostStopTime = () => {
    if (this.state.timerRunning) {
      this.postStopTime(this.props.id);
    }
    this.props.hideTimerScreen();
  }

  postStartOrStopTime = () => {
    if (this.state.timerRunning) this.postStopTime(this.props.id);
    else this.postStartTime(this.props.id);
  }
}

Timer.propTypes = {
  language: PropTypes.string,
  description: PropTypes.string,
  hideTimerScreen: PropTypes.func,
}

export default Timer;
