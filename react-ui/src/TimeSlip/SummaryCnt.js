import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SummaryCpt from './SummaryCpt';
import SummaryHeadingCpt from './SummaryHeadingCpt';
import SummaryItemCnt from './SummaryItemCnt';
import SummaryItemCpt from './SummaryItemCpt';

class SummaryCnt extends Component {
  constructor(props){
    super(props)
    this.state = {
      TotalActiveTime: 0,
      TotalArchivedTime: 0,
    }
    this.calculateTotalTimes = this.calculateTotalTimes.bind(this);
    this.recalculateTime = this.recalculateTime.bind(this);
  }

  componentDidMount() {
    this.calculateTotalTimes();
  }

  calculateTotalTimes() {
    let TotalActiveTime = 0;
    let TotalArchivedTime = 0;

    this.props.timeSlips.forEach(v => {
      if (!v.completed) TotalActiveTime += v.total_time;
      else TotalArchivedTime += v.total_time;
    });

    this.setState({TotalActiveTime, TotalArchivedTime});
  }

  recalculateTime(timeAmount, changingToActive) {
    if (changingToActive) {
      let TotalActiveTime = this.state.TotalActiveTime + timeAmount;
      let TotalArchivedTime = this.state.TotalArchivedTime - timeAmount;
      this.setState({TotalActiveTime});
      this.setState({TotalArchivedTime});
    } else {
      let TotalActiveTime = this.state.TotalActiveTime - timeAmount;
      let TotalArchivedTime = this.state.TotalArchivedTime + timeAmount;
      this.setState({TotalActiveTime});
      this.setState({TotalArchivedTime});
    }
  }

  render() {
    const activeSummary = this.props.timeSlips.map(slip => (
      (slip.completed === false &&
        <SummaryItemCpt 
          key={slip._id}
          {...slip} 
          onArchive={this.props.archiveTimeSlip.bind(this, slip)}
          onDelete={this.props.deleteTimeSlip.bind(this, slip)}
        />
      )
    ));

    const archivedSummary = this.props.timeSlips.map(slip => (
      (slip.completed === true &&
        <SummaryItemCpt
          key={slip._id}
          {...slip} 
          onArchive={this.props.archiveTimeSlip.bind(this, slip)}
          onDelete={this.props.deleteTimeSlip.bind(this, slip)}
        />
      )
    ));

    return (
      <SummaryCpt>
        <SummaryHeadingCpt toggleSummary={this.props.toggleSummary} />
        <SummaryItemCnt 
          totalTime={this.state.TotalActiveTime} 
          active="true">
          {activeSummary}
        </SummaryItemCnt>
        <SummaryItemCnt 
          totalTime={this.state.TotalArchivedTime} 
          active="false">
          {archivedSummary}
        </SummaryItemCnt>
      </SummaryCpt>
    )
  }
}

SummaryCnt.propTypes = {
  timeSlips: PropTypes.arrayOf(PropTypes.object),
  toggleSummary: PropTypes.func,
  archiveTimeSlip: PropTypes.func,
  deleteTimeSlip: PropTypes.func,
}

export default SummaryCnt;
