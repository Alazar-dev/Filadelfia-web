import {
  Button,
  Box,
  createStyles,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { CloudDownload, Share } from "@material-ui/icons";
import React from "react";
import ListeningGroup from "../../assets/Home/Sermon listening/Group 13.png";

const useStyles = makeStyles((theme) =>
  createStyles({
    left: {
      background: theme.palette.primary.main,
    },
    right: {
      background: theme.palette.secondary.main,
    },
    sermonDate: {
      marginTop: 15,
      marginBottom: 7,
    },
    textRight: {
      textAlign: "right",
    },

    latestSermon: {
      marginBottom: 8,
    },
    controls: {
      alignItems: "center",
    },
    playIcon: {
      height: 38,
      width: 38,
    },
    buttons: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    sermonText: {
      letterSpacing: "0.9px",
      textAlign: "left",
      marginBottom: "1em",
    },
    download: {
      background: theme.palette.primary.main,
    },
    share: {
      background: theme.palette.primary.dark,
      color: theme.palette.primary.light,
      "&:hover": {
        background: theme.palette.primary.dark,
        color: theme.palette.primary.main,
      },
    },
    px3: {
      paddingLeft: `${theme.spacing(3)}px`,
      paddingRight: `${theme.spacing(3)}px`,
      marginRight: `${theme.spacing(3)}px`,
      [theme.breakpoints.down("md")]: { marginBottom: `${theme.spacing(3)}px` },
    },
    py3: {
      paddingBottom: `${theme.spacing(3)}px`,
      paddingTop: `${theme.spacing(3)}px`,
    },
    audio: {
      width: "80%",
    },
  })
);
function LatestSermon() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid className={classes.left} item xs={4}>
        <Box className={classes.textRight} px={3} pt={3}>
          <Typography
            className={classes.latestSermon}
            component="h5"
            variant="h5"
            color="textSecondary"
          >
            LATEST SERMON
          </Typography>
          <img src={ListeningGroup} alt="" />

          <Typography
            className={classes.sermonDate}
            variant="subtitle2"
            color="textSecondary"
          >
            December 15, 16 HEBREWS
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={8} className={classes.right}>
        <Box pt={4} px={3}>
          <Typography component="p" className={classes.sermonText}>
            In These Last Days, God Has Spoken by a Son
          </Typography>
          <Box display="flex" flexWrap="wrap">
            <Button
              startIcon={<CloudDownload />}
              className={classes.download + " " + classes.px3}
              variant="contained"
            >
              <Typography color="textSecondary">Download audio</Typography>
            </Button>
            <Button
              startIcon={<Share />}
              variant="contained"
              className={classes.px3 + " " + classes.share}
            >
              <Typography color="textSecondary">Share</Typography>
            </Button>
          </Box>
          <Box py={3}>
            <audio
              className={classes.audio}
              controls
              src="https://sampleswap.org/samples-ghost/MELODIC%20LOOPS/GUITAR%20LOOPS/916[kb]090_funk-rhythm-guitar.wav.mp3"
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default LatestSermon;
