import React from 'react';
import PropTypes from 'prop-types';

const TimeSlipItem = ({language, description}) => {
  const listStyle = {
    'listStyle': 'none',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center'
  }
  const h2Style = {'padding-right': '10px'}
  const pStyle = {}
  return (
    <li style={listStyle}>
      <h2 style={h2Style}>{language}</h2>
      <p style={pStyle}>{description}</p>
    </li>
  )
}

TimeSlipItem.propTypes = {
  language: PropTypes.string,
  description: PropTypes.string
}

export default TimeSlipItem;
