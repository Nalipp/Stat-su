import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Timer extends Component {
  render() {

    const { language, description, toggleTimer, toggleTimeStopped, timeStopped} = this.props;

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
      <div style={timeStopped ? stoppedTimerStyle : startedTimerStyle}>
        <h1 style={h1Style}>{language}</h1>
        <p style={pStyle}>{description}</p>
        <span style={spanStyle} onClick={toggleTimer}>x</span>
        <h2 
          style={timmerButtonStyle}
          onClick={toggleTimeStopped}>
          {(timeStopped ? 'start' : 'stop')}
        </h2>
      </div>
    )
  }
}

Timer.propTypes = {
  language: PropTypes.string,
  description: PropTypes.string,
  toggleTimer: PropTypes.func
}

export default Timer;
