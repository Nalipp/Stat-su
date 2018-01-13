import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
  display: block;
  font-size: 16px;
  background: ${props => props.theme.blue};
  color: ${props => props.theme.darkBlue};
  margin: 34px 0px;
  border: none;
  padding: 4px 8px;
  width: 100%;
  border-left: 2px dashed;
  border-bottom:  2px solid; 

  &::placeholder {
    font-style: italic;
    color: ${props => props.theme.darkBlue};
  }

  &:focus {
    outline: 0;
  }
`;

const errorStyle = {
  borderColor: 'tomato',
}

const InputCpt = ({name, handleInputChange, placeholder, valid, value, onChange, onKeyPress }) =>
  <Input 
    autoComplete="off"
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    onKeyPress={onKeyPress}
    style={valid ? null : errorStyle}
  />

InputCpt.propTypes = {
  placeholder: PropTypes.string,
};

export default InputCpt;
