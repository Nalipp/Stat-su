import React from 'react';
import {media} from '../style-utils';
import PropTypes from 'prop-types';
import Icons from './../Icons';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 95%;
  margin: 0 auto 5.625rem auto;

  ${media.tablet`
  `}
  ${media.desktop`
  `}
  ${media.jumboDesktop`
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

