import React from 'react';
import styled, {keyframes} from 'styled-components';
import {media} from '../style-utils';
import Icons from './../Icons';
import PropTypes from 'prop-types';

const fadeIn = keyframes`
  from {opacity: 0.1}
  to {opacity: 1}
`;

const H1 = styled.h1`
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

const Menu = styled.span`
  position: absolute;
  top: 0;
  right 0;
  padding: 1.25rem 1.25rem 2.25rem 2.25rem;
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
    <Menu onClick={props.toggleSummary}>
      <Icons icon='hamburger' size='large' />
    </Menu>
    <Heading>
      <H1>
        <Span>T</Span>Study
      </H1>
      <H3>Track you productivity</H3>
    </Heading>
  </div>

ListHeading.propTypes = {
  toggleSummary: PropTypes.func,
}

export default ListHeading;
