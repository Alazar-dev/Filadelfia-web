import { Grid, Typography, Box, List, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import Logo from "../../assets/Footer/Logo.png";

const useStyles = makeStyles({
  text: {
    textAlign: "center",
    fontSize: "10px",
  },
  link: {
    textDecoration: "none",
    fontSize: "12px",
    color: "white",
  },
  footerHeadingTwo: {
    textAlign: "center",
    marginTop: 35,
  },
  footerHeadingThree: {
    marginTop: 35,
    textAlignLast: "right",
  },
  listItems: {
    textAlignLast: "right",
    color: "white",
    fontSize: "15px",
    "@media (max-width: 900px)": {
      textAlign: "right",
      textAlignLast: "center",
    },
  },
  quickLinks: {
    textAlign: "center",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root} bgcolor="secondary.dark">
        <Grid justify="center" container>
          <Grid style={{ marginTop: 15 }} item xs={12} md={6} lg={3}>
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
            <Typography color="secondary" variant="subtitle2">
              Phillipisiyos Church have a prayers wall and Sermons.Phillipisiyos
              Church is a healing, prophetic church all about giving the gifts
              of Jesus to God's people.
            </Typography>
          </Grid>
          <Grid item xs={12} lg={3}>
            <Typography
              className={classes.footerHeadingTwo}
              color="primary"
              variant="h6"
            >
              QUICK LINKS
            </Typography>
            <List className={classes.quickLinksList}>
              <ListItemText className={classes.quickLinks}>
                <Link className={classes.link} to="/sermons">
                  SERMONS
                </Link>
              </ListItemText>
              <ListItemText className={classes.quickLinks}>
                <Link className={classes.link} to="/gallery">
                  GALLERY
                </Link>
              </ListItemText>
              <ListItemText className={classes.quickLinks}>
                <Link className={classes.link} to="/events">
                  EVENTS
                </Link>
              </ListItemText>
              <ListItemText className={classes.quickLinks}>
                <Link className={classes.link} to="/prayerwall">
                  PRAYERWALL
                </Link>
              </ListItemText>
              <ListItemText className={classes.quickLinks}>
                <Link className={classes.link} to="/contact">
                  CONTACT US
                </Link>
              </ListItemText>
            </List>
          </Grid>

          <Grid item xs={12} lg={3}>
            <Typography
              className={classes.footerHeadingThree}
              color="primary"
              variant="h6"
            >
              CONTACT US
            </Typography>
            <Typography className={classes.listItems} color="primary">
              Bole Michael, in front of Michael Church, Addis Ababa
            </Typography>
            <Typography className={classes.listItems}>Ethiopia</Typography>
            <Typography className={classes.listItems}>
              P: (+251) 912-345 678
            </Typography>
            <Typography className={classes.listItems}>
              (+251) 912-345 678
            </Typography>
            <Typography className={classes.listItems}>
              E: info@PhillipisiyosChurch.com
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.root} bgcolor="primary.dark">
        <Typography className={classes.text} color="secondary">
          © COPYRIGHTS 2021 PHILLIPISIYOS CHURCH
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
