import React from "react";
import { render, fireEvent } from "react-testing-library";
import Display from "./Display";
import "jest-dom/extend-expect";
const state = { strikes: 0, balls: 0, hit: 0, foul: 0 };
describe("<Display />", () => {
  it("checks rendered scors", () => {
    const { getByText } = render(<Display state={state} />);
    const number = getByText(/0/i);

    expect(number).toBeInTheDocument();
  });

  it("balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls", () => {
    const { getByTestId } = render(<Display state={state} />);
    const balls = Number(getByTestId("balls").textContent);
    const strikes = Number(getByTestId("strikes").textContent);
    expect(balls).toBeLessThan(3);
    expect(strikes).toBeLessThan(4);
  });
});
