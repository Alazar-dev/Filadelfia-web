import { Box, Grid, List} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Twitter from "../../assets/Header/Twitter.png";
import Google from "../../assets/Header/Google Plus.png";
import Facebook from "../../assets/Header/Facebook.png";
import Linkedin from "../../assets/Header/Linked IN.png";

const useStyles = makeStyles({
  root: {
    "@media (max-width: 900px)": {
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
      </Grid>
    </Box>
  );
};

export default TopBar;
