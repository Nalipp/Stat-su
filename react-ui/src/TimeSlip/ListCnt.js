import React, { Component } from 'react';
import Form from './FormCnt';
import UnarchivedItemCnt from './ItemCnt';
import ListCpt from './ListCpt';
import ListHeading from './ListHeading';
import SummaryCnt from './SummaryCnt';
import PropTypes from 'prop-types';

class ListCnt extends Component {
  render () {
    const unarchivedItemList = this.props.timeSlips.map(slip => (
      (slip.completed === false &&
        <UnarchivedItemCnt 
          key={slip._id}
          {...slip} 
          onArchive={this.props.archiveTimeSlip.bind(this, slip)}
        />
      )
    ));

    return (
      <div>
      { this.props.showSummary ? 
        <SummaryCnt 
          archiveTimeSlip={this.props.archiveTimeSlip}
          deleteTimeSlip={this.props.deleteTimeSlip}
          timeSlips={this.props.timeSlips}
          toggleSummary={this.props.toggleSummary} 
          totalActiveTime={this.props.totalActiveTime} 
          totalArchivedTime={this.props.totalArchivedTime} 
          />
        : 
        <ListCpt>
          <ListHeading toggleSummary={this.props.toggleSummary} />
          <Form addTimeSlip={this.props.addTimeSlip} />
          <ul>{unarchivedItemList}</ul>
        </ListCpt>
      }
      </div>
    )
  }
}

ListCpt.propTypes = {
  timeSlips: PropTypes.arrayOf(PropTypes.object),
  showSummary: PropTypes.bool,
  archiveTimeSlip: PropTypes.func,
  toggleSummary: PropTypes.func,
  addTimeSlip: PropTypes.func,
  totalActiveTime: PropTypes.number,
  totalArchivedTime: PropTypes.number,
};

export default ListCnt;
