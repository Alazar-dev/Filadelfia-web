import { useState } from "react";

import {
  Typography,
  Grid,
  Card,
  Button,
  CardContent,
  Box,
  makeStyles,
  ListItem,
  List,
  InputBase,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

import BreadcumbHero from "../../components/breadcrumbs/BreadcrumbsHero";
import headerImg from "../../assets/Prayer Wall/i.png";
import GalleryRow from "../../components/gallery/GalleryRow";
import CheckoutGallery from "../../components/gallery/GalleryCheckout";

const useStyles = makeStyles({
  headerImg: {
    width: "100%",
    marginTop: 35,
  },
  favoriteButton: {
    cursor: "pointer",
  },
  prayerButtonSection: {
    display: "flex",
    flexDirection: "row-reverse",
  },
  likes: {
    marginTop: 9,
  },
  sideContent: {
    marginTop: 35,
    "@media (max-width: 900px)": {
      display: "none",
    },
  },
});

const PrayerWall = () => {
  const classes = useStyles();
  const [educationLikes, setEducationLikes] = useState(0);
  const [businessLikes, setBusinessLikes] = useState(0);
  const [healthcareLikes, setHealthcareLikes] = useState(0);
  const [mediaLikes, setMediaLikes] = useState(0);
  const [active, setActive] = useState(0)

  const handleClick = (index) => {
    setActive(index);
  };

  return (
    <div>
      <Box bgcolor="primary.dark" color="info.contrastText">
        <BreadcumbHero title="Prayer Wall" />
      </Box>
      <Grid justify="center" container spacing={2}>
        <Grid item xs={12} md={9} lg={6}>
          <img className={classes.headerImg} src={headerImg} alt="" />
          <Card>
            <CardContent>
              <Typography variant="subtitle2">
                Sunday 09:45 am to 01:30pm
              </Typography>
              <Typography variant="h6">EDUCATION</Typography>
              <Typography variant="subtitle2">
                Pray for educators to have sustainable, realistic goals, and
                wisdom to focus on essential learning priorities. Pray for
                encouragement, refreshing, and creative strategies for all
                educators. Pray for connections to happen for students/families
                who have yet to connect with their school this year.
              </Typography>
              <Grid className={classes.prayerButtonSection} container>
                <Grid item>
                  <Button variant="contained">I PRAYED</Button>
                </Grid>
                <Grid className={classes.likes} item xs={2}>
                  <Typography>{educationLikes} Likes</Typography>
                </Grid>
                <Grid className={classes.likes} item>
                  <FavoriteIcon
                    className={classes.favoriteButton}
                    onClick={() => {
                      setEducationLikes(educationLikes + 1);
                    }}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography variant="subtitle2">
                Sunday 09:45 am to 01:30pm
              </Typography>
              <Typography variant="h6">BUSINESS</Typography>
              <Typography variant="subtitle2">
                Pray for local business leaders to have a healthy work/life
                balance: personal health, family relationships, etc. Pray for
                local business leaders to have perseverance, wisdom and hope to
                navigate this season. Pray for local businesses to rebuild,
                rehire employees, and become profitable again.
              </Typography>
              <Grid className={classes.prayerButtonSection} container>
                <Grid item>
                  <Button variant="contained">I PRAYED</Button>
                </Grid>
                <Grid className={classes.likes} item xs={2}>
                  <Typography>{businessLikes} Likes</Typography>
                </Grid>
                <Grid className={classes.likes} item>
                  <FavoriteIcon
                    className={classes.favoriteButton}
                    onClick={() => {
                      setBusinessLikes(businessLikes + 1);
                    }}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography variant="subtitle2">
                Sunday 09:45 am to 01:30pm
              </Typography>
              <Typography color="primary.darkest" variant="h6">
                HEALTH CARE
              </Typography>
              <Typography variant="subtitle2">
                Pray for God to provide a safe vaccine and other effective
                treatment for COVID-19. Pray for peace and resilience for health
                care providers (HCPs) and their families. Pray for HCPs to have
                God’s wisdom, strength, perseverance and good health.de.
              </Typography>
              <Grid className={classes.prayerButtonSection} container>
                <Grid item>
                  <Button variant="contained">I PRAYED</Button>
                </Grid>
                <Grid className={classes.likes} item xs={2}>
                  <Typography>{healthcareLikes} Likes</Typography>
                </Grid>
                <Grid className={classes.likes} item>
                  <FavoriteIcon
                    className={classes.favoriteButton}
                    onClick={() => {
                      setHealthcareLikes(healthcareLikes + 1);
                    }}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography variant="subtitle2">
                Sunday 09:45 am to 01:30pm
              </Typography>
              <Typography color="primary.darkest" variant="h6">
                MEDIA
              </Typography>
              <Typography variant="subtitle2">
                Pray for hope-filled stories to be highlighted in all local
                media. Pray for genuine God-transformation stories to be
                broadcasted and celebrated locally. Pray for our local news
                outlets to have clear vision to bring accurate reporting through
                all types of media.
              </Typography>
              <Grid className={classes.prayerButtonSection} container>
                <Grid item>
                  <Button variant="contained">I PRAYED</Button>
                </Grid>
                <Grid className={classes.likes} item xs={2}>
                  <Typography>{mediaLikes} Likes</Typography>
                </Grid>
                <Grid className={classes.likes} item>
                  <FavoriteIcon
                    className={classes.favoriteButton}
                    onClick={() => {
                      setMediaLikes(mediaLikes + 1);
                    }}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid className={classes.sideContent} item xs={2}>
          <div>
            <InputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <Box bgcolor="primary.dark">
            <Typography color="secondary">PRAYERS</Typography>
          </Box>
          <List>
            <ListItem>
              <ButtonItem active={active}  index={1} onClick={handleClick} text="Church">Church</ButtonItem>
            </ListItem>
            <ListItem>
              <ButtonItem active={active} index={2} onClick={handleClick} text="Country">Country</ButtonItem>
            </ListItem>
            <ListItem>
              <ButtonItem active={active}  index={3} onClick={handleClick} text="Personal">Personal</ButtonItem>
            </ListItem>
            <ListItem>
              <ButtonItem active={active}  index={4} onClick={handleClick} text="Family">Family</ButtonItem>
            </ListItem>
            <ListItem>
              <ButtonItem active={active}  index={5} onClick={handleClick} text="Government">Government</ButtonItem>
            </ListItem>
          </List>
          <CheckoutGallery />
        </Grid>
      </Grid>
      <GalleryRow />
    </div>
  );
};

export const ButtonItem = ({ active, index, text, onClick }) => {
  const classes = useStyles();
  return (
    <Grid item>
      <Button
        className={classes.buttonText}
        onClick={() => onClick(index)}
        color={active === index ? "primary" : "inherit"}
      >
        {text}
      </Button>
    </Grid>
  );
};

export default PrayerWall;
