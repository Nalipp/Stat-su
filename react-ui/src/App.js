import React from 'react';
import TimeSlips from './TimeSlip/ListCnt';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 60%;
  max-width: 600px;
  margin: auto;

  @media (max-width: 500px) {
    min-width: 85%;
  }
`
const App = () =>
  <Wrapper>
    <TimeSlips />
  </Wrapper>

export default App;
