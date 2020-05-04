import React from 'react';
import styles from './Cards.module.css';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup'; //animation counting

const Cards = ( {data: {confirmed, recovered, deaths, lastUpdate} }) => {
    if(!confirmed) {
        return 'Loading....'

    }
    return (
        <div className={styles.container}>
        <Grid container spacing={3} justify="center">
        <Grid item component= {Card}>
        <CardContent>
        <Typography color="textSecondary" gutterBottom> Infected</Typography>
    <Typography variant="h5">
    <CountUp start={0}
    end={confirmed.value}
    duration={2.2}
    separator=","
    />
    </Typography> {/*.value as named in the api*/}
        <Typography color="textSecondary">Our Date</Typography>
        <Typography variant="body2">Number of Covid-19 active cases</Typography>
        </CardContent>
        </Grid>

        <Grid item component= {Card}>
        <CardContent>
        <Typography color="textSecondary" gutterBottom> Recovered</Typography>
        <Typography variant="h5">
        <CountUp start={0}
    end={recovered.value}
    duration={2.2}
    separator=","
    /></Typography>
        <Typography color="textSecondary">Our Date</Typography>
        <Typography variant="body2">Number of Recovered Covid-19 patients</Typography>
        </CardContent>
        </Grid>

        <Grid item component= {Card}>
        <CardContent>
        <Typography color="textSecondary" gutterBottom> Deaths</Typography>
        <Typography variant="h5">
        <CountUp start={0}
    end={deaths.value}
    duration={2.2}
    separator=","
    /></Typography>
        <Typography color="textSecondary">Our Date</Typography>
        <Typography variant="body2">Number of Covid-19 related deaths</Typography>
        </CardContent>
        </Grid>

        </Grid>
        
        </div>
    )
}

export default Cards;