import React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import App from "./App";

describe("<App />", () => {
  it("renders without crashing", () => {
    const helpers = render(<App />);
  });

  // it('renders "HEllo World', () => {
  //   const { getByText } = render(<App />);

  //   const text = getByText(/hello world/i);

  //   expect(text).toBeInTheDocument();
  // });

  // it("greets the team", () => {
  //   const { getByText } = render(<App />);

  //   const greetButton = getByText(/greet/i);

  //   fireEvent.click(greetButton);

  //   expect(getByText(/hello world/i)).toBeInTheDocument();
  // });
  // it("renders without crashing", () => {
  //   const div = document.createElement("div");
  //   ReactDOM.render(<App />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });
});
