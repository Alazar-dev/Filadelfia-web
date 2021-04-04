import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import EventsCard from "./Events";
import LatestSermonsCards from "./LatestSermon";

function SermonEvents() {
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <LatestSermonsCards />
        </Grid>
        <Grid item xs={12} md={5}>
          <EventsCard />
        </Grid>
      </Grid>
    </Container>
  );
}

export default SermonEvents;
