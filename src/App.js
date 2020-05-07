import React, { Component } from 'react'
import {Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css';
import { fetchData } from './api';
export class App extends Component {
    state = {
        data: {},
        country: '',
    }



    async componentDidMount() { // async should be before componentDidMount
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData})
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        

        this.setState({ data: fetchedData, country: country});

    }


    render() {
        const {data, country} = this.state;
        
        return (
            <div className={styles.container}>
               <Cards data={data}/>
               <CountryPicker handleCountryChange={this.handleCountryChange}/>
               <Chart data= {data} country={country}/>
            </div>
        )
    }
}

export default App
