import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {media} from '../style-utils';
import CharCounter from './CharCounter';

const darkColor = props => props.theme.dark;
const errorColor = props => props.theme.danger;
const borderColor = props => props.valid ? darkColor : errorColor;

const Input = styled.input`
  display: block;
  font-size: .9rem;
  letter-spacing: .1rem;
  border-radius: 0;
  background: ${props => props.theme.background};
  color: ${darkColor};
  padding: .25rem .5rem;
  width: 92%;
  border: none;
  border-top: none;
  border-right: none;
  border-left: .09rem dashed;
  border-bottom: .08rem solid; 
  border-color: ${borderColor};
  ${media.tablet`
    font-size: 1.2rem;
    letter-spacing: .14rem;
    padding: .35rem .6rem;
    width: 94%;
    border-left: .1rem dashed ${borderColor};
    border-bottom: .1rem solid ${borderColor}; 
  `}

  &::placeholder {
    font-style: italic;
    color: ${darkColor};
  }

  &:focus {
    outline: 0;
  }
`;

const InputCpt = props =>
  <div style={{display: 'flex', flexDirection: 'column' }}>
    <CharCounter 
      charCount={props.charCount} 
      valid={props.valid} 
      charMax={props.charMax} 
    />
    <Input 
      autoComplete="off"
      {...props}
      onChange={props.handleInputChange}
      onKeyPress={props.checkSubmit}
      />
  </div>

InputCpt.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  valid: PropTypes.bool,
  handleInputChange: PropTypes.func,
  checkSubmit: PropTypes.func,
  charCount: PropTypes.number,
  charMax: PropTypes.number,
};

export default InputCpt;
