import React, { Component } from 'react'
import {Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css';
import { fetchData } from './api'; //To call function from index/api.js
import image from './images/image1.jpg';
export class App extends Component {
    state = {
        data: {},
        country: '',
    }


    //async is placed in front of componentDidMount to make it asynchronous ,
    async componentDidMount() { // request to fetch data that has been imported from api.js
        const data = await fetchData();

        this.setState({ data })
    }

    //Method to change country state
    handleCountryChange = async (country) => {
        const data = await fetchData(country);
        

        this.setState({ data, country: country});

    }


    render() {
        const {data, country} = this.state;
        
        return (
            <div className={styles.container}>
            <img className={styles.image} src={image} alt="corona"/>
               <Cards data={data}/>
               <CountryPicker handleCountryChange={this.handleCountryChange}/>
               <Chart data= {data} country={country}/>
            </div>
        )
    }
}

export default App
