import {
  Button,
  Box,
  createStyles,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { CloudDownload, Share, Notes } from "@material-ui/icons";
import React from "react";

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
      <Grid item xs={12} className={classes.right}>
        <Box bgcolor="secondary.dark" pt={4} px={3}>
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
              startIcon={<Notes />}
              variant="contained"
              className={classes.px3 + " " + classes.share}
            >
              <Typography color="textSecondary">Notes</Typography>
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
