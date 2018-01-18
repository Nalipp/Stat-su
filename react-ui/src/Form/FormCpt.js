import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const fadeIn = keyframes`
  from {opacity: 0.1}
  to {opacity: 1}
`;

const Form = styled.form`
  margin-bottom: 3rem;
  animation: ${fadeIn} 0.6s linear;
  ${`
    margin-bottom: 5rem;
  `};
`;

const Btn = styled.button`
  display: none;
`;

const FormCpt = (props) =>
  <Form>
    {props.children}
    <Btn type="button">Add New Study Resource</Btn>
  </Form>

FormCpt.propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ]).isRequired
};

export default FormCpt;
