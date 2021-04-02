import {
  Box,
  Button,
  Container,
  createStyles,
  makeStyles,
  Typography,
  withStyles,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import React from "react";

import Hero from "../../assets/Home/Hero Image/img1.jpg";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      [theme.breakpoints.up("md")]: {
        height: "583px",
      },
      maxHeight: "100%",
      maxWidth: "100%",
      objectFit: "contain",
      backgroundSize: "cover !important",
    },
    textDiv: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "inherit",
    },
    coverText: {
      textAlign: "left",
      letterSpacing: "5px",
      textShadow: "0px 2px 0px #0101011C;",
      fontSize: "45px",
      fontWeight: "bold",
    },
    leftBox: {
      width: "30%",
    },
  })
);

function CoverImage() {
  const classes = useStyles();
  return (
    <div>
      <FiCard className={classes.root}>
        <FiCardMedia
          media="picture"
          alt="Contemplative Reptile"
          image={Hero}
          title="Contemplative Reptile"
        />
        <FiCardContent className={classes.textDiv}>
          <Box>
            <Typography
              className={classes.coverText}
              gutterBottom
              variant="h5"
              component="h2"
              color={"primary"}
            >
              JESUS
            </Typography>
            <Typography
              className={classes.coverText}
              gutterBottom
              variant="h5"
              component="h2"
              color={"textSecondary"}
            >
              LIVES IN OUR HEART
            </Typography>
            <Typography variant="body2" component="p">
              dive deeper into the faith
            </Typography>
            <FiCardActions>
              <Button
                size="small"
                color="textPrimary"
                backgroundColor="primary"
                variant="contained"
              >
                Join us now
              </Button>
            </FiCardActions>
          </Box>

          <Box className={classes.leftBox}></Box>
        </FiCardContent>
      </FiCard>
    </div>
  );
}

export const FiCard = withStyles({
  root: {
    position: "relative",
  },
})(Card);

export const FiCardActionArea = withStyles({
  root: {
    position: "relative",
  },
})(CardActionArea);

export const FiCardActions = withStyles({
  root: {
    position: "relative",
  },
})(CardActions);

export const FiCardContent = withStyles({
  root: {
    position: "relative",
    backgroundColor: "transparent",
  },
})(CardContent);

export const FiCardMedia = withStyles({
  root: {
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    width: "100%",
  },
})(CardMedia);

export default CoverImage;
