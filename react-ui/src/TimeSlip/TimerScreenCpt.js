import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icons from './../Icons';
import TimerDisplay from './TimerDisplayCpt';

const TimerStyle = styled.div`
  background: ${props => props.theme.start};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
`;

const H1 = styled.h1`
  text-align: center;
  font-size: 90px;
  margin-top: 70px;
`;

const P = styled.p`
  text-align: center;
  font-size: 22px;
`
const CloseScreen = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0px 35px 40px 35px;
  font-size: 80px;
  color: white;
  cursor: pointer;
`;

const TimerButton = styled.h2`
  text-align: center;
  margin-top: 50px;
  cursor: pointer;
`;

const TimerScreenCpt = ({timerRunning, handleKeyPress, language, totalTimeConverted, hideScreenAndPostTime, setStartOrStopTime, timeConverted}) =>
  <TimerStyle style={{backgroundColor: timerRunning && 'tomato'}}>
    <H1>{language}</H1>
    <P>Total Time {totalTimeConverted}</P>
    <CloseScreen onClick={hideScreenAndPostTime}>
    <Icons size="xlarge" icon="close" />
    </CloseScreen>
    <TimerDisplay timeConverted={timeConverted} />
    <TimerButton onClick={setStartOrStopTime}>
      {timerRunning ? 
        <Icons icon='pause' size='jumbo' />
      : 
        <Icons icon='play' size='jumbo' />
      }
    </TimerButton>
  </TimerStyle>

TimerScreenCpt.propTypes = {
  timmerRunning: PropTypes.bool,
  handleKeyPress: PropTypes.func,
  language: PropTypes.string,
  totalTimeConverted: PropTypes.string,
  hideScreenAndPostTime: PropTypes.func,
  setStartOrStopTime: PropTypes.func,
  timmerRunning: PropTypes.bool,
}

export default TimerScreenCpt;
