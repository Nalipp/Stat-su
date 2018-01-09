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






// update totalTime from parent component so that it actually gets a milisecond value from the database

// display the value instead of the hardcoded 'h m s' value there now


// postTime in TimeSlipTimer should post the total time plus the current time total


//push


// later refactor the timeConverter function to be accessable to both components
