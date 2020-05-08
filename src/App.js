import React, { Component } from 'react'
import {Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css';
import { fetchData } from './api';
import image from './images/image1.jpg';
export class App extends Component {
    state = {
        data: {},
        country: '',
    }



    async componentDidMount() { // async should be before componentDidMount
        const data = await fetchData();

        this.setState({ data })
    }

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
