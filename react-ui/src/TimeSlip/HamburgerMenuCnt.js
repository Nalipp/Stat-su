import React from 'react';
import Icons from './../Icons';
import MenuControlCpt from './MenuControlCpt';
import PropTypes from 'prop-types';

const HamburgerMenuCnt = props => 
  <div onClick={props.toggleVisibility}>
    <MenuControlCpt>
      <Icons icon='hamburger' size='large' />
    </MenuControlCpt>
  </div>

HamburgerMenuCnt.propTypes = {
  toggleVisibility: PropTypes.func,
}

export default HamburgerMenuCnt;
