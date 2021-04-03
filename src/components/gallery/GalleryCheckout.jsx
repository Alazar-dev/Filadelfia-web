import { Container, Grid, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import photo1 from "../../assets/Sermons/Check out/Photo 01.png";
import photo2 from "../../assets/Sermons/Check out/Photo 02.png";
import photo3 from "../../assets/Sermons/Check out/Photo 03.png";
import photo4 from "../../assets/Sermons/Check out/Photo 04.png";
import photo5 from "../../assets/Sermons/Check out/Photo 05.png";
import photo6 from "../../assets/Sermons/Check out/Photo 06.png";

const useStyles = makeStyles({
  imgs: {
    "&:hover": {
      opacity: 0.8,
      cursor: "pointer",
      transform: "scale(1.09)",
      transition: "1s",
    },
  },
});
const GalleryCheckout = () => {
  const classes = useStyles();
  return (
    <Container>
      <Box bgcolor="primary.dark">
        <Typography color="primary">CHECKOUT OUT GALLERY</Typography>
      </Box>
      <Grid container justify="center">
        {[photo1, photo2, photo3, photo4, photo5, photo6].map((imgs) => (
          <Grid key={imgs} item xs={4}>
            <img className={classes.imgs} src={imgs} alt="" />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default GalleryCheckout;