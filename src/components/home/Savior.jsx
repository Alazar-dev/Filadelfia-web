import {
  Box,
  Button,
  createStyles,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import Cross from "../../assets/Home/Our Vision/Cross.png";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      background: "#000000 0% 0% no-repeat padding-box",
      textAlign: "center",
      borderRadius: "2px",
    },
    title: {
      fontSize: "30px",
      letterSpacing: "1.5px",
      lineHeight: "28px",
      textAlign: "center",
      paddingBottom: "10px",
    },
    text: {
      fontSize: "18px",
      letterSpacing: "0.54px",
      lineHeight: "41px",
      textAlign: "center",
      color: "#CCCCCC",
    },
    yellowText: {
      color: theme.palette.primary.main,
      letterSpacing: "0.54px",
      lineHeight: "41px",
      fontSize: "18px",
    },
  })
);

function Savior() {
  const classes = useStyles();
  return (
    <Box
      py={5}
      my={2}
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      className={classes.root}
    >
      <Box py={3}>
        <Typography
          color="textSecondary"
          variant="h5"
          className={classes.title}
        >
          JESUS IS OUR SAVIOR
        </Typography>
        <img src={Cross} alt="Cross" />
      </Box>

      <Typography
        className={classes.text}
        variant="body1"
        color="textSecondary"
      >
        And hope does not put us to shame, because God’s love has been poured
        out into our hearts through the Holy Spirit, who has been given to us.
      </Typography>
      <Typography className={classes.yellowText}>Romans 5:5</Typography>
    </Box>
  );
}

export default Savior;
