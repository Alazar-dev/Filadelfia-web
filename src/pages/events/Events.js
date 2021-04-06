import { Box, Container, Grid } from "@material-ui/core";
import BreadcumbHero from "../../components/breadcrumbs/BreadcrumbsHero";
import EventLeft from "../../components/events/EventLeft";
import EventRight from "../../components/events/EventRight";

const Events = () => {
  return (
    <div>
      <BreadcumbHero title="EVENTS" />
      <Box py={5}>
        <Container>
          <Grid justify="center" container spacing={2}>
            <EventLeft />
            <EventRight />
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Events;
