import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import InputCpt from './inputCpt';
import TextAreaCpt from './TextAreaCpt';

const fadeIn = keyframes`
  from {opacity: 0.1}
  to {opacity: 1}
`;

const Form = styled.form`
  margin-bottom: 60px;
  animation: ${fadeIn} 0.6s linear;
`;

const FormCpt = ({
    language, 
    languageValid,
    url,
    urlValid,
    description,
    descriptionValid,
    isErrorBorder,
    handleInputChange,
    checkSubmit
  }) =>

<Form>
  <InputCpt 
    name="language"
    placeholder="Topic..."
    value={language}
    valid={languageValid}
    onChange={handleInputChange}
    onKeyPress={checkSubmit}
  />  

  <InputCpt 
    name="url"
    placeholder="Link..."
    value={url}
    valid={urlValid}
    onChange={handleInputChange}
    onKeyPress={checkSubmit}
  />  

  <TextAreaCpt
    name="description"
    placeholder="Description..."
    value={description} 
    valid={isErrorBorder}
    onChange={handleInputChange}
    onKeyPress={checkSubmit}
  ></TextAreaCpt>

  <button type="button" style={{display: 'none'}}>
  Add New Study Resource</button>
</Form>

FormCpt.propTypes = {
  language: PropTypes.string,
  languageValid: PropTypes.bool,
  url: PropTypes.string,
  urlValid: PropTypes.bool,
  description: PropTypes.string,
  descriptionValid: PropTypes.bool,
  errorBorder: PropTypes.bool,
  isErrorBorder: PropTypes.bool,
  handleInputChange: PropTypes.func,
  checkSubmit: PropTypes.func,
};

export default FormCpt;
