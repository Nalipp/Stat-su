import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import icons from './icon-svg';

const light = props => props.theme.light;
const dark = props => props.theme.dark;
const faded = props => props.theme.faded;
const slightFade = props => props.theme.slightFade;

const Svg = styled.svg`
  display: inline-block;
  fill: ${
    props => props.color === 'dark'  
    ? dark 
    : props.color === 'faded' 
    ? faded 
    : props.color === 'slightFade' 
    ? slightFade 
    : light
  };
  cursor: pointer;
`;

const customSize = {
  small: '12',
  normal: '22',
  large: '28',
  mlarge: '38',
  xlarge: '45',
  xxlarge: '60',
  jumbo: '130',
  xjumbo: '160',
  xxjumbo: '210',
}

const Icons = props => (
  <Svg {...props} width={customSize[props.size]} height={customSize[props.size]} viewBox="0 0 1024 1024">
    <path d={icons[props.icon]}></path>
  </Svg>
);

Icons.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Icons;

