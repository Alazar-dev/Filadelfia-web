import PrayerwallLeft from "../../components/prayerwall/PrayerwalltLeft";
import PrayerwallRight from "../../components/prayerwall/PrayerwallRight";

import { Grid, Box, Container } from "@material-ui/core";

import BreadcumbHero from "../../components/breadcrumbs/BreadcrumbsHero";
import GalleryRow from "../../components/gallery/GalleryRow";

const PrayerWall = () => {
  return (
    <div>
      <BreadcumbHero title="Prayer Wall" />
      <Box py={5}>
        <Container>
          <Grid container spacing={2}>
            <PrayerwallLeft />
            <PrayerwallRight />
          </Grid>
        </Container>
      </Box>
      <GalleryRow />
    </div>
  );
};

export default PrayerWall;
