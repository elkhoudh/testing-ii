import React from "react";
import { render, fireEvent } from "react-testing-library";
import Dashboard from "./Dashboard";
import "jest-dom/extend-expect";
const mockCallBack = jest.fn();

describe("<Dashboard />", () => {
  it("should check if hit was clicked", () => {
    const { getByTestId } = render(<Dashboard hit={mockCallBack} />);
    const hitButton = getByTestId("hit");
    fireEvent.click(hitButton);
    expect(mockCallBack).toHaveBeenCalled();
    // expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it("should check if strikes was clicked", () => {
    const { getByTestId } = render(<Dashboard strike={mockCallBack} />);
    const strikesButton = getByTestId("strikes");
    fireEvent.click(strikesButton);
    expect(mockCallBack).toHaveBeenCalled();
    // expect(strikeMock.mock.calls.length).toEqual(1);
  });

  it("should check if balls was clicked", () => {
    const { getByTestId } = render(<Dashboard ball={mockCallBack} />);
    const ballsButton = getByTestId("balls");
    fireEvent.click(ballsButton);
    expect(mockCallBack).toHaveBeenCalled();
    // expect(strikeMock.mock.calls.length).toEqual(1);
  });

  it("should check if foul was clicked", () => {
    const { getByTestId } = render(<Dashboard foul={mockCallBack} />);
    const foulButton = getByTestId("foul");
    fireEvent.click(foulButton);
    expect(mockCallBack).toHaveBeenCalled();
    // expect(strikeMock.mock.calls.length).toEqual(1);
  });
});
