import React, { Component } from 'react';
import NavBar from './NavBar';
import './MemoryGame.css';
import Card from './Card';
import shuffle from './CardState';
import cardState from './CardState';

class MemoryGame extends Component {
  constructor(props) {
    super(props);
    let cards = [
      { id: 0, cardState: cardState.HIDING, backgroundColor: 'SteelBlue' },
      { id: 1, cardState: cardState.HIDING, backgroundColor: 'SteelBlue' },
      { id: 2, cardState: cardState.HIDING, backgroundColor: 'MediumSeaGreen' },
      { id: 3, cardState: cardState.HIDING, backgroundColor: 'MediumSeaGreen' },
      { id: 4, cardState: cardState.HIDING, backgroundColor: 'Orange' },
      { id: 5, cardState: cardState.HIDING, backgroundColor: 'Orange' },
      { id: 6, cardState: cardState.HIDING, backgroundColor: 'yellow' },
      { id: 7, cardState: cardState.HIDING, backgroundColor: 'yellow' },
      { id: 8, cardState: cardState.HIDING, backgroundColor: 'HotPink' },
      { id: 9, cardState: cardState.HIDING, backgroundColor: 'HotPink' },
      { id: 10, cardState: cardState.HIDING, backgroundColor: 'BlueViolet' },
      { id: 11, cardState: cardState.HIDING, backgroundColor: 'BlueViolet' },
      { id: 12, cardState: cardState.HIDING, backgroundColor: 'Sienna' },
      { id: 13, cardState: cardState.HIDING, backgroundColor: 'Sienna' },
      { id: 14, cardState: cardState.HIDING, backgroundColor: 'Crimson' },
      { id: 15, cardState: cardState.HIDING, backgroundColor: 'Crimson' },
      { id: 16, cardState: cardState.HIDING, backgroundColor: 'Teal' },
      { id: 17, cardState: cardState.HIDING, backgroundColor: 'Teal' }
    ];
    this.state = { cards: shuffle(cards) };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(e);
    this.setState({});
  }

  render() {
    const boxes = this.state.cards.map(card => (
      <Card key={card.id} color={card.backgroundColor} onClick={this.handleClick} />
    ));
    return (
      <div>
        <NavBar />
        <div style={{ 'padding': '0 8px' }}>
          {boxes}
        </div>
      </div>
    );
  }
}

export default MemoryGame;