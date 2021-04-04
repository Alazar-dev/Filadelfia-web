import { Box, Grid } from "@material-ui/core";
import BreadcumbHero from "../../components/breadcrumbs/BreadcrumbsHero";
import { GalleryButton } from "../../components/home/Gallery";

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
