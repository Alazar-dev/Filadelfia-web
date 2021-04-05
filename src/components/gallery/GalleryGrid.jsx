import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Container } from "@material-ui/core";

import img3 from "../../assets/Gallery/img-3.png";
import img4 from "../../assets/Gallery/img-4.png";
import img5 from "../../assets/Gallery/img-5.png";
import img6 from "../../assets/Gallery/img6.png";
import img7 from "../../assets/Gallery/img-7.png";
import img8 from "../../assets/Gallery/img-8.png";

const useStyles = makeStyles((theme) => ({
  images: {
    "&:hover": {
      opacity: 0.8,
      cursor: "pointer",
      transform: "scale(1.09)",
      transition: "1s",
    },
  },
  item: {
    maxWidth: "fit-content",
  },
}));

export default function GalleryGrid() {
  const classes = useStyles();

  return (
    <>
      <Box py={3}>
        <Container>
          <Grid container justify="center" spacing={2}>
            {[img3, img4, img5, img6, img7, img8].map((value) => (
              <Grid key={value} className={classes.item} item md={6} lg={4}>
                <img className={classes.images} src={value} alt="" />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
