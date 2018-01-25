import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ItemCpt from './ItemCpt';
import * as apiCalls from './../api';

class TimeSlipItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timerScreenShowing: false,
      totalTime: 0,
    }
    this.showTimerScreen = this.showTimerScreen.bind(this);
    this.hideTimerScreen = this.hideTimerScreen.bind(this);
    this.loadTimeSlip = this.loadTimeSlip.bind(this);
    this.loadTimeSlip(this.props._id)
    this.postTime = this.postTime.bind(this);
  }

  async loadTimeSlip(id) {
    let timeSlip = await apiCalls.getTimeSlip(id);
    let totalTime = timeSlip.total_time;
    this.setState({totalTime});
  }

  postTime(id, currentTotal) {
    let totalTime = this.state.totalTime + currentTotal;
    this.setState({totalTime});
    apiCalls.postTime(id, {totalTime}); 
  }

  showTimerScreen() {
    this.setState({timerScreenShowing: true});
  }

  hideTimerScreen() {
    this.setState({timerScreenShowing: false});
  }

  render() {
    const { _id } = this.props;

  return (
    <ItemCpt 
      id={_id}
      {...this.props}
      totalTime={this.state.totalTime}
      hideTimerScreen={this.hideTimerScreen}
      showTimerScreen={this.showTimerScreen}
      timerScreenShowing={this.state.timerScreenShowing}
      showTimerScreenShowing={this.showTimerScreenShowing}
      postTime={this.postTime}
    />
    )
  }
}

TimeSlipItem.propTypes = {
  _id: PropTypes.string,
  language: PropTypes.string,
  created_date: PropTypes.string,
  last_update: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
  totalTime: PropTypes.number,
  onArchive: PropTypes.func,
}

export default TimeSlipItem;
