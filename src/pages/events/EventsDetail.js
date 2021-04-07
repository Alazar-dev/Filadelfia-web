import { Box, Container, Grid } from "@material-ui/core";
import BreadcumbHero from "../../components/breadcrumbs/BreadcrumbsHero";
import EventsDetailLeft from "../../components/eventsDetail/EventsDetailLeft";
import EventsDetailRight from "../../components/eventsDetail/EventsDetailRight";

import GalleryRow from "../../components/gallery/GalleryRow"

const EventsDetail = () => {
  return (
    <div>
      <BreadcumbHero title="EVENTS SCHEDULE" />
      <Box py={5}>
        <Container>
          <Grid justify="center" container spacing={2}>
            <EventsDetailLeft />
            <EventsDetailRight />
          </Grid>
        </Container>
      </Box>
      <GalleryRow />
    </div>
  );
};

export default EventsDetail;
