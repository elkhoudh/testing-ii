import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Display from "./components/Display/Display";

class App extends Component {
  state = {
    strikes: 0,
    balls: 0,
    hit: 0,
    foul: 0
  };

  strike = () => {
    const { strikes, balls } = this.state;

    if (strikes < 3 && balls < 4) {
      this.setState({ strikes: strikes + 1 });
    } else {
      this.setState({ strikes: 0 });
    }
  };

  ball = () => {
    const { strikes, balls } = this.state;

    if (strikes < 3 && balls < 4) {
      this.setState({ balls: balls + 1 });
    } else {
      this.setState({ balls: 0 });
    }
  };

  foul = () => {
    if (this.state.strikes < 2) {
      this.setState({ foul: this.state.foul + 1 });
    }
  };

  hit = () => {
    this.setState({ balls: 0, strikes: 0, hit: this.state.hit + 1 });
  };

  render() {
    return (
      <div className="App">
        <Dashboard
          strike={this.strike}
          ball={this.ball}
          foul={this.foul}
          hit={this.hit}
        />
        <Display state={this.state} />
      </div>
    );
  }
}

export default App;
