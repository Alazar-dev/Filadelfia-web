import {
  Box,
  Grid,
  Typography,
  InputBase,
  List,
  ListItem,
  Container,
  Card,
  CardContent,
} from "@material-ui/core";
import { makeStyles, fade } from "@material-ui/core/styles";

import GalleryRow from "../../components/gallery/GalleryRow";
import GalleryCheckout from "../../components/gallery/GalleryCheckout";

import ImgSupermacy from "../../assets/Sermons/placeholder1.png";
import ImgTeach from "../../assets/Sermons/placeholder2.png";
import ImgGospel from "../../assets/Sermons/placeholder3.png";

import headerImg from "../../assets/Sermons/Sermon.jpg";
const useStyles = makeStyles((theme) => ({
  headerImg: {
    width: "100%",
    marginTop: 30,
  },
  //   mainContentImgs: {
  //     width: "171px",
  //     height: "136px",
  //   },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  mobileView: {
    "@media (max-width: 900px)": {
      display: "none",
    },
  },
}));

const SermonsPage = () => {
  const classes = useStyles();
  return (
    <Container>
      <Box bgcolor="secondary.dark" color="primary.light">
        <Typography align="center" variant="h5">
          LISTEN TO SERMONS
        </Typography>
      </Box>
      <Grid justify="center" container spacing={4}>
        <Grid item sm={6} md={9} lg={6}>
          <img className={classes.headerImg} src={headerImg} alt="" />
          <Grid item>
            <Card>
              <img src={ImgSupermacy} alt="" />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography className={classes.title} variant="h6">
                    The Supermacy of Christ
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    Category: Global Outreach peaker: Pastor Abebe Kebede
                  </Typography>
                </CardContent>
              </div>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <img src={ImgTeach} alt="" />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography
                    className={classes.title}
                    color="secondary"
                    variant="subtitle2"
                  >
                    THE AWESOME TEACH COMPASSION OF GOD IN JONAH GOD'S GREATEST
                    GIFT
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    Category: Global Outreach peaker: Pastor Abebe Kebede
                  </Typography>
                </CardContent>
              </div>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <img src={ImgGospel} alt="" />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography className={classes.title} variant="subtitle2">
                    THE GOSPEL SOUL & LIFE IN THE SERMON ON THE MOUNT FLOWER
                    MOUND
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    Category: Global Outreach peaker: Pastor Abebe Kebede
                  </Typography>
                </CardContent>
              </div>
            </Card>
          </Grid>
        </Grid>
        <Grid className={classes.mobileView} item sm={12} md={3} lg={3}>
          <div className={classes.search}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <Box bgcolor="primary.dark">
            <Typography color="primary">SERMONS</Typography>
          </Box>
          <List justify="right">
            <ListItem>
              <Typography>New</Typography>
            </ListItem>
            <ListItem>
              <Typography>Popular</Typography>
            </ListItem>
            <ListItem>
              <Typography>Series</Typography>
            </ListItem>
            <ListItem>
              <Typography>Sunday service</Typography>
            </ListItem>
            <ListItem>
              <Typography>Friday service</Typography>
            </ListItem>
          </List>
          <GalleryCheckout />
        </Grid>
      </Grid>
      <GalleryRow />
    </Container>
  );
};

export default SermonsPage;
