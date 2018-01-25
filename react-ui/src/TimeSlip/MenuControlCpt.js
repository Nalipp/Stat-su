import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { media } from '../style-utils';

const Menu = styled.span`
  position: absolute;
  top: 0;
  right 0;
  padding: 1.25rem 1.25rem 2.25rem 2.25rem;
  height: 2rem;
  width: 2rem;

  ${media.jumboDesktop`
    padding: 2rem 2rem 3rem 3rem;
    height: 2.5rem;
    width: 2.5rem;
  `}
`;

const MenuCpt = (props) => 
  <Menu>
    {props.children}
  </Menu>

MenuCpt.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default MenuCpt;
