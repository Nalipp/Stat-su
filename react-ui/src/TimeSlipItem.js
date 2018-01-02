import React from 'react';
import PropTypes from 'prop-types';

const TimeSlipItem = ({language, url, description}) => {
  const listStyle = {
    listStyle: 'none',
    margin: '10px 0',
    padding: '4px',
    border: '1px dashed white',
  }
  const h2Style = {paddingRight: '10px'}
  return (
    <li style={listStyle}>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <h2 style={h2Style}>{language}</h2>
      </div>
      <p>
        {description}
        <a 
          href={url} 
          rel="noopener noreferrer"
          target="_blank"
          style={{color: '#fff', padding: '6px'}}>
          link
        </a>
      </p>
    </li>
  )
}

TimeSlipItem.propTypes = {
  language: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string
}

export default TimeSlipItem;
