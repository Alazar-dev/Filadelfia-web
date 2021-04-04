import {
  Box,
  Container,
  createStyles,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import BellIcon from "../../assets/Home/Bell_icon.png";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
    sunday: {
      background: `${theme.palette.secondary.dark} 0% 0% no-repeat padding-box`,
    },
    sundayTitle: {
      fontSize: "16px",
      letterSpacing: "0.48px",
    },
    sundayText: {
      fontSize: "24px",
      letterSpacing: "0.72px",
      lineHeight: "32px",
    },
    other: {
      background: `${theme.palette.primary.main} 0% 0% no-repeat padding-box`,
    },
    otherTitle: {
      fontSize: "22px",
      lineHeight: "40px",
    },
    otherText: {
      fontSize: "14px",
      letterSpacing: "0.42px",
      lineHeight: "28px",
    },
    yellowText: {
      color: theme.palette.primary.main,
    },
  })
);
function Services() {
  const classes = useStyles();
  return (
    <Container>
      <Box py={5}>
        <Grid container spacing={3} direction="row">
          <Grid md={6} item>
            <Box py={4} px={3} className={classes.sunday}>
              <Box py={2} display="flex" flexDirection="row">
                <Typography
                  variant="body1"
                  className={classes.sundayTitle}
                  color="textSecondary"
                >
                  SUNDAY SERVICE{" "}
                </Typography>
                <Typography
                  align="right"
                  variant="body1"
                  className={classes.sundayTitle}
                  color="textSecondary"
                >
                  (29 Jan 2020)
                </Typography>
              </Box>
              <Box display="flex" flexDirection="row">
                <Typography
                  color="textSecondary"
                  className={classes.sundayText}
                  variant="body1"
                  align="left"
                >
                  SUNDAY <span className={classes.yellowText}>9:00AM </span>
                  TO <span className={classes.yellowText}>12:00PM </span>@ Bole
                  Michael, Addis Ababa Ethiopia
                </Typography>
                <img src={BellIcon} alt="Bell Icon" />
              </Box>
            </Box>
          </Grid>
          <Grid md={3} item>
            <Box py={5} px={3} className={classes.other}>
              <Typography
                color="textSecondary"
                className={classes.otherTitle}
                variant="h4"
                align="left"
              >
                MEMBERSHIP
              </Typography>

              <Typography
                align="left"
                color="textSecondary"
                className={classes.otherText}
                variant="body1"
              >
                Phillipisiyos Church is a healing, prophetic church all about
                giving the gifts of Jesus to God's people.
              </Typography>
            </Box>
          </Grid>
          <Grid md={3} item>
            <Box py={5} px={3} className={classes.other}>
              <Typography
                color="textSecondary"
                className={classes.otherTitle}
                variant="h4"
                align="left"
              >
                FELLOWSHIP
              </Typography>

              <Typography
                color="textSecondary"
                className={classes.otherText}
                variant="body1"
                align="left"
              >
                Phillipisiyos Church is a healing, prophetic church all about
                giving the gifts of Jesus to God's people.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Services;
