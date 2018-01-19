import React from 'react';
import {media} from '../style-utils';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.section`
  background: ${props => props.theme.light};

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

