import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { media } from '../style-utils';

const baseColor = props => props.theme.light;
const errorColor = props => props.theme.danger;
const counterColor = props => props.valid ? baseColor : errorColor;

const Counter = styled.span`
  display: inline-block;
  font-size: 10px;
  height: 10px;
  width: 60px;
  margin: 1.2rem 0 0 .8rem;
  color: ${counterColor};
  ${media.tablet`
    margin: 1.8rem 0 0 .8rem;
    color: ${counterColor};
  `}
`;

const CharCounter = (props) => 
  <Counter {...props}>
    {props.charCount > 0 ? `${props.charCount} / ${props.charMax}` : null}
  </Counter>

CharCounter.propTypes = {
    charCount: PropTypes.number,
    charMax: PropTypes.number,
    valid: PropTypes.bool,
}

export default CharCounter;
