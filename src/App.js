import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styled from "styled-components";
import { fetchData } from "./api";
import image from "./images/image1.jpg";
import Footers from "./components/Footers/Footers";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-attachment: fixed;
  ${() => `background-image: linear-gradient(
    to bottom,
    rgb(114, 114, 186),
    rgb(170, 232, 232)
  )`}
`;

const ImageWrapper = styled.div`
  width: 400px;
  margin-top: 14px;
`;

export class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <Container>
        <ImageWrapper>
          <img src={image} alt="corona" />
        </ImageWrapper>

        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <Footers />
      </Container>
    );
  }
}

export default App;
