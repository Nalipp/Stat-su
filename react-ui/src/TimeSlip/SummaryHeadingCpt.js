import React from 'react';
import styled, {keyframes} from 'styled-components';
import PropTypes from 'prop-types';
import {media} from '../style-utils';
import Icons from './../Icons';

const fadeIn = keyframes`
  from {opacity: 0.1}
  to {opacity: 1}
`;

const CloseMenu = styled.span`
  position: absolute;
  top: 0;
  right 0;
  padding: 1rem 1.25rem 2.25rem 2.25rem;
`;

const Heading = styled.div`
  margin: 0 3rem 3rem 3rem;
  font-size: 1.75rem;
  color: ${props => props.theme.dark};
  letter-spacing: 0.375rem;
  animation: ${fadeIn} 0.5s linear;
  ${media.tablet`
    margin: 0 3rem 3rem 3rem;
  `}
`;

const SummaryHeading = props =>
  <div>
    <CloseMenu onClick={props.toggleSummary}>
      <Icons color='dark' icon='close' size='mlarge' />
    </CloseMenu>
    <Heading>
      Study Summary
    </Heading>
  </div>

SummaryHeading.propTypes = {
  toggleSummary: PropTypes.func,
}

export default SummaryHeading;
