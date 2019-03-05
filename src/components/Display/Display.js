import React from "react";

const Display = props => {
  const { state } = props;
  return (
    <>
      <h1 data-testid="strikes">{state.strikes}</h1>
      <h1 data-testid="balls">{state.balls}</h1>
    </>
  );
};

export default Display;
