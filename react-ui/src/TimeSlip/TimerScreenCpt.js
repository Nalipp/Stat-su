import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import Icons from './../Icons';
import TimerDisplay from './TimerDisplayCpt';
import { media } from '../style-utils';
import format from '../time-utils';

/* eslint-disable no-unused-expressions */


const timerColor = props => 
  props.timerRunning 
  ? props.theme.stop 
  : props.theme.start;

const timeAnimation = props => 
  !props.timerRunning 
  && props.timeCounter > 0 
  && Blink;

const fade = props =>
  !props.timerRunning && props.timeCounter > 0 
  ? FadeStartToStop 
  : !props.timerRunning ? FadeIn : FadeStopToStart; 

const Blink = keyframes`
  0% {opacity: 1}
  20% {opacity: .1}
  40% {opacity: 1}
  70% {opacity: 1}
  80% {opacity: .1}
  100% {opacity: 1}
`;

const FadeIn = keyframes`
  from {opacity: .1}
  to {opacity: 1}
`;

const FadeStopToStart = (props) => keyframes`
  from {background: ${props.theme.start}}
  to {background: ${props.theme.stop}}
`;

const FadeStartToStop = (props) => keyframes`
  from {background: ${props.theme.stop}}
  to {background: ${props.theme.start}}
`;

const TimerScreen = styled.div`
  padding: 0 5%;
  position: fixed;
  width: 90%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow-x: hidden;
  background: ${timerColor};
  animation: ${fade} 0.3s linear;
  ${media.tablet`
    padding: 0 10%;
    width: 80%;
  `}
`;

const Language = styled.h1`
  text-align: center;
  font-size: 1.8rem;
  margin: 2.2rem 0 1.4rem 0;
  ${media.tablet`
    font-size: 2.4rem;
    margin: 6rem 0 2rem 0;
  `}
`;

const TotalTime = styled.p`
  text-align: center;
  font-size: 1.1rem;
    > span {
      animation: ${timeAnimation} .5s linear;
    }
  ${media.tablet`
    font-size: 1.4rem;
  `}
`

const CloseScreen = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 1rem 2rem 1.6rem;
  color: ${props => props.theme.light};
  cursor: pointer;
  ${media.tablet`
    padding: 1.4rem 1.6rem 2rem 2rem;
  `}
`;

const TimerButton = styled.h2`
  text-align: center;
  padding: 2.5rem 0;
  cursor: pointer;
`;

const TimerScreenCpt = props => {
  return (
    <TimerScreen {...props}>
      <Language>{props.language}</Language>
        <TotalTime {...props}>
          Total Time : <span>{format.mmss(props.totalTime)}</span>
        </TotalTime>
      <CloseScreen onClick={props.hideScreenAndPostTime}>
        <Icons size="xxlarge" icon="close" />
      </CloseScreen>
      <TimerDisplay timeCounter={props.timeCounter} />
      <TimerButton onClick={props.setStartOrStopTime}>
        { props.timerRunning 
          ? <Icons icon='pause' size='xjumbo' />
          : <Icons icon='play' size='xjumbo' />
        }
      </TimerButton>
    </TimerScreen>
  )
}
  

TimerScreenCpt.propTypes = {
  language: PropTypes.string,
  hideScreenAndPostTime: PropTypes.func,
  setStartOrStopTime: PropTypes.func,
  timerRunning: PropTypes.bool,
  totalTime: PropTypes.number,
  timeCounter: PropTypes.number,
}

export default TimerScreenCpt;
