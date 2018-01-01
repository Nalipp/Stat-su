import React, { Component } from 'react';
import './App.css';
import TimeSlipList from './TimeSlipList';

class App extends Component {
  render() {
    const divStyle = {'width': '60%', 'margin': 'auto'}
    return (
      <div style={divStyle}>
        <TimeSlipList />
      </div>
    );
  }
}

export default App;
