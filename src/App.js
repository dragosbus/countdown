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
      days: 0,
      date: 0
    }
    this.coundown = this.coundown.bind(this);
  }

  componentWillMount() {
    this.coundown()
  }

  coundown(dateValue) {
    let now = Date.now();
    let dateValueMili = Date.parse(new Date(dateValue));
    
    console.log(dateValueMili - now)
  }

  render() {
    let {days, hours, minutes, seconds} = this.state;
    return (
      <div className="app">
       <Form setDate={this.coundown}/>
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
