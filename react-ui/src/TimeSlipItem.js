import React from 'react';
import PropTypes from 'prop-types';

const TimeSlipItem = ({language, url, description, onDelete}) => {
  const listStyle = {
    listStyle: 'none',
    margin: '10px 0',
    padding: '8px',
    border: '1px dashed white',
  }
  const h2Style = {
    paddingRight: '10px',
    flex: '9',
  }
  const startButtonStyle = {
    fontSize: '10px',
    borderRadius: '6px',
    padding: '4px 6px',
    marginRight: '14px',
    color: 'white',
    background: '#1CABA7',
    cursor: 'pointer',
    flex: '0.5',
  }
  const totalStyle = {
    color: 'white',
    fontSize: '11px',
    flex: '1.5',
    textAlign: 'center',
  }
  const descriptionStyle = {
    fontSize: '14px',
    padding: '4px',
    lineHeight: '20px',
    letterSpacing: '2px',
  }
  const bottomNavStyle = {
    display: 'flex',
    justifyContent: 'space-between',
  }

  return (
    <li style={listStyle}>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <h2 style={h2Style}>{language ? language : '-'}</h2>
        <p style={startButtonStyle}>start</p>
        <p style={totalStyle}>1h 32m</p>
      </div><p style={descriptionStyle}>{description}</p>
      <div style={bottomNavStyle}>
        <p>
          {url ? (
            <a 
              href={url} 
              rel="noopener noreferrer"
              target="_blank"
              style={{color: '#fff', padding: '6px'}}>
              link
            </a>
            ) : null
          }
        </p>
        <p style={{cursor: 'pointer'}} onClick={onDelete}>
          trash
        </p>
      </div>
    </li>
  )
}

TimeSlipItem.propTypes = {
  language: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
  onDelete: PropTypes.func
}

export default TimeSlipItem;
