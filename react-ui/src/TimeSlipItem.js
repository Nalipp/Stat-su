import React from 'react';
import PropTypes from 'prop-types';

const TimeSlipItem = ({language, description}) => {
  return (
    <li>
      <span>{language}</span>
      <span>{description}</span>
    </li>
  )
}

TimeSlipItem.propTypes = {
  language: PropTypes.string,
  description: PropTypes.string
}

export default TimeSlipItem;
