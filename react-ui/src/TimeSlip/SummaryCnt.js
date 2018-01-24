import React from 'react';
import PropTypes from 'prop-types';
import SummaryCpt from './SummaryCpt';
import CloseMenuCnt from './CloseMenuCnt';
import SummaryListCpt from './SummaryListCpt';
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
      <SummaryListCpt 
        totalTime={props.totalActiveTime} 
        active="true">
        {activeSummary}
      </SummaryListCpt>
      <SummaryListCpt 
        totalTime={props.totalArchivedTime} 
        active="false">
        {archivedSummary}
      </SummaryListCpt>
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
