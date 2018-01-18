import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {media} from '../style-utils';

const baseColor = props => props.theme.dark;
const errorColor = props => props.theme.danger;
const borderColor = props => props.valid ? baseColor : errorColor;

const TextArea = styled.textarea`
  display: block;
  font-size: .9rem;
  letter-spacing: .1rem;
  border-radius: 0;
  background: ${props => props.theme.background};
  color: ${props => props.theme.dark};
  margin: 2.2rem 0;
  padding: .25rem .5rem;
  width: 92%;
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
    height: 4.5rem;
    margin: 2.8rem 0;
    border-left: .1rem dashed ${borderColor};
    border-bottom: .1rem solid ${borderColor}; 

  `}

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
    {...props}
    onChange={props.handleInputChange}
    onKeyPress={props.checkSubmit}
    ></TextArea>

TextareaCpt.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  valid: PropTypes.bool,
  handleInputChange: PropTypes.func,
  checkSubmit: PropTypes.func,
};

export default TextareaCpt;
