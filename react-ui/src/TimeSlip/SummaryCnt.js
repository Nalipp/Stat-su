import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SummaryCpt from './SummaryCpt';
import MenuControlCnt from './MenuControlCnt';
import SummaryListCpt from './SummaryListCpt';
import SummaryItemCpt from './SummaryItemCpt';
import DelayAnimationScreenCpt from './DelayAnimationScreenCpt';

class SummaryCnt extends Component {
  constructor(props) {
  super(props)
    this.state = {
      showAnimationDelayScreen: false,
    }
    this.toggleSpinnerState = this.toggleSpinnerState.bind(this);
  }

  toggleSpinnerState() {
    this.setState({
      showAnimationDelayScreen : !this.state.showAnimationDelayScreen
    })
  }

  render() {
    const { 
      activeTimeSlips,
      archiveTimeSlip,
      deleteTimeSlip,
      archivedTimeSlips,
      toggleSummary,
      totalActiveTime,
      totalArchivedTime
    } = this.props;

    const activeSummary = activeTimeSlips.map(slip => (
      <SummaryItemCpt 
        key={slip._id}
        {...slip} 
        onArchive={archiveTimeSlip.bind(this, slip)}
        onDelete={deleteTimeSlip.bind(this, slip)}
        toggleSpinnerState={this.toggleSpinnerState}
      />
    ));

    const archivedSummary = archivedTimeSlips.map(slip => (
      <SummaryItemCpt
        key={slip._id}
        {...slip} 
        onArchive={archiveTimeSlip.bind(this, slip)}
        onDelete={deleteTimeSlip.bind(this, slip)}
        toggleSpinnerState={this.toggleSpinnerState}
      />
    ));

    return (
      <div>
        {this.state.showAnimationDelayScreen && <DelayAnimationScreenCpt />}
        <SummaryCpt>
          <MenuControlCnt 
            iconType={'close'} 
            color={'dark'} 
            toggleVisibility={toggleSummary} 
          />
          <SummaryListCpt 
            totalTime={totalActiveTime} 
            active="true">
            {activeSummary}
          </SummaryListCpt>
          <SummaryListCpt 
            totalTime={totalArchivedTime} 
            active="false">
            {archivedSummary}
          </SummaryListCpt>
        </SummaryCpt>
      </div>
    )
  }
}

SummaryCnt.propTypes = {
  activeTimeSlips: PropTypes.arrayOf(PropTypes.object),
  archivedTimeSlips: PropTypes.arrayOf(PropTypes.object),
  totalActiveTime: PropTypes.number.isRequired,
  totalArchivedTime: PropTypes.number,
  toggleSummary: PropTypes.func,
  archiveTimeSlip: PropTypes.func,
  deleteTimeSlip: PropTypes.func,
}

export default SummaryCnt;
