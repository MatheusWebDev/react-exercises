import React, { Component } from 'react';
import NavBar from './NavBar';
import './MemoryGame.css';

class MemoryGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teste: "oie"
    }
  }
  
  render() {
    return (
      <div>
        <NavBar />
        This is my memory game!
      </div>
    );
  }
}

export default MemoryGame;