import { Box, Grid, Container } from "@material-ui/core";

import SermonsLeft from "../../components/sermons/SermonsLeft";
import SermonsRight from "../../components/sermons/SermonstRight";

import GalleryRow from "../../components/gallery/GalleryRow";

import BreadcumbHero from "../../components/breadcrumbs/BreadcrumbsHero";

const SermonsPage = () => {
  return (
    <>
      <BreadcumbHero title="LISTEN TO SERMONS" />
      <Box py={5}>
        <Container>
          <Grid container spacing={2}>
            <SermonsLeft />
            <SermonsRight />
          </Grid>
        </Container>
      </Box>

      <GalleryRow />
    </>
  );
};

export default SermonsPage;
