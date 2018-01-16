import React from 'react';
import ListCnt from './TimeSlip/ListCnt';
import styled from 'styled-components';
import {media} from './style-utils';

const Wrapper = styled.section`
  width: 90%;
  margin: 0 auto 5.625rem auto;

  ${media.tablet`
    width: 60%;
  `}
  ${media.desktop`
    width: 50%;
  `}
  ${media.jumboDesktop`
    width: 40%;
  `}
`
const App = () =>
  <Wrapper>
    <ListCnt />
  </Wrapper>

export default App;
