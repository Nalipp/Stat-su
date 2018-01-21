import React from 'react';
import PropTypes from 'prop-types';

import SummaryCpt from './SummaryCpt';
import SummaryHeadingCpt from './SummaryHeadingCpt';
import SummaryItemCnt from './SummaryItemCnt';
import SummaryItemCpt from './SummaryItemCpt';


const SummaryCnt = props => {

  const archivedItemSummary = props.timeSlips.map(slip => (
    (slip.completed === true &&
    <SummaryItemCpt 
      key={slip._id}
      {...slip} 
      onArchive={props.archiveTimeSlip.bind(this, slip)}
      onDelete={props.deleteTimeSlip.bind(this, slip)}
    />
    )
  ));

  const unarchivedItemSummary = props.timeSlips.map(slip => (
    (slip.completed === false &&
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
        timeSlips={props.timeSlips} 
        archive="true">
        {unarchivedItemSummary}
      </SummaryItemCnt>
      <SummaryItemCnt 
        timeSlips={props.timeSlips} 
        archive="false">
        {archivedItemSummary}
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
