import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { Box, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function EventsCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Typography variant="h2">Events</Typography>

      <Box bgcolor="primary.dark">
        <Typography variant="subtitle1" color="secondary">
          NEXT EVENT IN:{" "}
        </Typography>
        <CardMedia>
          <Grid container>
            <Grid item xs={3}>
              <Typography color="primary">521</Typography>
              <Typography color="primary">DAYS</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography color="primary">521</Typography>
              <Typography color="primary">HRS</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography color="primary">521</Typography>
              <Typography color="primary">MIN</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography color="primary">521</Typography>
              <Typography color="primary">SEC</Typography>
            </Grid>
          </Grid>
        </CardMedia>
      </Box>
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <Box bgcolor="primary.dark">
              <Typography color="primary">23</Typography>
              <Typography color="primary">JAN</Typography>
            </Box>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={9}>
            <Typography variant="subtitle2">
              Phillipisiyos Church Women Yearly Conference
            </Typography>
            <Typography color="secondary" variant="subtitle2">
              Sunday 09:45 am to 01:30pm
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <Box bgcolor="primary.dark">
              <Typography color="primary">02</Typography>
              <Typography color="primary">FEB</Typography>
            </Box>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={9}>
            <Typography>New Church Building Fundraising</Typography>
            <Typography color="secondary" variant="subtitle2">
              Sunday 09:45 am to 01:30pm
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <Box bgcolor="primary.dark">
              <Typography color="primary">09</Typography>
              <Typography color="primary">APR</Typography>
            </Box>
          </Grid>
          <Grid item xs={9}>
            <Typography>Second Conference of the Yea</Typography>
            <Typography color="secondary" variant="subtitle2">
              Sunday 09:45 am to 01:30pm
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}