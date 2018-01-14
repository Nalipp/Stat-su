import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextArea = styled.textarea`
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
  border-color: ${props => props.theme.darkBlue};

  &::placeholder {
    font-style: italic;
    color: ${props => props.theme.darkBlue};
  }

  &:focus {
    outline: 0;
  }
`;

const ErrorTextArea = TextArea.extend`
    border-color: ${props => props.theme.tomato};
`

const TextareaCpt = (props) => (
  props.valid ?
  <TextArea
    autoComplete="off"
    {...props}></TextArea>
  :
  <ErrorTextArea
    autoComplete="off"
    {...props}></ErrorTextArea>)

TextareaCpt.propTypes = {
  valid: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
};

export default TextareaCpt;
