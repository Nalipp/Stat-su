import React from 'react';

const TimeSlipItem = ({language, description}) => {
  return (
    <li>
      <span>{language}</span>
      <span>{description}</span>
    </li>
  )
}

export default TimeSlipItem;
