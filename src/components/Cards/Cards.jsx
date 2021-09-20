import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import {
  Container,
  CardWrapper,
  InfectedWrapper,
  RecoveredWrapper,
  DeathWrapper,
} from "./Cards.elements";
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
    <Container>
      <Grid container spacing={3} justify="center">
        <CardWrapper>
          <Grid item component={Card} xs={12} md={3}>
            <InfectedWrapper>
              {" "}
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {" "}
                  Infectededed
                </Typography>
                <Typography variant="h5">
                  <div data-cy={cyInfectedDashBoard}>
                    {new Intl.NumberFormat().format(confirmed.value)}
                  </div>
                </Typography>{" "}
                <Typography color="textSecondary">
                  {new Date(lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body2">
                  Number of Covid-19 active cases
                </Typography>
              </CardContent>
            </InfectedWrapper>
          </Grid>

          <Grid item component={Card} xs={12} md={3}>
            <RecoveredWrapper>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {" "}
                  Recovered
                </Typography>
                <Typography variant="h5">
                  <div data-cy={cyRecoveredDashBoard}>
                    {new Intl.NumberFormat().format(recovered.value)}
                  </div>
                </Typography>
                <Typography color="textSecondary">
                  {new Date(lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body2">
                  Number of Recovered Covid-19 patients
                </Typography>
              </CardContent>
            </RecoveredWrapper>
          </Grid>

          <Grid item component={Card} xs={12} md={3}>
            <DeathWrapper>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {" "}
                  Deaths
                </Typography>
                <Typography variant="h5">
                  <div data-cy={cyDeathDashBoard}>
                    {new Intl.NumberFormat().format(deaths.value)}
                  </div>
                </Typography>
                <Typography color="textSecondary">
                  {new Date(lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body2">
                  Number of Covid-19 related deaths
                </Typography>
              </CardContent>
            </DeathWrapper>
          </Grid>
        </CardWrapper>
      </Grid>
    </Container>
  );
};

export default Cards;
