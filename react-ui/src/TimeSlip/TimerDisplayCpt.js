import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from '../style-utils';
import format from '../time-utils';

const Display = styled.h1`
  text-align: center;
  font-size: 4rem;
  margin-top: 1rem;
  overflow: hidden;
  ${media.tablet`
    font-size: 6.5rem;
    margin: 2.4rem 0 1.4rem 0
  `}
`;

const TimerDisplay = (props) =>
  <Display>{format.mmss(props.timeCounter)}</Display>

TimerDisplay.propTypes = {
  timeCounter: PropTypes.number,
}

export default TimerDisplay;
