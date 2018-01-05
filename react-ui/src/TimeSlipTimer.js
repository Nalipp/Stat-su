import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Timer extends Component {
  render() {

    const { language, description, toggleTimer} = this.props;

    const timerStyle = {
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

    return (
      <div style={timerStyle}>
        <h1 style={h1Style}>{language}</h1>
        <p style={pStyle}>{description}</p>
        <span style={spanStyle} onClick={toggleTimer}>x</span>
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
