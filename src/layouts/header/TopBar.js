import { Box, Typography, Grid, List, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Twitter from "../../assets/Header/Twitter.png";
import Google from "../../assets/Header/Google Plus.png";
import Facebook from "../../assets/Header/Facebook.png";
import Linkedin from "../../assets/Header/Linked IN.png";
import Phone from "../../assets/Header/Icon Phone.png";
import Location from "../../assets/Header/Icon Location.png";
import Web from "../../assets/Header/Icon Web.png";
const useStyles = makeStyles({
  root: {
    height: "45px",
    "@media (max-width: 900px)": {
      // display: 'none',
      display: "none",
    },
  },
  socialLinks: {
    display: "flex",
    alignItems: "center",
    paddingRight: "24px",
  },
  link: {
    marginLeft: 20,
  },
  item: {
    paddingTop: "0px !important",
    paddingBottom: "0px !important",
    display: "flex",
    alignItems: "center",
  },
  text: {
    textAlign: "left",
    letterSpacing: "0.14px",
    color: "#343C99",
    opacity: 1,
  },
  grid: {
    margin: 0,
    width: "auto",
  },
});

const TopBar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid justify="center" spacing={6} className={classes.grid} container>
        <Divider orientation="vertical" flexItem />
        <Grid className={classes.item} item>
          <Typography className={classes.text} variant="subtitle2">
            <img src={Phone} alt="" /> +251 011 657 4000
          </Typography>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid className={classes.item} item>
          <Typography className={classes.text} variant="subtitle2">
            +251 011 657 4001
          </Typography>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid className={classes.item} item>
          <Grid spacing={2} container direction="row" alignItems="center">
            <Grid item>
              <img src={Web} alt="" />
            </Grid>
            <Grid item>
              <Typography className={classes.text} variant="subtitle2">
                info@Phillipisiyoscurch.com
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid className={classes.item} item>
          <Grid spacing={2} container direction="row" alignItems="center">
            <Grid item>
              <img src={Location} alt="" />
            </Grid>
            <Grid item>
              <Typography className={classes.text} variant="subtitle2">
                Bole Michael, infront of Miachel Church
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Divider orientation="vertical" flexItem />{" "}
        <Grid className={classes.item} item>
          <List className={classes.socialLinks}>
            <a href="https://www.twitter.com">
              <img className={classes.link} src={Twitter} alt="twitter" />
            </a>
            <a href="https://www.googleplus.com">
              <img className={classes.link} src={Google} alt="google plus" />
            </a>
            <a href="https://www.facebook.com">
              <img className={classes.link} src={Facebook} alt="facebook" />
            </a>
            <a href="https://www.linkedin.com">
              <img className={classes.link} src={Linkedin} alt="linkedin" />
            </a>
          </List>
        </Grid>
        <Divider orientation="vertical" flexItem />
      </Grid>
    </Box>
  );
};

export default TopBar;
