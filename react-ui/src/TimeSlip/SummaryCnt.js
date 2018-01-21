import React from 'react';
import PropTypes from 'prop-types';
import SummaryCpt from './SummaryCpt';
import SummaryHeadingCpt from './SummaryHeadingCpt';
import SummaryItemCnt from './SummaryItemCnt';
import SummaryItemCpt from './SummaryItemCpt';

const SummaryCnt = props => {
  //
  // total times should calculated, and the state held in the list cpt not here
  // that way we can re-calculate the total time and reset the state in the parent component and pass it here
  // so we don't need a page refresh to see updates in the total time
  //
  let totalActiveTime = 0;
  let totalArchivedTime = 0;

  props.timeSlips.forEach(v => {
    if (!v.completed) totalActiveTime += v.total_time;
    else totalArchivedTime += v.total_time;
  });

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
        totalTime={totalActiveTime} 
        active="true">
        {activeSummary}
      </SummaryItemCnt>
      <SummaryItemCnt 
        totalTime={totalArchivedTime} 
        active="false">
        {archivedSummary}
      </SummaryItemCnt>
    </SummaryCpt>
  )
}

SummaryCnt.propTypes = {
  toggleSummary: PropTypes.func,
  archiveTimeSlip: PropTypes.func,
  deleteTimeSlip: PropTypes.func,
  timeSlips: PropTypes.arrayOf(PropTypes.object),
}

export default SummaryCnt;
