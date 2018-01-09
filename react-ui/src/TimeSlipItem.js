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
    }
    this.showTimerScreen = this.showTimerScreen.bind(this);
    this.hideTimerScreen = this.hideTimerScreen.bind(this);
    this.loadTimeSlip = this.loadTimeSlip.bind(this);
    this.loadTimeSlip(this.props._id)
  }

  async loadTimeSlip(id) {
    let timeSlip = await apiCalls.getTimeSlip(id);
    let totalTime = timeSlip.total_time;
    this.setState({totalTime}, () => console.log('this.state.totalTime loaded', this.state.totalTime));
  }

  showTimerScreen() {
    this.setState({timerScreenShowing: true});
  }

  hideTimerScreen() {
    this.setState({timerScreenShowing: false});
  }

  render() {
    const { language, description, url, _id, onArchive} = this.props;

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
    const totalStyle = {
      color: 'white',
      fontSize: '11px',
      flex: '1.5',
      textAlign: 'center',
    }
    const descriptionStyle = {
      fontSize: '14px',
      padding: '4px',
      lineHeight: '20px',
      letterSpacing: '2px',
    }
    const bottomNavStyle = {
      display: 'flex',
      justifyContent: 'space-between',
    }

  return (
    <li style={listStyle}>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <h2 style={h2Style}>{language ? language : '-'}</h2>
        <p style={startButtonStyle} onClick={this.showTimerScreen}>start</p>
        <p style={totalStyle}>{this.state.totalTime}</p>
      </div><p style={descriptionStyle}>{description}</p>
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
        <p style={{cursor: 'pointer'}} onClick={onArchive}>
          archive
        </p>
      </div>

        {this.state.timerScreenShowing ? 
          <TimeSlipTimer
            key={_id}
            id={_id}
            language={language} 
            totalTime={this.state.totalTime} 
            hideTimerScreen={this.hideTimerScreen}
            showTimerScreen={this.showTimerScreen}
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
  url: PropTypes.string,
  description: PropTypes.string,
  onArchive: PropTypes.func
}

export default TimeSlipItem;
