import React from 'react';
import styles from './Cards.module.css';
import { Card, CardContent, Typography, Grid} from '@material-ui/core'; //used for creating the cards
import CountUp from 'react-countup'; //animation counting
import cx from 'classnames';

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate} }) => {
    if(!confirmed) { //To check if data isn't yet fetched from api
        return 'Loading....'

    }
    return (
        <div className={styles.container}>
        <Grid container spacing={3} justify="center">
        <Grid item component= {Card} xs={12} md={3} className={cx(styles.card, styles.infected)}> {/*responsiveness*/}
        <CardContent>
        <Typography color="textSecondary" gutterBottom> Infected</Typography>
    <Typography variant="h5">
    <CountUp start={0}
    end={confirmed.value}
    duration={2.2}
    separator=","
    />
    </Typography> {/*.value as named in the api*/}
        <Typography color="textSecondary">{new Date (lastUpdate).toDateString()}</Typography>
        <Typography variant="body2">Number of Covid-19 active cases</Typography>
        </CardContent>
        </Grid>

        <Grid item component= {Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}> {/*responsiveness*/}
        <CardContent>
        <Typography color="textSecondary" gutterBottom> Recovered</Typography>
        <Typography variant="h5">
        <CountUp start={0}
    end={recovered.value}
    duration={2.2}
    separator=","
    /></Typography>
    <Typography color="textSecondary">{new Date (lastUpdate).toDateString()}</Typography>
        <Typography variant="body2">Number of Recovered Covid-19 patients</Typography>
        </CardContent>
        </Grid>

        <Grid item component= {Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}> {/*responsiveness*/}
        <CardContent>
        <Typography color="textSecondary" gutterBottom> Deaths</Typography>
        <Typography variant="h5">
        <CountUp start={0}
    end={deaths.value}
    duration={2.2}
    separator=","
    /></Typography>
        <Typography color="textSecondary">{new Date (lastUpdate).toDateString()}</Typography>
        <Typography variant="body2">Number of Covid-19 related deaths</Typography>
        </CardContent>
        </Grid>

        </Grid>
        
        </div>
    )
}

export default Cards;