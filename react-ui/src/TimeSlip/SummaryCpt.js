import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icons from './../Icons';
import { media } from '../style-utils';

const CloseMenu = styled.span`
  position: absolute;
  top: 0;
  right 0;
  padding: 1rem 1.25rem 2.25rem 2.25rem;
`;

const Summary = styled.div`
  margin: 3rem;
  font-size: 3.75rem;
  color: ${props => props.theme.light};
  letter-spacing: 0.375rem;
  ${media.tablet`
    margin: 2rem;
    font-size: 5rem;
  `}
`;

const SummaryCnt = props =>
  <div>
    <CloseMenu onClick={props.toggleSummary}>
      <Icons icon='close' size='mlarge' />
    </CloseMenu>
    <Summary>
      Summary
    </Summary>
  </div>

export default SummaryCnt;
