import React, { useState, useEffect } from 'react'; //React Hook
import { NativeSelect, FormControl } from '@material-ui/core'; //Enables us to select a country
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setCountries(await fetchCountries());

        }

        fetchAPI();
    }, []);


    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global </option>
                {countries.map((country, i) => <option key={i} value={country}> {country} </option>)}
            </NativeSelect>

        </FormControl>
    )
}

export default CountryPicker;