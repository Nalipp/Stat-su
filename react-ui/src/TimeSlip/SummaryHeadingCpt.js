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
  margin: 3rem;
  font-size: 1.75rem;
  color: ${props => props.theme.light};
  letter-spacing: 0.375rem;
  animation: ${fadeIn} 0.3s linear;
  ${media.tablet`
    margin: 2rem;
    font-size: 2rem;
  `}
`;

const SummaryHeading = props =>
  <div>
    <CloseMenu onClick={props.toggleSummary}>
      <Icons icon='close' size='mlarge' />
    </CloseMenu>
    <Heading>
      Study Summary
    </Heading>
  </div>

SummaryHeading.propTypes = {
  toggleSummary: PropTypes.func,
}

export default SummaryHeading;
