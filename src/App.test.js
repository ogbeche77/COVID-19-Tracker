/* eslint-disable no-undef */
import React from "react";
import App from "./App";
import { Cards } from "./components";
import { shallow } from "enzyme";

describe("App", () => {
  let appWrapper;
  beforeAll(() => {
    appWrapper = shallow(<App />);
  });

  it("renders App component", () => {});

  it("shows the length of the card component", () => {
    const cards = appWrapper.find(Cards);
    expect(cards).toHaveLength(1);
  });

  it("Check for state", () => {
    const appState = appWrapper.state();

    expect(appState).not.toBeNull();
  });

  it("Check for data propery on state", () => {
    const appState = appWrapper.state();

    expect(appState.data).toBeDefined();
  });

  it("Check that data property is passed to Card component", () => {
    const cards = appWrapper.find(Cards);
    expect(cards.props().data).toEqual(appWrapper.state().data);
  });
});
