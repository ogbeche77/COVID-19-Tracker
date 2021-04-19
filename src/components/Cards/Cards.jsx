import React from "react";
import styles from "./Cards.module.css";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import {
  cyInfectedDashBoard,
  cyRecoveredDashBoard,
  cyDeathDashBoard,
} from "../../handles/index.js";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Page Loading...";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          {" "}
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {" "}
              Infected
            </Typography>
            <Typography variant="h5">
              <div data-cy={cyInfectedDashBoard}>
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={2.2}
                  separator=","
                />
              </div>
            </Typography>{" "}
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of Covid-19 active cases
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          {" "}
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {" "}
              Recovered
            </Typography>
            <Typography variant="h5">
              <div data-cy={cyRecoveredDashBoard}>
                <CountUp
                  start={0}
                  end={recovered.value}
                  duration={2.2}
                  separator=","
                />
              </div>
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of Recovered Covid-19 patients
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          {" "}
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {" "}
              Deaths
            </Typography>
            <Typography variant="h5">
              <div data-cy={cyDeathDashBoard}>
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={2.2}
                  separator=","
                />
              </div>
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of Covid-19 related deaths
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
