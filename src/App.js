import React, { Component } from 'react';
import {Form} from './components/Form';
import {Timer} from './components/Timer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: 0
    }
    this.countdown = this.countdown.bind(this);
  }

  componentDidUpdate() {
    this.decrementCounter()
  }

  countdown(dateValue) {
    let now = Date.now();
    let dateValueMili = Date.parse(new Date(dateValue));
    let miliDif = dateValueMili - now;
    this.setState({
      date: miliDif
    });
    console.log(miliDif)
  }

  decrementCounter() {
    setTimeout(()=>{
      this.setState({
        date: this.state.date - 1000
      });
    },1000);
  }

  render() {
    
    return (
      <div className="app">
       <Form setDate={this.countdown}/>
       <Timer date={this.state.date}/>
      </div>
    );
  }
}

export default App;
