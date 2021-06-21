import React from "react";
import { shallow } from "enzyme";
import Cards from "./Cards";
import { CardContent, Typography, Grid } from "@material-ui/core";

describe("Card Component", () => {
  const cardProps = {
    data: {
      confirmed: 10,
      recovered: 5,
      deaths: 2,
      lastUpdate: "today",
    },
  };

  let cardComponent;
  beforeAll(() => {
    cardComponent = shallow(<Cards {...cardProps} />);
  });

  it("renders Grid element in card component", () => {
    const cardGrid = cardComponent.find(Grid);
    expect(cardGrid).toHaveLength(4);
  });
  it("renders Typography element in card component", () => {
    const cardTypography = cardComponent.find(Typography);
    expect(cardTypography).toHaveLength(12);
  });
  it("renders CardContent element in card component", () => {
    const cardCardContent = cardComponent.find(CardContent);
    expect(cardCardContent).toHaveLength(3);
  });
});
