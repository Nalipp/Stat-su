import React from 'react';
import {media} from '../style-utils';
import PropTypes from 'prop-types';
import Icons from './../Icons';
import styled from 'styled-components';

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
`;

const ListCpt = (props) =>
  <Wrapper>
    {props.children}
  </Wrapper>

ListCpt.propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ]).isRequired
}

export default ListCpt;
