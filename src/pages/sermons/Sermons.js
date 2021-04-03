import {
  Box,
  Grid,
  Typography,
  InputBase,
  List,
  ListItem,
  Card,
  CardContent,
  Button,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
  sideContent: {
      marginTop: 30
  }
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
          </Container>
          <GalleryCheckout />
        </Grid>
      </Grid>
      <GalleryRow />
    </>
  );
};

export default SermonsPage;
