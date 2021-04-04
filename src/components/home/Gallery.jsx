import {
  Box,
  Button,
  Container,
  createStyles,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import img3 from "../../assets/Gallery/img-3.png";
import img4 from "../../assets/Gallery/img-4.png";
import img5 from "../../assets/Gallery/img-5.png";
import img6 from "../../assets/Gallery/img6.png";
import img7 from "../../assets/Gallery/img-7.png";
import img8 from "../../assets/Gallery/img-8.png";
import GroupCross from "../../assets/Home/Our Vision/Group 14.png";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      background: theme.palette.secondary.main,
    },
    title: {
      fontSize: "30px",
      letterSpacing: "1.5px",
      fontStyle: "bold",
    },
    buttonText: {
      fontSize: "16px",
      letterSpacing: "0.48px",
    },
    load: {
      background: theme.palette.primary.dark,
      color: theme.palette.primary.light,
      "&:hover": {
        background: theme.palette.primary.dark,
        color: theme.palette.primary.main,
      },
    },
    imageItem: {
      maxWidth: "fit-content",
    },
  })
);

function Gallery() {
  const classes = useStyles();
  return (
    <Box py={5} className={classes.root}>
      <Box textAlign="center" py={3}>
        <Typography variant="h3">SEE OUR GALLERY</Typography>
        <img src={GroupCross} alt="Group Cross" />
      </Box>
      <Box>
        <Grid container>
          <GalleryButton />
        </Grid>
      </Box>
      <Box py={3}>
        <Container>
          <Grid container justify="center" spacing={0}>
            {[img3, img4, img5, img6, img7, img8].map((value) => (
              <Grid key={value} item md={4} className={classes.imageItem}>
                <img className={classes.imgs} src={value} alt="" />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box textAlign="center" py={3}>
        <Button className={classes.buttonText + " " + classes.load}>
          Load Gallery
        </Button>
      </Box>
    </Box>
  );
}

export const GalleryButton = () => {
  const [active, setactive] = useState(0);

  const handleClick = (index) => {
    setactive(index);
  };
  return (
    <Grid justify="center" container>
      <ButtonItem active={active} index={0} text="All" onClick={handleClick} />
      <ButtonItem
        active={active}
        index={1}
        text="Chrismas"
        onClick={handleClick}
      />
      <ButtonItem
        active={active}
        index={2}
        text="Holly Week"
        onClick={handleClick}
      />
      <ButtonItem
        active={active}
        index={3}
        text="Books"
        onClick={handleClick}
      />
      <ButtonItem
        active={active}
        index={4}
        text="Pastors"
        onClick={handleClick}
      />
      <ButtonItem
        active={active}
        index={5}
        text="Church"
        onClick={handleClick}
      />
    </Grid>
  );
};

export const ButtonItem = ({ active, index, text, onClick }) => {
  const classes = useStyles();
  return (
    <Grid item>
      <Button
        className={classes.buttonText}
        onClick={() => onClick(index)}
        color={active === index ? "primary" : ""}
      >
        {text}
      </Button>
    </Grid>
  );
};

export default Gallery;
