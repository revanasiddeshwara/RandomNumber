import { Component } from "react";
import "./App.css";

class App extends Component {
  state = { count: 0, guessedNum: false };

  subscribe = () => {
    const { count } = this.state;
    const getRandomNumber = Math.ceil(Math.random() * 100);
    this.setState({
      count: getRandomNumber
    });
  };

  guessedNumber = (event) => {
    const { count, guessedNum } = this.state;
    const value = event.target.value;
    if (value == count) {
      this.setState((prevState) => ({
        guessedNum: !prevState.guessedNum
      }));
    }
  };

  render() {
    const { count ,guessedNum} = this.state;
    return (
      <div className="app">
        <h1 className="heading1">Random Number</h1>
        <button type="button" onClick={this.subscribe}>
          Generate
        </button>
        <p className="number">{count}</p>
        <input
          placeholder="Enter the guessed Number"
          type="text"
          onChange={this.guessedNumber}
        />
        <p>{guessedNum && "Gueesd Number is correct"}</p>
      </div>
    );
  }
}

export default App;
