import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { media } from '../style-utils';

const fadeIn = keyframes`
  from {opacity: 0.1}
  to {opacity: 1}
`;

const Items = styled.ul`
  display: block;
  padding: 20px 0;
  margin: 20px 0;
  animation: ${fadeIn} .5s ease;
  margin: 0 auto 5.625rem auto;
`;

const ItemSummary = props =>
  <Items>
    {props.children}
  </Items>

export default ItemSummary;
