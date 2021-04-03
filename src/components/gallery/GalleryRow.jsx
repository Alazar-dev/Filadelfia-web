import { Grid } from "@material-ui/core";
import CssBaseLine from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

import img3 from "../../assets/Gallery/img-3.png";
import img4 from "../../assets/Gallery/img-4.png";
import img5 from "../../assets/Gallery/img-5.png";
import img6 from "../../assets/Gallery/img6.png";
import img7 from "../../assets/Gallery/img-7.png";
import img8 from "../../assets/Gallery/img-8.png";

const useStyles = makeStyles({
  img: {
    width: "100%",
    height: 190,
    marginBottom: -4,
    padding: 1,
    "&:hover": {
      opacity: 0.8,
      cursor: "pointer",
      transform: "scale(1.09)",
      transition: "1s",
    },
  },
});

const GalleryRow = () => {
  const classes = useStyles();
  return (
    <Grid spacing={1} container>
      <CssBaseLine />
      {[img3, img4, img5, img6, img7, img8].map((imgs) => (
        <Grid key={imgs} item lg={2} md={4} xs={6}>
          <img src={imgs} className={classes.img} alt="" />
        </Grid>
      ))}
    </Grid>
  );
};

export default GalleryRow;
