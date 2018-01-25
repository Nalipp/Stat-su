import React from 'react';
import styled, {keyframes} from 'styled-components';
import {media} from '../style-utils';
import PropTypes from 'prop-types';
import MenuHamburgerCnt from './MenuHamburgerCnt';

const fadeIn = keyframes`
  from {opacity: 0.1}
  to {opacity: 1}
`;

const MainHeading = styled.h1`
  font-size: 3.75rem;
  color: ${props => props.theme.light};
  letter-spacing: 0.375rem;
  ${media.tablet`
    font-size: 5rem;
  `}
`;

const Span = styled.span`
  color: ${props => props.theme.dark};
`
const H3 = styled.p`
  padding-top: .5rem;
  margin-left: -1.25rem;
  font-size: .65rem;
  letter-spacing: .3rem;
  ${media.tablet`
    padding-top: .6rem;
    margin-left: -1.25rem;
    font-size: .75rem;
    letter-spacing: .4rem;
  `}
`;

const Heading = styled.section`
  margin: 3.75rem 0;
  align-items: center;
  text-align: center;
  animation: ${fadeIn} 0.3s linear;
  ${media.tablet`
    margin: 6rem 0;
  `}
`;

const ListHeading = (props) =>
  <div>
    <MenuHamburgerCnt toggleVisibility={props.toggleSummary} />
    <Heading>
      <MainHeading>
        Stat<Span>su</Span>
      </MainHeading>
      <H3>Track you productivity</H3>
    </Heading>
  </div>

ListHeading.propTypes = {
  toggleSummary: PropTypes.func,
}

export default ListHeading;
