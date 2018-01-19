import React from 'react';
import PropTypes from 'prop-types';
import ItemSummaryCpt from './ItemSummaryCpt';

const ItemSummary = props => {
  console.log(props)
  return <ItemSummaryCpt {...props}/>
}

export default ItemSummary;
