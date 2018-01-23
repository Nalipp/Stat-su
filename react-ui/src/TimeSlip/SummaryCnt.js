import React from 'react';
import PropTypes from 'prop-types';
import SummaryCpt from './SummaryCpt';
import SummaryHeadingCpt from './SummaryHeadingCpt';
import SummaryItemCnt from './SummaryItemCnt';
import SummaryItemCpt from './SummaryItemCpt';

const SummaryCnt = props => {
  const activeSummary = props.timeSlips.map(slip => (
    (slip.completed === false &&
      <SummaryItemCpt 
        key={slip._id}
        {...slip} 
        onArchive={props.archiveTimeSlip.bind(this, slip)}
        onDelete={props.deleteTimeSlip.bind(this, slip)}
      />
    )
  ));

  const archivedSummary = props.timeSlips.map(slip => (
    (slip.completed === true &&
      <SummaryItemCpt
        key={slip._id}
        {...slip} 
        onArchive={props.archiveTimeSlip.bind(this, slip)}
        onDelete={props.deleteTimeSlip.bind(this, slip)}
      />
    )
  ));

  return (
    <SummaryCpt>
      <SummaryHeadingCpt toggleSummary={props.toggleSummary} />
      <SummaryItemCnt 
        totalTime={props.totalActiveTime} 
        active="true">
        {activeSummary}
      </SummaryItemCnt>
      <SummaryItemCnt 
        totalTime={props.totalArchivedTime} 
        active="false">
        {archivedSummary}
      </SummaryItemCnt>
    </SummaryCpt>
  )
}

SummaryCnt.propTypes = {
  timeSlips: PropTypes.arrayOf(PropTypes.object),
  totalActiveTime: PropTypes.number.isRequired,
  totalArchivedTime: PropTypes.number,
  toggleSummary: PropTypes.func,
  archiveTimeSlip: PropTypes.func,
  deleteTimeSlip: PropTypes.func,
}

export default SummaryCnt;
