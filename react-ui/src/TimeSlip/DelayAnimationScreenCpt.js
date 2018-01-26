import React from 'react';
import styled, { keyframes } from 'styled-components';

const SpinnerAnimation = keyframes`
  to {transform: rotate(360deg)
`;

const AnimationScreen = styled.section`
  height: 115%;
  width: 100%;
  position: fixed;
  margin-top: -15%;
  background: ${props => props.theme.transparentBackground};
  z-index: 1;
`;

const Spinner = styled.span`
  &:before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 30px;
    height: 30px;
    margin-top: -15px;
    margin-left: -15px;
    border-radius: 50%;
    border: 1px solid #ccc;
    border-top-color: #07d;
    animation: ${SpinnerAnimation} .6s linear infinite;
  }
`;

const AnimationScreenCpt = () =>
  <AnimationScreen>
    <Spinner />
  </AnimationScreen>

export default AnimationScreenCpt;
