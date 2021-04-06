import { Box, Container, Grid } from "@material-ui/core";
import BreadcumbHero from "../../components/breadcrumbs/BreadcrumbsHero";
import SermonsDetailLeft from "../../components/sermonsDetail/SermonsDetailLeft";
import SermonsDetailRight from "../../components/sermonsDetail/SermonsDetailRight";

const Events = () => {
  return (
    <div>
      <BreadcumbHero title="SERMONS SCHEDULE" />
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
