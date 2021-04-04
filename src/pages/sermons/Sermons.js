import {
  Box,
  Grid,
  Typography,
  InputBase,
  List,
  ListItem,
  CardContent,
  Button,
  Container,
  Breadcrumbs,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import GalleryRow from "../../components/gallery/GalleryRow";
import GalleryCheckout from "../../components/gallery/GalleryCheckout";

import ImgSupermacy from "../../assets/Sermons/placeholder1.png";
import ImgTeach from "../../assets/Sermons/placeholder2.png";
import ImgGospel from "../../assets/Sermons/placeholder3.png";
import ImgChurch from "../../assets/Sermons/placeholder4.png";

import headerImg from "../../assets/Sermons/Sermon.jpg";
import BreadcumbHero from "../../components/breadcrumbs/BreadcrumbsHero";
const useStyles = makeStyles((theme) => ({
  headerImg: {
    width: "100%",
    marginTop: 55,
  },
  sideContent: {
    marginTop: 30,
  },
  sermonBox: {
    padding: "10px 0",
  },
  breadcrubsLink: {
    color: "white",
  },
}));

const SermonsPage = () => {
  const classes = useStyles();
  return (
    <>
      <BreadcumbHero title="LISTEN TO SERMONS" />
      <Grid justify="center" container>
        <Grid item sm={6} md={9} lg={6}>
          <img className={classes.headerImg} src={headerImg} alt="" />
          <Box className={classes.sermonBox} display="flex">
            <img src={ImgSupermacy} alt="" />
            <div>
              <CardContent>
                <Typography variant="body2">
                  THE AWESOME TEACH OF COMPASSION OF GOD IN JONAH GOD'S GREATEST
                  GIFT
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  <Typography variant="caption" color="primary">
                    Category:
                  </Typography>{" "}
                  Global Outreach{" "}
                  <Typography variant="caption" color="primary">
                    Speaker:
                  </Typography>{" "}
                  Pastor Abebe Kebede
                </Typography>
              </CardContent>
            </div>
          </Box>
          <Box className={classes.sermonBox} display="flex">
            <img src={ImgTeach} alt="" />
            <div>
              <CardContent>
                <Typography variant="body2">
                  SEX AND THE SUPERMACY OF CHRIST PART TWO
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  <Typography variant="caption" color="primary">
                    Category:
                  </Typography>{" "}
                  Global Outreach{" "}
                  <Typography variant="caption" color="primary">
                    Speaker:
                  </Typography>{" "}
                  Pastor Abebe Kebede
                </Typography>
              </CardContent>
            </div>
          </Box>
          <Box className={classes.sermonBox} display="flex">
            <img src={ImgGospel} alt="" />
            <div>
              <CardContent>
                <Typography variant="body2">
                  THE GOSPEL SOUL AND LIFE IN THE SERMON ON THE MOUNT FLOWER
                  MOUND
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  <Typography variant="caption" color="primary">
                    Category:
                  </Typography>{" "}
                  Global Outreach{" "}
                  <Typography variant="caption" color="primary">
                    Speaker:
                  </Typography>{" "}
                  Pastor Abebe Kebede
                </Typography>
              </CardContent>
            </div>
          </Box>
          <Box className={classes.sermonBox} display="flex">
            <img src={ImgChurch} alt="" />
            <div>
              <CardContent>
                <Typography variant="subtitle2">
                  THE GOSPEL SOUL & LIFE IN THE SERMON ON THE MOUNT FLOWER MOUND
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  <Typography variant="caption" color="primary">
                    Category:
                  </Typography>{" "}
                  Global Outreach{" "}
                  <Typography variant="caption" color="primary">
                    Speaker:
                  </Typography>{" "}
                  Pastor Abebe Kebede
                </Typography>
              </CardContent>
            </div>
          </Box>
        </Grid>
        <Grid className={classes.sideContent} item sm={12} md={3} lg={3}>
          <Container>
            <div>
              <InputBase placeholder="Search…" />
            </div>
            <Box bgcolor="primary.dark">
              <Typography color="secondary">SERMONS</Typography>
            </Box>
            <List justify="right">
              <ListItem>
                <Button>New</Button>
              </ListItem>
              <ListItem>
                <Button>Popular</Button>
              </ListItem>
              <ListItem>
                <Button>Series</Button>
              </ListItem>
              <ListItem>
                <Button>Sunday service</Button>
              </ListItem>
              <ListItem>
                <Button>Friday service</Button>
              </ListItem>
            </List>
            <GalleryCheckout />
          </Container>
        </Grid>
      </Grid>
      <GalleryRow />
    </>
  );
};

export default SermonsPage;
