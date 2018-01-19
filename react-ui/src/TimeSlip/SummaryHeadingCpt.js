import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icons from './../Icons';

const CloseMenu = styled.span`
  position: absolute;
  top: 0;
  right 0;
  padding: 1rem 1.25rem 2.25rem 2.25rem;
`;

const SummaryHeading = props => 
  <div>
    <CloseMenu onClick={props.toggleSummary}>
      <Icons color='dark' icon='close' size='mlarge' />
    </CloseMenu>
  </div>

SummaryHeading.propTypes = {
  toggleSummary: PropTypes.func,
}

export default SummaryHeading;
