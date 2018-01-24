import React from 'react';
import {media} from '../style-utils';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.section`
  background: ${props => props.theme.light};
  min-height: 100%;
  width: 100%;
  position: absolute;
  padding: 1rem 0;

  ${media.tablet`
    padding: 3rem 0;
  `}
  ${media.desktop`
    padding: 4rem 0;
    display: flex;
    justify-content: space-around;
  `}
  ${media.jumboDesktop`
    padding: 6rem 0;
  `}
`;

const SummaryCpt = props =>
  <Wrapper>
    {props.children}
  </Wrapper>

SummaryCpt.propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ]).isRequired
}

export default SummaryCpt;

