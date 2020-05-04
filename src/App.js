import React, { Component } from 'react'

import {Cards, Chart, CountryPicker} from './components'
export class App extends Component {
    render() {
        return (
            <div>
               <Cards/>
               <CountryPicker/>
               <Chart/>
            </div>
        )
    }
}

export default App
