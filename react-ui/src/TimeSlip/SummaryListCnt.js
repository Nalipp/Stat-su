import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { media } from '../style-utils';
import formatTime from '../time-utils';

const fadeIn = keyframes`
  from {opacity: 0.1}
  to {opacity: 1}
`;

const Wrapper = styled.section`
  margin: 2rem auto;
  width: 90%;

  ${media.tablet`
    margin: 3rem auto;
    width: 70%;
  `};
  ${media.desktop`
    margin: 4rem auto;
    width: 43%;
  `};
  ${media.jumboDesktop`
    margin: 5rem auto;
    width: 40%;
  `};
`;

const Heading = styled.div`
  display: inline-block;
  margin: .50rem 0;
  font-size: .8rem;
  letter-spacing: 0.2rem;
  animation: ${fadeIn} 0.5s linear;

  ${media.tablet`
    font-size: 1.2rem;
    letter-spacing: 0.3rem;
  `};
  ${media.desktop`
    font-size: 1.6rem;
    letter-spacing: 0.4rem;
  `};
  ${media.jumboDesktop`
    font-size: 2.5rem;
    letter-spacing: 0.5rem;
  `};
`;

const FadedHeading = Heading.extend`
  color: ${props => props.theme.faded};
`;

const Items = styled.ul`
  display: block;
  animation: ${fadeIn} .5s ease;
`;

const Time = styled.span`
  font-size: .5rem;
  padding-left: 1.2rem;

  ${media.tablet`
    font-size: .7rem;
  `};
  ${media.desktop`
    font-size: 1rem;
  `};
  ${media.jumboDesktop`
    font-size: 1.2rem;
  `};
`;

const FadedTime = Time.extend`
  color: ${props => props.theme.faded};
`;

const ItemSummary = (props) => {
  return (
    <Wrapper>
      <Items>
        { props.active === 'true' 
          ? 
          <Heading>Active</Heading>
          : 
          <FadedHeading>Archived</FadedHeading> 
        }
        { props.active === 'true' 
          ? 
          <Time>hours : {formatTime.hhmmss(props.totalTime)}</Time>
          : 
          <FadedTime>hours : {formatTime.hhmmss(props.totalTime)}</FadedTime>
        }
        {props.children}
      </Items>
    </Wrapper>
  )
}

ItemSummary.propTypes = {
  totalTime: PropTypes.number,
  active: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default ItemSummary;
