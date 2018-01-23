import React from 'react';
import PropTypes from 'prop-types';
import SummaryCpt from './SummaryCpt';
import CloseMenuCnt from './CloseMenuCnt';
import SummaryListCnt from './SummaryListCnt';
import SummaryItemCpt from './SummaryItemCpt';

const SummaryCnt = props => {
  const activeSummary = props.activeTimeSlips.map(slip => (
    <SummaryItemCpt 
      key={slip._id}
      {...slip} 
      onArchive={props.archiveTimeSlip.bind(this, slip)}
      onDelete={props.deleteTimeSlip.bind(this, slip)}
    />
  ));

  const archivedSummary = props.archivedTimeSlips.map(slip => (
    <SummaryItemCpt
      key={slip._id}
      {...slip} 
      onArchive={props.archiveTimeSlip.bind(this, slip)}
      onDelete={props.deleteTimeSlip.bind(this, slip)}
    />
  ));

  return (
    <SummaryCpt>
      <CloseMenuCnt toggleVisibility={props.toggleSummary} />
      <SummaryListCnt 
        totalTime={props.totalActiveTime} 
        active="true">
        {activeSummary}
      </SummaryListCnt>
      <SummaryListCnt 
        totalTime={props.totalArchivedTime} 
        active="false">
        {archivedSummary}
      </SummaryListCnt>
    </SummaryCpt>
  )
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
