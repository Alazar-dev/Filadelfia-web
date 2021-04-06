import {
  Box,
  Container,
  createStyles,
  Grid,
  makeStyles,
} from "@material-ui/core";
import BreadcumbHero from "../../components/breadcrumbs/BreadcrumbsHero";
import ContactAddress from "../../components/contact/ContactAddress";
import ContactForm from "../../components/contact/ContactForm";
import BottomGallery from "../../components/home/BottomGallery";
import ContactMap from "../../assets/Contact/Map.jpg";

const useStyles = makeStyles((theme) =>
  createStyles({
    map: {
      maxWidth: "100%",
      maxHeight: "100%",
    },
  })
);

const Contact = () => {
  const classes = useStyles();
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
        <img className={classes.map} src={ContactMap} alt="Map" />
      </Box>
      <BottomGallery />
    </div>
  );
};

export default Contact;
