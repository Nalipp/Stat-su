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

const ErrorStyle = TextArea.extend`
  border-color: ${props => props.theme.redOrange};
`;

const TextareaCpt = ({name, placeholder, valid, value, onChange, onKeyPress }) => {
  { if (valid)
    return <TextArea
      autoComplete="off"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
    ></TextArea>
    else return <ErrorStyle 
      autoComplete="off"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
    ></ErrorStyle>
  }
}

TextareaCpt.propTypes = {
  placeholder: PropTypes.string,
};

export default TextareaCpt;
