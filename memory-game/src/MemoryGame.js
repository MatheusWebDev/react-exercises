import React, { Component } from 'react';
import NavBar from './NavBar';
import './MemoryGame.css';
import Card from './Card';
import shuffle, { cardState } from './CardState';


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
    this.handleNewGame = this.handleNewGame.bind(this);
  }

  handleNewGame() {
    let cards = this.state.cards.map(card => ({
      ...card,
      cardState: cardState.HIDING
    }));
    cards = shuffle(cards);
    this.setState({cards});
  }

  handleClick(id) {
    const mapCardState = (cards, idsToChange, newCardState) => {
      return cards.map(c => {
        if (idsToChange.includes(c.id)) {
          return {
            ...c,
            cardState: newCardState
          };
        }
        return c;
      });
    }

    const foundCard = this.state.cards.find(c => c.id === id);

    if (this.state.noClick || foundCard.cardState !== cardState.HIDING) {
      return;
    }

    let noClick = false;

    let cards = mapCardState(this.state.cards, [id], cardState.SHOWING);

    const showingCards = cards.filter((c) => c.cardState === cardState.SHOWING);

    const ids = showingCards.map(c => c.id);

    if (showingCards.length === 2 &&
      showingCards[0].backgroundColor === showingCards[1].backgroundColor) {
      cards = mapCardState(cards, ids, cardState.MATCHING);
    } else if (showingCards.length === 2) {
      let hidingCards = mapCardState(cards, ids, cardState.HIDING);

      noClick = true;

      this.setState({ cards, noClick }, () => {
        setTimeout(() => {
          // set the state of the cards to HIDING after 1.3 seconds
          this.setState({ cards: hidingCards, noClick: false });
        }, 1300);
      });
      return;
    }

    this.setState({ cards, noClick });
  }

  render() {
    const cards = this.state.cards.map(card => (
      <Card
        key={card.id}
        onClick={this.onClick}
        showing={card.cardState !== cardState.HIDING}
        backgroundColor={card.backgroundColor}
      />
    ));
    return (
      <div>
        <NavBar onNewGame={this.handleNewGame} />
        <div style={{ 'padding': '0 8px' }}>
          {cards}
        </div>
      </div>
    );
  }
}

export default MemoryGame;
