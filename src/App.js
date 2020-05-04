import React, { Component } from 'react'
import {Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css';
import { fetchData } from './api';
export class App extends Component {

    async componentDidMount() { // async should be before componentDidMount
        const data = await fetchData();

        console.log(data);
    }


    render() {
        return (
            <div className={styles.container}>
               <Cards/>
               <CountryPicker/>
               <Chart/>
            </div>
        )
    }
}

export default App
