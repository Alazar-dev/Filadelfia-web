import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Pagination } from "@material-ui/lab";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Box, Button, Grid } from "@material-ui/core";
import Event from "../../assets/Events/Event.jpg";
import { AccessTime, LocationOn } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    lineHeight: "28px",
  },
  button: {
    background: theme.palette.secondary.dark,
    color: theme.palette.primary.light,

    float: "right",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  icons: {
    marginRight: "10px",
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
    color: "#999999",
    display: "flex",
    alignItems: "center",
    paddingLeft: "10px",
  },
  eventTitle: {
    fontSize: "16px",
    letterSpacing: "0.42px",
    textAlign: "left",
    lineHeight: "21.6px",
    marginBottom: "0.3em",
    paddingLeft: "15px",
    color: "#999999",
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
    paddingTop: "10px",
  },
  yellowText: {
    color: theme.palette.primary.main,
  },
  itemButton: {
    display: "flex",
    alignItems: "flex-end",
  },
  paginate: {
    background: theme.palette.secondary.main,
    maxWidth: "fit-content",
  },
}));

function EventLeft() {
  const classes = useStyles();
  return (
    <Grid item md={8}>
      <Box py={5}>
        <Box py={2}>
          <img className={classes.image} src={Event} alt="events coming" />
        </Box>
        <Box>
          <Grid container spacing={4}>
            <EventItem />
            <EventItem />
            <EventItem />
            <EventItem />
          </Grid>
        </Box>
        <Box py={5}>
          <Pagination
            color="primary"
            count={10}
            variant="outlined"
            shape="rounded"
            className={classes.paginate}
          />
        </Box>
      </Box>
    </Grid>
  );
}

export const EventItem = () => {
  const classes = useStyles();
  return (
    <Grid item md={12}>
      <Card>
        <CardContent>
          <Grid container>
            <Grid item xs={1} md={1}>
              <Box className={classes.dateConf} bgcolor="secondary.dark">
                <Typography className={classes.eventDate} color="primary">
                  23
                </Typography>
                <Typography className={classes.eventMonth} color="primary">
                  JAN
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={10} md={10}>
              <Typography className={classes.eventTitle} variant="body1">
                Phillipisiyos Church Women Yearly Conference
              </Typography>
              <Typography className={classes.date} variant="subtitle2">
                <AccessTime className={classes.icons} /> Sunday
                <span className={classes.yellowText}>09:45 am</span> to{" "}
                <span className={classes.yellowText}>01:30pm</span>
              </Typography>
              <Typography className={classes.date} variant="subtitle2">
                <LocationOn className={classes.icons} /> Bole Michael, infront
                of Miachel Church
              </Typography>
            </Grid>
            <Grid className={classes.itemButton} item md={1}>
              <Button className={classes.button}>More</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default EventLeft;
