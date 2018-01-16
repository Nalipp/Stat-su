import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import Icons from './../Icons';
import TimerDisplay from './TimerDisplayCpt';

const startColor = props => props.theme.start;
const stopColor = props => props.theme.stop;

const fadeIn = keyframes`
  from {opacity: .99}
  to {opacity: 1}
`;

const startToStop = keyframes`
  from {background: tomato}
  to {background: #72DA66}
`;

const StartStyle = styled.div`
  background: ${startColor};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow-x: hidden;
  animation: ${startToStop} 0.3s linear;
`;

const StopStyle = styled.div`
  background: ${stopColor};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow-x: hidden;
  animation: ${startToStop} 1s linear;
`;

const H1 = styled.h1`
  text-align: center;
  font-size: 40px;
  margin: 50px 0 25px 0;
`;

const P = styled.p`
  text-align: center;
  font-size: 18px;
`
const CloseScreen = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0px 10px 20px 25px;
  color: white;
  cursor: pointer;
`;

const TimerButton = styled.h2`
  text-align: center;
  padding: 40px 0 100px 0;
  cursor: pointer;
`;

const TimerScreenCpt = ({timerRunning, handleKeyPress, language, totalTimeConverted, hideScreenAndPostTime, setStartOrStopTime, timeConverted}) =>
  (timerRunning ?
  <StartStyle>
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
  </StartStyle>
  :
  <StopStyle>
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
  </StopStyle>
  )

TimerScreenCpt.propTypes = {
  timmerRunning: PropTypes.bool,
  handleKeyPress: PropTypes.func,
  language: PropTypes.string,
  totalTimeConverted: PropTypes.string,
  hideScreenAndPostTime: PropTypes.func,
  setStartOrStopTime: PropTypes.func,
}

export default TimerScreenCpt;
