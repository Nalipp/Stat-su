import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TimeSlipCpt from './TimeSlipCpt';
import formatTime from '../time-utils';
import * as apiCalls from './../api';

class TimeSlipCnt extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timerScreenShowing: false,
      totalTime: null,
      totalTimeConverted: '00:00:00',
    }
    this.showTimerScreen = this.showTimerScreen.bind(this);
    this.hideTimerScreen = this.hideTimerScreen.bind(this);
    this.postTime = this.postTime.bind(this);
    this.convertTime = this.convertTime.bind(this);
  }

  postTime(id, currentTotal) {
    let totalTime = this.state.totalTime + currentTotal;
    this.setState({totalTime}, () => this.convertTime());

    apiCalls.postTime(id, {totalTime}); 
  }

  convertTime() {
    const totalTimeConverted = formatTime.mmss(this.state.totalTime)
    this.setState({totalTimeConverted});
  }

  showTimerScreen() {
    this.setState({timerScreenShowing: true});
  }

  hideTimerScreen() {
    this.setState({timerScreenShowing: false});
  }

  render() {
    const { language, description, url, _id, onArchive, created_date, last_update} = this.props;

  return (
    <TimeSlipCpt 
      id={_id}
      language={language}
      description={description}
      url={url}
      onArchive={onArchive}
      created_date={created_date}
      last_update={last_update}
      totalTimeConverted={this.state.totalTimeConverted}
      hideTimerScreen={this.hideTimerScreen}
      showTimerScreen={this.showTimerScreen}
      timerScreenShowing={this.state.timerScreenShowing}
      showTimerScreenShowing={this.showTimerScreenShowing}
      postTime={this.postTime}
    />
    )
  }
}

TimeSlipCnt.propTypes = {
  _id: PropTypes.string,
  language: PropTypes.string,
  created_date: PropTypes.string,
  last_update: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
  totalTime: PropTypes.number,
  onArchive: PropTypes.func,
  increaseTotalActiveTime: PropTypes.func,
}

export default TimeSlipCnt;
