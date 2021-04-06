import { Box, Container, Grid } from "@material-ui/core";
import BreadcumbHero from "../../components/breadcrumbs/BreadcrumbsHero";
import SermonsDetailLeft from "../../components/events/EventLeft";
import SermonsDetailRight from "../../components/events/EventRight";

const Events = () => {
  return (
    <div>
      <BreadcumbHero title="EVENTS SCHEDULE" />
      <Box py={5}>
        <Container>
          <Grid justify="center" container spacing={2}>
            <SermonsDetailLeft />
            <SermonsDetailRight />
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Events;
