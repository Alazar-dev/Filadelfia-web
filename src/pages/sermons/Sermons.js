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
}));

const SermonsPage = () => {
  const classes = useStyles();
  return (
    <>
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
              <div>
                <CardContent>
                  <Typography variant="h6">The Supermacy of Christ</Typography>
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
              <div>
                <CardContent>
                  <Typography color="secondary" variant="subtitle2">
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
              <div>
                <CardContent>
                  <Typography variant="subtitle2">
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
        <Grid item sm={12} md={3} lg={3}>
          <div>
            <InputBase placeholder="Search…" />
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
    </>
  );
};

export default SermonsPage;
