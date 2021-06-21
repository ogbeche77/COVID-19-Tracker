import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styled from "styled-components";
import { fetchCountries } from "../../api";

const FormControlWrapper = styled.div`
  margin-bottom: 5px;
`;

const CountryPicker = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <FormControlWrapper>
      <FormControl>
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value="">Global </option>
          {countries.map((country, i) => (
            <option key={i} value={country}>
              {" "}
              {country}{" "}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </FormControlWrapper>
  );
};

export default CountryPicker;
