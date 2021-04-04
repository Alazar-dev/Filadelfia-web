import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Card,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemIcon,
} from "@material-ui/core/";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import SupermacyImg from "../../../assets/Home/Sermon/placeholder1.png";
import GospelImg from "../../../assets/Home/Sermon/placeholder3.png";
import TeachImg from "../../../assets/Home/Sermon/placeholder2.png";
import Cross from "../../../assets/Home/Our Vision/Cross.png";
import { CloudDownload, MusicNote, YouTube } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {},

  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  cover: {
    minWidth: "151px",
    minHeight: "120px",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    textAlign: "left",
    wordWrap: "wrap",
    fontSize: "15px",
    letterSpacing: "0.45px",
  },
  category: {
    fontSize: "13px",
    letterSpacing: "0.39px",
  },
  cross: {
    alignItems: "center",
    textAlign: "center",
    paddingLeft: "10px",
    display: "flex",
  },
  yellowText: {
    color: theme.palette.primary.main,
  },
  icons: {
    display: "flex",
    background: theme.palette.secondary.dark,
    color: theme.palette.primary.light,
    justifyContent: "center",
  },
}));

const LatestSermonsCards = () => {
  const classes = useStyles();

  return (
    <>
      <Box py={5} display="flex">
        <Typography variant="h4">Latest Sermons</Typography>
        <span className={classes.cross}>
          <img src={Cross} alt="Cross" />
        </span>
      </Box>
      <Box py={5}>
        <Grid container spacing={3}>
          <Grid item>
            <Card>
              <Grid container spacing={3}>
                <SermonItem image={TeachImg} />
              </Grid>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <Grid container spacing={3}>
                <SermonItem image={GospelImg} />
              </Grid>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <Grid container spacing={3}>
                <SermonItem image={SupermacyImg} />
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export const CategoryText = ({ category, speaker }) => {
  const classes = useStyles();

  return (
    <Typography className={classes.category} variant="body1">
      <span className={classes.yellowText}>Category </span>
      {!category ? "Global Outreach" : category}
      <span className={classes.yellowText}>Speaker </span>
      {!speaker ? "Pastor Abebe Kebede" : speaker}
    </Typography>
  );
};

export const SermonItem = ({ image }) => {
  const classes = useStyles();
  return (
    <Grid item container>
      <Grid item md={3} xs={12}>
        <CardMedia className={classes.cover} image={image}>
          <Typography color="textSecondary" variant="body1">
            MENTORSHIP
          </Typography>
          <Typography color="textSecondary" variant="subtitle2">
            Audio Series
          </Typography>
        </CardMedia>
      </Grid>
      <Grid item md={8}>
        <CardContent>
          <Typography className={classes.title} variant="subtitle2">
            THE AWESOME TEACH COMPASSION OF GOD IN JONAH GOD'S GREATEST GIFT
          </Typography>
          <br />
          <CategoryText />
        </CardContent>
      </Grid>
      <Grid item md={1} className={classes.icons}>
        <Box>
          <List>
            <ListItem>
              <ListItemIcon className={classes.icons}>
                <MusicNote />
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon className={classes.icons}>
                <YouTube />
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon className={classes.icons}>
                <CloudDownload />
              </ListItemIcon>
            </ListItem>
          </List>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LatestSermonsCards;
