import React from 'react';
import styled from 'styled-components';
import Icons from './../Icons';
import PropTypes from 'prop-types';
import TimerScreen from './TimerScreenCnt';

const Li = styled.li`
  list-style: none;
  margin: 10px 0;
  padding: 8px;
  border: 1px dashed white;
`;

const H2 = styled.h2`
  padding-right: 10px;
  flex: 9;
`
const Div = styled.div`
  display: flex;
  align-items: center;
`
const P = styled.p`
  color: white;
  font-size: 11px;
  flex: 1.5;
`;

const StartBtn = styled.p`
  font-size: 12px;
  border-radius: 8px;
  padding: 4px 6px;
  margin-right: 14px;
  background: #72DA66;
  color: white;
  cursor: pointer;
  flex: 0.5;
`;

const Description = styled.p`
  fontSize: 14px;
  padding: 4px;
  line-height: 20px;
  letter-spacing: 2px;
`;

const BottomNav = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
`;

const Archive = P.extend`
  cursor: pointer;
  padding-left: 12px;
`;

const Wrapper = Div.extend`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  fontSize: 10px;
`;

const TimeStamp = styled.span`
  color: white;
  font-size: 8px;
`;

const A = styled.a`
  color: white;
  padding: 6px;
`;

const LiCpt = ({id, language, description, url, onArchive, created_date, last_update, totalTimeConverted, hideTimerScreen, showTimerScreen, timerScreenShowing, postTime}) =>
  <Li>
    <Div>
      <H2>{language ? language : '-'}</H2>
      <StartBtn onClick={showTimerScreen}>start</StartBtn>
      <P>{totalTimeConverted}</P>
    </Div>
    <Description>{description}</Description>
    <BottomNav>
      <P>
        {url ? (
          <A
            href={url} 
            rel="noopener noreferrer"
            target="_blank">
            <Icons icon='link' size='normal' />
          </A>
          ) : null
        }
      </P>

      <Archive onClick={onArchive}>
        <Icons icon='archive' size='small' />
      </Archive>
      <Wrapper>
        <TimeStamp>Created: {created_date.slice(0, 10)}</TimeStamp>
        <TimeStamp>Updated: {last_update.slice(0, 10)}</TimeStamp>
      </Wrapper>
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
  showTimerScreenShowing: PropTypes.bool,
  postTime: PropTypes.func,
}

export default LiCpt;

