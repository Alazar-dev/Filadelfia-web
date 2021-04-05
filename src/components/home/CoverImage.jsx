import {
  Box,
  Button,
  Container,
  createStyles,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import Hero from "../../assets/Home/Hero Image/img1.jpg";
import { ReactComponent as Cross } from "../../assets/Home/Hero Image/cross.svg";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      [theme.breakpoints.up("lg")]: {
        height: "80vh",
      },

      maxHeight: "100%",
      maxWidth: "100%",
      objectFit: "contain",
      background: `url(${Hero})`,
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
      letterSpacing: "5px",
      textShadow: "0px 2px 0px #0101011C;",
      fontSize: "43px",
      fontWeight: "700",
      zIndex: 999,
      lineHeight: "52px",
    },
    smallText: {
      letterSpacing: "13.9px",
      textAlign: "left",
    },
    joinButton: {
      background: "black",
    },
    cross: {
      paddingLeft: "2rem",
    },
  })
);

function CoverImage() {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Container>
        <Box flexDirection="row" alignItems="center">
          <Box className={classes.textDiv}>
            <Box>
              <Typography
                className={classes.coverText}
                gutterBottom
                color={"primary"}
              >
                JESUS <Cross className={classes.cross} />
              </Typography>
              <Typography
                className={classes.coverText}
                gutterBottom
                color={"textSecondary"}
              >
                LIVES IN OUR HEART
              </Typography>
              <Typography
                className={classes.smallText}
                gutterBottom
                variant="subtitle2"
                color="textPrimary"
              >
                dive deeper into the faith
              </Typography>
            </Box>
            <Box py={4}>
              <Button
                component={Link}
                to="/contact"
                color={"secondary"}
                className={classes.joinButton}
              >
                Join Us Now
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  );
}
export default CoverImage;
