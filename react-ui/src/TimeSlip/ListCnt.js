import React, { Component } from 'react';
import Form from './FormCnt';
import ItemCnt from './ItemCnt';
import ListCpt from './ListCpt';
import ListHeading from './ListHeading';
import PropTypes from 'prop-types';

class ListCnt extends Component {
  render () {
    const activeTimeSlips = this.props.activeTimeSlips.map(slip => (
      <ItemCnt 
        key={slip._id}
        {...slip} 
        onArchive={this.props.archiveTimeSlip.bind(this, slip)}
      />
    ));

    return (
      <ListCpt>
        <ListHeading toggleSummary={this.props.toggleSummary} />
        <Form addTimeSlip={this.props.addTimeSlip} />
        <ul>{activeTimeSlips}</ul>
      </ListCpt>
    )
  }
}

ListCpt.propTypes = {
  activeTimeSlips: PropTypes.arrayOf(PropTypes.object),
  archiveTimeSlip: PropTypes.func,
  toggleSummary: PropTypes.func,
  addTimeSlip: PropTypes.func,
  totalActiveTime: PropTypes.number,
  totalArchivedTime: PropTypes.number,
};

export default ListCnt;
