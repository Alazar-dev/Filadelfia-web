import { Box, Container, Grid } from "@material-ui/core";
import BreadcumbHero from "../../components/breadcrumbs/BreadcrumbsHero";
import { GalleryButton } from "../../components/home/Gallery";

import img3 from "../../assets/Gallery/img-3.png";
import img4 from "../../assets/Gallery/img-4.png";
import img5 from "../../assets/Gallery/img-5.png";
import img6 from "../../assets/Gallery/img6.png";
import img7 from "../../assets/Gallery/img-7.png";
import img8 from "../../assets/Gallery/img-8.png";
import GalleryGrid from "../../components/gallery/GalleryGrid";

const Gallery = () => {
  return (
    <div>
      <BreadcumbHero title="Gallery" />
      <Box py={5}>
        <Box>
          <Grid container>
            <GalleryButton />
          </Grid>
        </Box>
        <GalleryGrid />
      </Box>
    </div>
  );
};

export default Gallery;
