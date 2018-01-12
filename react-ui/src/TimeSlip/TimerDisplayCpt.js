import React from 'react';
import PropTypes from 'prop-types';

const TimerDisplay = (props) => {
  return <h1>{props.timeConverted}</h1>
}

TimerDisplay.propTypes = {
  timeConverted: PropTypes.string,
}

export default TimerDisplay;
