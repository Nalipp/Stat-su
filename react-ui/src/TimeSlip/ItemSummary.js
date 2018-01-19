import React from 'react';
import PropTypes from 'prop-types';

const ItemSummary = props => {
  console.log(props)
  return <li>{props.language}</li>
}

export default ItemSummary;
