import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Pagination } from "@material-ui/lab";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Box, Grid } from "@material-ui/core";
import Img from "../../assets/Sermon Details/img.png";
import SermonAudio from "./SermonAudio";
import SocialLinks from "./SocilalLinks";

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

function SermonsDetailLeft() {
  const classes = useStyles();
  return (
    <Grid item md={8}>
      <Box py={5}>
        <Box py={2}>
          <SermonAudio />
        </Box>
        <Box>
          <Grid container justify="center" spacing={4}>
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
              <Box className={classes.sermonBox}>
                <img src={Img} alt="" />
                <div>
                  <CardContent>
                    <Typography variant="body2">
                      it is with the supremacy of Christ in your life. All the
                      planets of your life ??? your sexuality and desires, your
                      commitments and beliefs, your aspirations and dreams, your
                      attitudes and convictions, your habits and disciplines,
                      your solitude and relationships, your labor and leisure,
                      your thinking and feeling ??? all the planets of your life
                      are held in orbit by the greatness and gravity and blazing
                      brightness of the supremacy of Jesus Christ at the center
                      of your life. And if he ceases to be the bright, blazing,
                      satisfying beauty at the center of your life, the planets
                      will fly into confusion, and a hundred things will be out
                      of control, and sooner or later they will crash into
                      destruction.
                    </Typography>
                    <Box p={5}>
                      <Typography color="primary" align="center">
                        ???If Jesus ceases to be the center of your life, all will
                        crash into destruction.???
                      </Typography>
                    </Box>
                    <Typography variant="body2">
                      We were made to see and savor with everlasting
                      satisfaction the supremacy of Christ. Our sexuality points
                      to this and our sexuality is purified by this. We are
                      sexual beings that we may know something more of the
                      supremacy of Christ. And we must know the supremacy of
                      Christ ??? we must know him in his supremacy ??? in order to
                      experience our sexuality as sacred and sweet and
                      Christ-exalting ??? and secondary, quietly, powerfully
                      secondary.
                    </Typography>
                  </CardContent>
                  <Box alignContent="right">
                    <SocialLinks />
                  </Box>
                </div>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SermonsDetailLeft;
