import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    const { strike, ball, foul, hit } = this.props;
    return (
      <>
        <h1>Dashboard</h1>
        <button data-testid="strikes" onClick={strike}>
          Strike
        </button>
        <button data-testid="balls" onClick={ball}>
          Ball
        </button>
        <button data-testid="foul" onClick={foul}>
          Foul
        </button>
        <button data-testid="hit" onClick={hit}>
          Hit
        </button>
      </>
    );
  }
}

export default Dashboard;
