import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { media } from '../style-utils';

const fadeIn = keyframes`
  from {opacity: 0.1}
  to {opacity: 1}
`;

const Heading = styled.div`
  margin: .50rem 0 .50rem 1.5rem;
  font-size: .8rem;
  color: ${props => props.theme.dark};
  letter-spacing: 0.15rem;
  animation: ${fadeIn} 0.5s linear;
`;

const Items = styled.ul`
  display: block;
  margin: 3rem 0;
  animation: ${fadeIn} .5s ease;
`;

const ItemSummary = props =>
  <Items>
    <Heading>
      {props.archive === 'true' ? 'Active' : 'Archived'}
    </Heading>
    {props.children}
  </Items>

export default ItemSummary;
