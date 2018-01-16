import React from 'react';
import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
  from {opacity: 0.1}
  to {opacity: 1}
`;

const Wrapper = styled.section`
  margin: 60px 0;
  display: flex;
  alignItems: center;
  animation: ${fadeIn} 0.3s linear;
`;

const H1 = styled.h1`
  font-size: 60px;
  color: 'white';
  letter-spacing: 6px;
`
const Span = styled.span`
  color: ${props => props.theme.darkBlue};
`

const ListCpt = () =>
  <Wrapper>
    <H1>
      <Span>T</Span>Study
    </H1>
  </Wrapper>

export default ListCpt;
