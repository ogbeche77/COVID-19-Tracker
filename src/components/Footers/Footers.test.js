/* eslint-disable no-undef */
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import React from "react";
import Footers from "./Footers";

test("matches snapshot", () => {
  const wrapper = shallow(<Footers />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
