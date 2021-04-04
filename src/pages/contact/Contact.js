import { Box, Container, Grid } from "@material-ui/core";
import BreadcumbHero from "../../components/breadcrumbs/BreadcrumbsHero";
import ContactAddress from "../../components/contact/ContactAddress";
import ContactForm from "../../components/contact/ContactForm";
import BottomGallery from "../../components/home/BottomGallery";
import ContactMap from "../../assets/Contact/Map.jpg";

const Contact = () => {
  return (
    <div>
      <BreadcumbHero title="Contact Us" />
      <Box py={5}>
        <Container>
          <Grid container spacing={2}>
            <ContactForm />
            <ContactAddress />
          </Grid>
        </Container>
      </Box>
      <Box>
        <img src={ContactMap} alt="Map" />
      </Box>
      <BottomGallery />
    </div>
  );
};

export default Contact;
