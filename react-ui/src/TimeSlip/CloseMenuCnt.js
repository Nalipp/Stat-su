import React from 'react';
import PropTypes from 'prop-types';
import Icons from './../Icons';
import MenuControlCpt from './MenuControlCpt';

const CloseMenuCnt = props => 
  <div onClick={props.toggleVisibility}>
    <MenuControlCpt>
      <Icons color={props.color} icon='close' />
    </MenuControlCpt>
  </div>

CloseMenuCnt.propTypes = {
  toggleVisibility: PropTypes.func,
  color: PropTypes.string,
}

export default CloseMenuCnt;
