import React from 'react';
import PropTypes from 'prop-types';

const TimerDisplay = (props) => {
  const h1Style = {
    marginTop: '40px',
    fontSize: '140px',
    textAlign: 'center',
  }
  return <h1 style={h1Style}>{props.timeConverted}</h1>
}

TimerDisplay.propTypes = {
  timeConverted: PropTypes.string,
}

export default TimerDisplay;
