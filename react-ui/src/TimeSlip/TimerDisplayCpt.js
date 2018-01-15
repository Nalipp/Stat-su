import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Display = styled.h1`
  text-align: center;
  font-size: 100px;
  margin-top: 50px;
`;

const TimerDisplay = (props) =>
  <Display>{props.timeConverted}</Display>

TimerDisplay.propTypes = {
  timeConverted: PropTypes.string,
}

export default TimerDisplay;
