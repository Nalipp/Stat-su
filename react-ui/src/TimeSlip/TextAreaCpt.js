import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const baseColor = props => props.theme.dark;
const errorColor = props => props.theme.danger;

const TextArea = styled.textarea`
  display: block;
  font-size: 16px;
  border-radius: 0;
  background: ${props => props.theme.background};
  color: ${props => props.theme.dark};
  margin: 34px 0px;
  border: none;
  padding: 4px 8px;
  width: 92%;
  border-left: 2px dashed;
  border-bottom:  2px solid; 
  border-color: ${props => props.valid ? baseColor : errorColor};

  &::placeholder {
    font-style: italic;
    color: ${props => props.theme.dark};
  }

  &:focus {
    outline: 0;
  }
`;

const TextareaCpt = (props) => 
  <TextArea
    autoComplete="off"
    {...props}></TextArea>

TextareaCpt.propTypes = {
  valid: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
};

export default TextareaCpt;
