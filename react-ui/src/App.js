import React from 'react';
import ListCnt from './TimeSlip/ListCnt';
import styled from 'styled-components';
import { media } from './style-utils';

const Wrapper = styled.section`
  width: 90%;
  margin: 0 auto 5.625rem auto;

  ${ media.mobile`
  ` }
  ${ media.tablet`
  ` }
  ${ media.desktop`
  ` }
  ${ media.jumboDesktop`
  ` }
`
const App = () =>
  <Wrapper>
    <ListCnt />
  </Wrapper>

export default App;
