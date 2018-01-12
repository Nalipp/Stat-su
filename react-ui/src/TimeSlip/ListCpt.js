import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  alignItems: center;
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
