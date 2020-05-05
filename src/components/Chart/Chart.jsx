import React, {useState, useEffect} from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = () => {
    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        } 

        fetchAPI();

    });

    const lineChart = (
        dailyData[0] ? (
        <Line
        data={{
        labels:dailyData(({date})=> date),
        datasets: [{
            data: dailyData(({confirmed})=> confirmed),
            labels: "Infected",
            borderColor: "#333ff",
            fill: true,
        }, 
        {
            data: dailyData(({deaths})=> deaths),
            labels: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(0, 0, 0)",
            fill: true,
        }],
    }}
        />) : null 
    );
    return (
        <div className={styles.container}>
        {lineChart}
        </div>
    )
}

export default Chart;