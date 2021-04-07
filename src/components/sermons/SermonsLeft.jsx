import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Pagination } from "@material-ui/lab";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Box, Grid, Container } from "@material-ui/core";
import headerImg from "../../assets/Sermons/Sermon.jpg";
import ImgSupermacy from "../../assets/Sermons/placeholder1.png";
import {GiCurledLeaf as Leaf} from "react-icons/all"
const useStyles = makeStyles((theme) => ({
  root: {
    lineHeight: "28px",
    background: `url(${headerImg})`,
    [theme.breakpoints.up("lg")]: {
      height: "256px",
    },

    width: "100%",
    objectFit: "contain",
    backgroundSize: "100% 100% !important",
  },
  textDiv: {
    paddingTop: "9rem",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "20px",
    },
    paddingLeft: "132px",
  },
  coverText: {
    textAlign: "left",
    fontSize: "20px",
    width: "273px",
    height: "24px",
    margineTop: "399px",
    margineLeft: "375px",
  },
  smallText: {
    width: "206px",
    height: "12px",
    textAlign: "center",
  },
}));

function EventLeft() {
  const classes = useStyles();
  return (
    <Grid item md={8}>
      <Box py={5}>
        <Box className={classes.root}>
          <Container>
            <Box flexDirection="row">
              <Box className={classes.textDiv}>
                <Typography
                  className={classes.coverText}
                  gutterBottom
                  color="secondary"
                >
                  BELIEVE SERMON SERIES
                </Typography>
                <Typography
                  className={classes.smallText}
                  gutterBottom
                  variant="subtitle2"
                  color="secondary"
                >
                  <Leaf /> BASED ON YOUR LIFE <Leaf /> 
                </Typography>
              </Box>
            </Box>
          </Container>
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
                    <Box
                      p={1}
                      display="flex"
                      variant="subtitle2"
                      color="textSecondary"
                    >
                      <Typography variant="caption" color="primary">
                        Category:
                      </Typography>{" "}
                      Global Outreach{" "}
                      <Typography variant="caption" color="primary">
                        Speaker:
                      </Typography>{" "}
                      Pastor Abebe Kebede
                    </Box>
                  </CardContent>
                </div>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default EventLeft;
