import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Yahtzee from './Game/Yahtzee';

class App extends Component {
  render() {
    Yahtzee();
    return (
      <div id="myCanvas">
        
      </div>
    );
  }
}

export default App;
