import React from 'react';
import Icons from './../Icons';
import MenuControlCpt from './MenuControlCpt';
import PropTypes from 'prop-types';

const MenuControlCnt = props => 
  <div onClick={props.toggleVisibility}>
    <MenuControlCpt>
      <Icons 
        color={props.color} 
        icon={props.iconType} 
        size={props.size} 
      /> 
    </MenuControlCpt>
  </div>

MenuControlCnt.propTypes = {
  toggleVisibility: PropTypes.func,
  color: PropTypes.string,
  itonType: PropTypes.string,
  size: PropTypes.string,
}

export default MenuControlCnt;
