import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TimerDisplay extends Component {
  render() {
    const h1Style = {
      marginTop: '40px',
      fontSize: '140px',
      textAlign: 'center',
    }




    console.log('change to pure function');





    return (
      <h1 style={h1Style}>{this.props.timeCounter}</h1>
    )
  }
}

TimerDisplay.propTypes = {
  timeCounter: PropTypes.number,
}

export default TimerDisplay;


