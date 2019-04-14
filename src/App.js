import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Countdown from './Countdown';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Countdown date={`2019-05-09T09:00:00`}  />
        </header>
      </div>
    );
  }
}

export default App;
