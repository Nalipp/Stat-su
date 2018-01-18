import React from 'react';
import styled, {keyframes} from 'styled-components';
import Icons from './../Icons';
import PropTypes from 'prop-types';
import TimerScreen from './TimerScreenCnt';
import { media } from '../style-utils';

const fadeIn = keyframes`
  from {opacity: 0.1}
  to {opacity: 1}
`;

const Li = styled.li`
  list-style: none;
  margin: .625rem 0;
  padding: .5rem;
  border: .0625rem dashed ${props => props.theme.light};
  animation: ${fadeIn} 0.8s linear;
  ${media.tablet`
    padding: 1rem;
    margin: 1.5rem 0;
    border: .09rem dashed ${props => props.theme.light};
  `}
`;

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const H2 = styled.h2`
  font-size: 1rem;
  padding-right: .625rem;
  flex: 9;
  ${media.tablet`
    font-size: 1.5rem;
  `}
`;

const Description = styled.p`
  font-size: .65rem;
  padding: .25rem;
  line-height: 1rem;
  letter-spacing: .125rem;
  ${ media.tablet`
    width: 75%;
    font-size: 1rem;
    padding: .5rem;
    line-height: 1.6rem;
  `}
`;

const StartBtn = styled.p`
  font-size: .6rem;
  letter-spacing: .12rem;
  color: ${props => props.theme.light};
  border-radius: .5rem;
  padding: 0.3rem .4rem;
  margin-right: .5rem;
  line-height: .75rem;
  background: ${props => props.theme.start};
  cursor: pointer;
  flex: 0.5;

  &:hover {
    transform: translateY(.0625rem);
    box-shadow: 0 .125rem .19rem rgba(0, 0, 0, .15);
  }
  ${ media.tablet`
    font-size: 1rem;
    border-radius: .5rem;
    line-height: 1.4rem;
  `}
`;

const TotalTime = styled.p`
  font-size: .7rem;
  color: ${props => props.theme.light};
  letter-spacing: .1rem;
  flex: 1.5;
  text-align: right;
  ${`
    font-size: 1rem;
  `}
`;

const BottomNav = styled.div`
  display: flex;
  align-items: center;
  margin-top: .25rem;
`;

const Url = styled.span`
  cursor: pointer;
  flex-grow: 1;
`;

const Archive = styled.span`
  cursor: pointer;
  flex-grow: 1;
  ${media.tablet`
    margin: .25rem 0 .25rem 1.2rem;
  `}
`;

const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 3;
`;

const TimeStamp = styled.span`
  align-self: flex-end;
  font-size: .6rem;
  letter-spacing: .1rem;
  color: ${props => props.theme.light};
  ${media.tablet`
    margin: .25rem;
    font-size: .8rem;
    letter-spacing: .14rem;
  `}
`;

const Time = styled.span`
  font-size: .5rem
  letter-spacing: .05rem;
  color: ${props => props.theme.dark};
  padding-left: .375rem;
  ${media.tablet`
    margin: .25rem;
    font-size: .8rem;
    letter-spacing: .14rem;
  `}
`;

const A = styled.a`
  padding: .375rem;
`;

const LiCpt = ({id, language, description, url, onArchive, created_date, last_update, totalTimeConverted, hideTimerScreen, showTimerScreen, timerScreenShowing, postTime}) =>
  <Li>
    <Div>
      <H2>{language ? language : '-'}</H2>
      <StartBtn onClick={showTimerScreen}>Start</StartBtn>
      <TotalTime>{totalTimeConverted}</TotalTime>
    </Div>
    <Description>{description}</Description>
    <BottomNav>
      <Archive onClick={onArchive}>
        <Icons icon='archive' size='normal' />
      </Archive>
      <Url>
        {url ? (
          <A
            href={url} 
            rel="noopener noreferrer"
            target="_blank">
            <Icons icon='link' size='large' />
          </A>
          ) : null
        }
      </Url>
      <TimeWrapper>
        <TimeStamp>Created: 
          <Time>{created_date.slice(0, 10)}</Time>
        </TimeStamp>
        <TimeStamp>Updated: 
          <Time>{last_update.slice(0, 10)}</Time>
        </TimeStamp>
      </TimeWrapper>
    </BottomNav>
    {timerScreenShowing ? 
      <TimerScreen
        key={id}
        id={id}
        language={language} 
        totalTimeConverted={totalTimeConverted}
        hideTimerScreen={hideTimerScreen}
        showTimerScreen={showTimerScreen}
        postTime={postTime}
      />
      : null
    }
  </Li>

LiCpt.propTypes = {
  id: PropTypes.string,
  language: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  created_date: PropTypes.string,
  last_update: PropTypes.string,
  totalTimeConverted: PropTypes.string,
  hideTimerScreen: PropTypes.func,
  showTimerScreen: PropTypes.func,
  timerScreenShowing: PropTypes.bool,
  postTime: PropTypes.func,
  onArchive: PropTypes.func,
}

export default LiCpt;

