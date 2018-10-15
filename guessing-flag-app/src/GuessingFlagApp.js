import React, { Component } from 'react';
import NavBar from './NavBar';
import './GuessingFlagApp.css';

const guessState = {
  notGuessed: 0,
  guessWrong: 1,
  guessCorrect: 2
}
class GuessingFlagApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCountries: [],
      fourContries: [],
      sortCountry: {},
      guessState: guessState.notGuessed,
      countryGuess: ""
    };
    this.handleGuess = this.handleGuess.bind(this);
    this.nextGame = this.nextGame.bind(this);
  }

  handleGuess(e) {
    debugger;
    e.preventDefault();
    const data = {...this.state};
    if (data.countryGuess === data.sortCountry.name) {
      this.setState({data, guessState: guessState.guessCorrect});
    } else {
      this.setState({ data, guessState: guessState.guessWrong });
      debugger;
    }
  }

  getRadomCountry(allCountries) {
    let countryIndex = Math.floor(Math.random() * allCountries.length);
    return allCountries[countryIndex];
  }

  componentDidMount() {
    const URL = "https://restcountries.eu/rest/v2/all";
    fetch(URL)
      .then(data => data.json())
      .then(allCountries => {
        let fourContries = [this.getRadomCountry(allCountries),
                            this.getRadomCountry(allCountries),
                            this.getRadomCountry(allCountries),
                            this.getRadomCountry(allCountries)];
        let sortCountry = this.getRadomCountry(fourContries);
        this.setState({ fourContries, sortCountry, allCountries});
      });
  }

  
  nextGame() {
    let fourContries = { ...this.state.fourContries };
    fourContries = [this.getRadomCountry(this.state.allCountries),
                    this.getRadomCountry(this.state.allCountries),
                    this.getRadomCountry(this.state.allCountries),
                     this.getRadomCountry(this.state.allCountries)];
    let sortCountry = { ...this.state.sortCountry };
    sortCountry = this.getRadomCountry(fourContries);
    this.setState({ fourContries, sortCountry, guessState: 0, countryGuess: "" });
    console.log(this.state);
    debugger;
  }



  render() {
    let options = <div> Carregando... </div>
    let flag = <div> Carregando... </div>
    let button = <button type="submit">GUESS</button>
    const { fourContries, sortCountry, guessState } = this.state;
    if (fourContries && fourContries.length > 0) {
      if (guessState === 0) {
        options = fourContries.map(c => (
          <div>
            <input
              type="radio"
              id={c.numericCode}
              name="countryGuess"
              value={c.name}
              onChange = { (e) => this.setState({ countryGuess: e.target.value })}
            />
            <label for={c.numericCode}>{c.name}</label>
          </div>
        ));
      } else if (guessState === 2) {
        options = <div>Correct! This flag is from {sortCountry.name}</div>;
        button = <button type="submit" onClick={this.nextGame}>NEXT</button>;
      } else {
        options = <div>Incorrect! The correct answer is: {sortCountry.name} </div>;
        button = <button type="submit" onClick={this.nextGame}>NEXT</button>;
      }
      flag = <div className="flagBox"><img src={sortCountry.flag} alt={sortCountry.name}/></div>;
    }
    return (
      <div>
        <NavBar />
        <form onSubmit={this.handleGuess}>
          {options}
          {button}
        </form>
        <br />
        { flag }
      </div>
    );
  }
}

export default GuessingFlagApp;