import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import Icons from './../Icons';
import TimerDisplay from './TimerDisplayCpt';

const startColor = props => props.theme.start;
const stopColor = props => props.theme.stop;

const Blink = keyframes`
  0% {opacity: 1}
  33% {opacity: .1}
  100% {opacity: 1}
`;

const FadeInSlight = keyframes`
  from {opacity: .99}
  to {opacity: 1}
`;

const StartToStop = keyframes`
  from {background: tomato}
  to {background: #72DA66}
`;

const ScreenStyle = styled.div`
  padding: 0 5%;
  position: fixed;
  width: 90%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow-x: hidden;
`;

const StartStyle = ScreenStyle.extend`
  background: ${startColor};
  animation: ${StartToStop} 0.3s linear;
`;

const StopStyle = ScreenStyle.extend`
  background: ${stopColor};
  animation: ${FadeInSlight} .6s linear;
`;

const H1 = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin: 3rem 0 1.6rem 0;
`;

const TotalTime = styled.p`
  text-align: center;
  font-size: 1.1rem;

  > span {
    animation: ${Blink} 1s linear;}
  }
`
const CloseScreen = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 .6rem 1.2rem 1.6rem;
  color: ${props => props.theme.light};
  cursor: pointer;
`;

const TimerButton = styled.h2`
  text-align: center;
  padding: 2.5rem 0 6.25rem 0;
  cursor: pointer;
`;

const TimerScreenCpt = ({timerRunning, handleKeyPress, language, totalTimeConverted, hideScreenAndPostTime, setStartOrStopTime, timeConverted}) =>
  (timerRunning ?
  <StartStyle>
    <H1>{language}</H1>
    <TotalTime>Total Time : {totalTimeConverted}</TotalTime>
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
    <TotalTime>Total Time : <span>{totalTimeConverted}</span></TotalTime>
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
