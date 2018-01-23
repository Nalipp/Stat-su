import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { media } from '../style-utils';
import formatTime from '../time-utils';

const fadeIn = keyframes`
  from {opacity: 0.1}
  to {opacity: 1}
`;

const Heading = styled.div`
  display: inline-block;
  margin: .50rem 0 .50rem 1.5rem;
  font-size: .8rem;
  letter-spacing: 0.15rem;
  animation: ${fadeIn} 0.5s linear;
`;

const FadedHeading = Heading.extend`
  color: ${props => props.theme.faded};
`;

const Items = styled.ul`
  display: block;
  margin: 3rem 0;
  animation: ${fadeIn} .5s ease;
`;

const Time = styled.span`
  font-size: .5rem;
  padding-left: 1.2rem;
`;

const FadedTime = Time.extend`
  color: ${props => props.theme.faded};
`;

const ItemSummary = (props) => {
  return (
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
