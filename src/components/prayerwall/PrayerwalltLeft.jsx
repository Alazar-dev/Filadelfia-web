import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Pagination } from "@material-ui/lab";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Box, Button, Grid } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

import headerImg from "../../assets/Prayer Wall/i.png";

const useStyles = makeStyles((theme) => ({
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
  },

  paginate: {
    background: theme.palette.secondary.main,
    maxWidth: "fit-content",
  },
  headerImg: {
    width: "870px",
    height: "256px",
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
}));

function PrayerLeft() {
  const classes = useStyles();

  return (
    <Grid item md={8}>
      <Box py={5}>
        <Box py={2}>
          <img className={classes.image} src={headerImg} alt="" />
        </Box>
        <Box>
          <Grid container spacing={4}>
            <PrayerItem />
            <PrayerItem />
            <PrayerItem />
            <PrayerItem />
          </Grid>
        </Box>
        <Box py={5}>
          <Pagination
            color="primary"
            count={10}
            variant="outlined"
            shape="rounded"
            className={classes.paginate}
          />
        </Box>
      </Box>
    </Grid>
  );
}

export const PrayerItem = () => {
  const classes = useStyles();
  const [healthcareLikes, setHealthcareLikes] = useState(0);

  return (
    <Grid item md={12}>
      <Card>
        <CardContent>
          <Grid container>
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
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PrayerLeft;
