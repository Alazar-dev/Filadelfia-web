import {
  Box,
  createStyles,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import ContactTitle from "./ContactTitle";
import Logo from "../../assets/Footer/Logo.png";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
    logoBox: {
      background: "#5D5D5D 0% 0% no-repeat padding-box;",
      textAlign: "center",
    },
    yellowText: {
      color: theme.palette.primary.main,
      letterSpacing: "0.48px",
    },
    text: {
      fontSize: "16px",
      letterSpacing: "0.48px",
      lineHeight: "32px",
      textAlign: "left",
      color: "#999999",
    },
    title: {
      fontSize: "20px",
      letterSpacing: "0.6px",
      lineHeight: "28px",
      textAlign: "left",
      fontWeight: "bold",
    },
  })
);

function ContactAddress() {
  const classes = useStyles();
  return (
    <Grid item lg={4}>
      <ContactTitle title="ADDRESS" />
      <Box py={3} className={classes.logoBox}>
        <img src={Logo} alt="Logo" />
      </Box>
      <Box py={2}>
        <Typography
          className={classes.text}
          align="left"
          variant="body1"
          color="textSecondary"
        >
          Saturday
          <span className={classes.yellowText}>08: 00 </span> to{" "}
          <span className={classes.yellowText}>01: 00 </span> pm
        </Typography>
        <Typography
          className={classes.text}
          align="left"
          variant="body1"
          color="textSecondary"
        >
          Saturday
          <span className={classes.yellowText}>08: 00 </span> to{" "}
          <span className={classes.yellowText}>01: 00 </span> pm
        </Typography>
      </Box>
      <Typography className={classes.title} variant="h4">
        CONTACT HERE
      </Typography>
      <Box py={2}>
        <Typography variant="body2" className={classes.text}>
          Bole Michael, infront of Miachel Church, Addis Ababa Ethiopia
        </Typography>
      </Box>
      <Box pb={5}>
        <Typography variant="body2" className={classes.text}>
          P: (+251) 912-345 678 <br /> (+251) 912-345 678 <br />
          E: info@PhillipisiyosChurch.com
        </Typography>
      </Box>
    </Grid>
  );
}

export default ContactAddress;
