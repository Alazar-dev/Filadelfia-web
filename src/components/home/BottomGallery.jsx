import React from "react";
import img3 from "../../assets/Gallery/img-3.png";
import img4 from "../../assets/Gallery/img-4.png";
import img5 from "../../assets/Gallery/img-5.png";
import img6 from "../../assets/Gallery/img6.png";
import img7 from "../../assets/Gallery/img-7.png";
import img8 from "../../assets/Gallery/img-8.png";
import { createStyles, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
    image: {
      width: "317px",
      height: "240px",
    },
  })
);

function BottomGallery() {
  const classes = useStyles();
  return (
    <Grid container>
      {[img3, img4, img5, img6, img7, img8].map((imgs) => (
        <Grid className={classes.image} key={imgs} item>
          <img className={classes.image} src={imgs} alt="" />
        </Grid>
      ))}
    </Grid>
  );
}

export default BottomGallery;
