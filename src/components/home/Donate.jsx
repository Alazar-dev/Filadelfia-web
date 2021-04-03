import {
  Box,
  Button,
  createStyles,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      background: "#252525 0% 0% no-repeat padding-box",
      textAlign: "center",
      borderRadius: "2px",
    },
    text: {
      fontSize: "25px",
      lineHeight: "43px",
    },
    yellowText: {
      color: theme.palette.primary.main,
      letterSpacing: "1.25px",
    },
    donate: {
      background: theme.palette.primary.main,
      color: theme.palette.text.secondary,
      marginLeft: theme.spacing(3),
    },
  })
);

function Donate() {
  const classes = useStyles();
  return (
    <Box
      py={5}
      display="flex"
      justifyContent="center"
      alignItems="center"
      className={classes.root}
    >
      <Typography
        className={classes.text}
        variant="body1"
        color="textSecondary"
      >
        Your prayers and <span className={classes.yellowText}>gifts fuel </span>{" "}
        this ministry and
        <span className={classes.yellowText}>impact lives </span>
        every day.
      </Typography>
      <Button className={classes.donate}>Donate Now</Button>
    </Box>
  );
}

export default Donate;
