import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Box, Grid } from "@material-ui/core";
import Cross from "../../../assets/Home/Our Vision/Cross.png";

const useStyles = makeStyles((theme) => ({
  root: {
    lineHeight: "28px",
  },

  cross: {
    alignItems: "center",
    textAlign: "center",
    paddingLeft: "10px",
    display: "flex",
  },
  next: {
    fontStyle: "bold",
    fontSize: "16px",
    letterSpacing: "0.48px",
    textAlign: "left",
  },
  dateNum: {
    fontSize: "30px",
    letterSpacing: "0.9px",
    textAlign: "left",
  },
  date: {
    fontSize: "14px",
    letterSpacing: "0.42px",
    textAlign: "left",
  },
  eventTitle: {
    fontSize: "16px",
    letterSpacing: "0.42px",
    textAlign: "left",
    lineHeight: "21.6px",
    marginBottom: "1em",
  },
  eventDate: {
    fontSize: "20px",
    letterSpacing: "0.6px",
    lineHeight: "19px",
    textAlign: "center",
  },
  eventMonth: {
    fontSize: "12px",
    letterSpacing: "0.36px",
    lineHeight: "19px",
    textAlign: "center",
  },
  dateConf: {
    height: "56px",
    width: "48px",
    paddingTop: "10px",
  },
  yellowText: {
    color: theme.palette.primary.main,
  },
}));

export function EventsCard() {
  const classes = useStyles();

  return (
    <>
      <Box py={5} display="flex">
        <Typography variant="h4">Events </Typography>
        <span className={classes.cross}>
          <img src={Cross} alt="Cross" />
        </span>
      </Box>
      <Box py={5}>
        <Card className={classes.root}>
          <Box bgcolor="secondary.dark" py={3} pl={5}>
            <Typography
              variant="body1"
              color="primary"
              className={classes.next}
            >
              NEXT EVENT IN:
            </Typography>
            <CardMedia>
              <Grid container>
                <Grid item xs={3}>
                  <Typography className={classes.dateNum} color="secondary">
                    521
                  </Typography>
                  <Typography className={classes.date} color="secondary">
                    DAYS
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography className={classes.dateNum} color="secondary">
                    521
                  </Typography>
                  <Typography className={classes.date} color="secondary">
                    HRS
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography className={classes.dateNum} color="secondary">
                    521
                  </Typography>
                  <Typography className={classes.date} color="secondary">
                    MIN
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography className={classes.dateNum} color="secondary">
                    521
                  </Typography>
                  <Typography className={classes.date} color="secondary">
                    SEC
                  </Typography>
                </Grid>
              </Grid>
            </CardMedia>
          </Box>
          <CardContent>
            <Grid container spacing={3}>
              <EventItem />
              <EventItem />
              <EventItem />
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export const EventItem = () => {
  const classes = useStyles();
  return (
    <Grid container item>
      <Grid item xs={2}>
        <Box className={classes.dateConf} bgcolor="secondary.dark">
          <Typography className={classes.eventDate} color="primary">
            23
          </Typography>
          <Typography className={classes.eventMonth} color="primary">
            JAN
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={9}>
        <Typography
          color="textPrimary"
          className={classes.eventTitle}
          variant="body1"
        >
          Phillipisiyos Church Women Yearly Conference
        </Typography>
        <Typography
          color="textPrimary"
          className={classes.date}
          variant="subtitle2"
        >
          Sunday <span className={classes.yellowText}>09:45 am</span> to{" "}
          <span className={classes.yellowText}>01:30pm</span>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default EventsCard;
