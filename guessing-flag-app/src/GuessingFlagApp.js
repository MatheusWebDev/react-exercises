import React, { Component } from 'react';
import NavBar from './NavBar';
import './GuessingFlagApp.css';

class GuessingFlagApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar />
        <h2>This is country flag guessing game.</h2>
      </div>
    );
  }
}

export default GuessingFlagApp;
