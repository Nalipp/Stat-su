import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemSummary from './ItemSummary';
import * as apiCalls from './../api';

class SummaryCnt extends Component{
  constructor(props){
    super(props)
    this.state = {
      timeSlips: [],
    }
  }

  componentDidMount() {
    console.log('mounted', this.props.timeSlips);
    this.setState({timeSlips: this.props.timeSlips})
  }

  render() {
    const timeSlip = this.state.timeSlips.map(slip =>
      <ItemSummary
        key={slip._id}
        {...slip} 
      />
    );

    return (
      <ul>
        {timeSlip}
      </ul>
    )
  }
}

SummaryCnt.propTypes = {
}

export default SummaryCnt;
