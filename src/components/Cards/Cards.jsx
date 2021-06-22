import React from "react";
import styled from "styled-components";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";

import {
  cyInfectedDashBoard,
  cyRecoveredDashBoard,
  cyDeathDashBoard,
} from "../../handles/index.js";

const Container = styled.div`
  margin: 50px 0;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InfectedWrapper = styled.div`
  border-bottom: 12px solid rgba(111, 166, 232);
`;
const RecoveredWrapper = styled.div`
  border-bottom: 12px solid rgba(133, 242, 131);
`;

const DeathWrapper = styled.div`
  border-bottom: 12px solid rgba(97, 21, 29);
`;

const Cards = (props) => {
  const {
    data: { confirmed, recovered, deaths, lastUpdate },
  } = props;
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
            </DeathWrapper>
          </Grid>
        </CardWrapper>
      </Grid>
    </Container>
  );
};

export default Cards;
