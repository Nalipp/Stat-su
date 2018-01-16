import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const baseColor = props => props.theme.dark;
const errorColor = props => props.theme.danger;

const TextArea = styled.textarea`
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
