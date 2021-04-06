import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Pagination } from "@material-ui/lab";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Box, Grid } from "@material-ui/core";
import headerImg from "../../assets/Sermons/Sermon.jpg";
import ImgSupermacy from "../../assets/Sermons/placeholder1.png";


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
          <img className={classes.image} src={headerImg} alt="Sermons" />
        </Box>
        <Box>
          <Grid container justify="center" spacing={4}>
            <EventItem />
            <EventItem />
            <EventItem />
            <EventItem />
          </Grid>
        </Box>
        <Box display="flex" justifyContent="center" py={5}>
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
            <Grid item xs={10} md={10}>
              <Box className={classes.sermonBox} display="flex">
                <img src={ImgSupermacy} alt="" />
                <div>
                  <CardContent>
                    <Typography variant="body2">
                      THE AWESOME TEACH OF COMPASSION OF GOD IN JONAH GOD'S
                      GREATEST GIFT
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      <Typography variant="caption" color="primary">
                        Category:
                      </Typography>{" "}
                      Global Outreach{" "}
                      <Typography variant="caption" color="primary">
                        Speaker:
                      </Typography>{" "}
                      Pastor Abebe Kebede
                    </Typography>
                  </CardContent>
                </div>
              </Box>
            </Grid>
            {/* <Grid className={classes.itemButton} item md={1}>
              <Button className={classes.button}>More</Button>
            </Grid> */}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default EventLeft;
