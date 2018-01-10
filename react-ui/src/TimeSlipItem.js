import React, {Component} from 'react';
import TimeSlipTimer from './TimeSlipTimer';
import PropTypes from 'prop-types';
import * as apiCalls from './api';

class TimeSlipItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timerScreenShowing: false,
      totalTime: null,
      totalTimeConverted: '00:00:00',
    }
    this.showTimerScreen = this.showTimerScreen.bind(this);
    this.hideTimerScreen = this.hideTimerScreen.bind(this);
    this.loadTimeSlip = this.loadTimeSlip.bind(this);
    this.loadTimeSlip(this.props._id)
    this.postTime = this.postTime.bind(this);
    this.convertTime = this.convertTime.bind(this);
  }

  async loadTimeSlip(id) {
    let timeSlip = await apiCalls.getTimeSlip(id);
    let totalTime = timeSlip.total_time;
    this.setState({totalTime}, () => this.convertTime());
  }

  postTime(id, currentTotal) {
    let totalTime = this.state.totalTime + currentTotal;
    this.setState({totalTime}, () => this.convertTime());
    apiCalls.postTime(id, {totalTime}); 
  }

  convertTime() {
    let date = new Date(null);
    date.setMilliseconds(this.state.totalTime);
    let baseConverstion = date.toISOString()
    let totalTimeConverted = baseConverstion.substr(11, 8);

    this.setState({totalTimeConverted});
  }

  showTimerScreen() {
    this.setState({timerScreenShowing: true});
  }

  hideTimerScreen() {
    this.setState({timerScreenShowing: false});
  }

  render() {
    const { language, description, url, _id, onArchive, created_date} = this.props;

    const listStyle = {
      listStyle: 'none',
      margin: '10px 0',
      padding: '8px',
      border: '1px dashed white',
    }
    const h2Style = {
      paddingRight: '10px',
      flex: '9',
    }
    const startButtonStyle = {
      fontSize: '12px',
      borderRadius: '8px',
      padding: '4px 6px',
      marginRight: '14px',
      background: '#72DA66',
      color: 'white',
      cursor: 'pointer',
      flex: '0.5',
    }
    const pStyle = {
      color: 'white',
      fontSize: '11px',
      flex: '1.5',
    }
    const descriptionStyle = {
      fontSize: '14px',
      padding: '4px',
      lineHeight: '20px',
      letterSpacing: '2px',
    }
    const bottomNavStyle = {
      display: 'flex',
      alignItems: 'center',
      marginTop: '4px',
    }

  return (
    <li style={listStyle}>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <h2 style={h2Style}>{language ? language : '-'}</h2>
        <p style={startButtonStyle} onClick={this.showTimerScreen}>start</p>
        <p style={pStyle}>{this.state.totalTimeConverted}</p>
      </div>
      <p style={descriptionStyle}>{description}</p>
      <div style={bottomNavStyle}>
        <p>
          {url ? (
            <a 
              href={url} 
              rel="noopener noreferrer"
              target="_blank"
              style={{color: '#fff', padding: '6px'}}>
              link
            </a>
            ) : null
          }
        </p>
        <p style={{cursor: 'pointer', paddingLeft: '12px'}} onClick={onArchive}>
          archive
        </p>
        <div style={{display: 'flex', flexDirection: 'column', marginLeft: '20px', fontSize: '10px'}}>
          <p>Created: <span style={{color: 'white', fontSize: '8px'}}>{created_date.slice(0, 10)}</span></p>
          <p>Updated: <span style={{color: 'white', fontSize: '8px'}}>{created_date.slice(0, 10)}</span></p>
        </div>
      </div>

        {this.state.timerScreenShowing ? 
          <TimeSlipTimer
            key={_id}
            id={_id}
            language={language} 
            totalTimeConverted={this.state.totalTimeConverted}
            hideTimerScreen={this.hideTimerScreen}
            showTimerScreen={this.showTimerScreen}
            postTime={this.postTime}
          />
          : null
        }
    </li>
    )
  }
}

TimeSlipItem.propTypes = {
  _id: PropTypes.string,
  language: PropTypes.string,
  created_date: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
  totalTime: PropTypes.number,
  onArchive: PropTypes.func
}

export default TimeSlipItem;
