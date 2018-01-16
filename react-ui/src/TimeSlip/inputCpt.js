import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const baseColor = props => props.theme.dark;
const errorColor = props => props.theme.danger;

const Input = styled.input`
  display: block;
  font-size: .9rem;
  border-radius: 0;
  background: ${props => props.theme.background};
  color: ${props => props.theme.dark};
  margin: 2.2rem 0;
  border: none;
  padding: .25rem .5rem;
  width: 92%;
  border-left: .09rem dashed;
  border-bottom:  .08rem solid; 
  border-color: ${props => props.valid ? baseColor : errorColor};

  &::placeholder {
    font-style: italic;
    color: ${props => props.theme.dark};
  }

  &:focus {
    outline: 0;
  }
`;

const InputCpt = (props) =>
  <Input 
    autoComplete="off"
    {...props}/>

InputCpt.propTypes = {
  valid: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  handleInputChange: PropTypes.func,
  checkSubmit: PropTypes.func,
};

export default InputCpt;
