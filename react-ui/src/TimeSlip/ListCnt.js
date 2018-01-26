import React, { Component } from 'react';
import FormCnt from './FormCnt';
import ItemCnt from './ItemCnt';
import ListCpt from './ListCpt';
import ListHeading from './ListHeading';
import PropTypes from 'prop-types';
import DelayAnimationScreenCpt from './DelayAnimationScreenCpt';

class ListCnt extends Component {
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

  render () {
    const activeTimeSlips = this.props.activeTimeSlips.map(slip => (
      <ItemCnt 
        key={slip._id}
        {...slip} 
        onArchive={this.props.archiveTimeSlip.bind(this, slip)}
        toggleSpinnerState={this.toggleSpinnerState}
      />
    ));

    return (
      <div>
        {this.state.showAnimationDelayScreen && <DelayAnimationScreenCpt />}
        <ListCpt>
          <ListHeading toggleSummary={this.props.toggleSummary} />
          <FormCnt addTimeSlip={this.props.addTimeSlip} />
          <ul>{activeTimeSlips}</ul>
        </ListCpt>
      </div>
    )

  }
}

ListCnt.propTypes = {
  activeTimeSlips: PropTypes.arrayOf(PropTypes.object),
  archiveTimeSlip: PropTypes.func,
  toggleSummary: PropTypes.func,
  addTimeSlip: PropTypes.func,
  totalActiveTime: PropTypes.number,
  totalArchivedTime: PropTypes.number,
};

export default ListCnt;
