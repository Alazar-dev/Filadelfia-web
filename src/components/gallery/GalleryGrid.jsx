import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import img3 from "../../assets/Gallery/img-3.png";
import img4 from "../../assets/Gallery/img-4.png";
import img5 from "../../assets/Gallery/img-5.png";
import img6 from "../../assets/Gallery/img6.png";
import img7 from "../../assets/Gallery/img-7.png";
import img8 from "../../assets/Gallery/img-8.png";

const useStyles = makeStyles((theme) => ({
  btn: {
    textAlign: "center",
    backgroundColor: "#424242",
    marginTop: 15,
    marginBottom: 80,
  },
  galleryHeader: {
    textAlign: "center",
  },
  imgs: {
    "&:hover": {
      opacity: 0.8,
      cursor: "pointer",
      transform: "scale(1.09)",
      transition: "1s",
    },
  },
}));

export default function GalleryGrid() {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.galleryHeader} variant="h2">
        SEE OUR GALLERY
      </Typography>
      <Grid container justify="center">
        {[img3, img4, img5, img6, img7, img8].map((value) => (
          <Grid key={value} item>
            <img className={classes.imgs} src={value} alt="" />
          </Grid>
        ))}
      </Grid>
      <Grid container justify="center">
        <Link style={{ textDecoration: "none" }} to="/gallery">
          <Button className={classes.btn} variant="contained">
            <Typography color="primary" variant="subtitle2">
              LOAD GALLERY
            </Typography>
          </Button>
        </Link>
      </Grid>
    </>
  );
}
