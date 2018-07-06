import React, { Component } from 'react';
import {Form} from './components/Form';
import {Timer} from './components/Timer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      minutes: 0,
      hours: 0,
      days: 0
    }
  }
  render() {
    let {days, hours, minutes, seconds} = this.state;
    return (
      <div className="app">
       <Form/>
       <Timer
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
       />
      </div>
    );
  }
}

export default App;
