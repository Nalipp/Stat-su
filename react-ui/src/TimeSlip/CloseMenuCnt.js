import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icons from './../Icons';
import MenuControlCpt from './MenuControlCpt';

const CloseMenuCnt = props => 
  <div onClick={props.toggleVisibility}>
    <MenuControlCpt>
      <Icons color='dark' icon='close' size='mlarge' />
    </MenuControlCpt>
  </div>

CloseMenuCnt.propTypes = {
  toggleVisibility: PropTypes.func,
}

export default CloseMenuCnt;
