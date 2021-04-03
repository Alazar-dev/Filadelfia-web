import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Grid } from "@material-ui/core/";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import SupermacyImg from "../../assets/Home/Sermon/placeholder1.png";
import GospelImg from "../../assets/Home/Sermon/placeholder3.png";
import TeachImg from "../../assets/Home/Sermon/placeholder2.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  title: {
    textAlign: "left",
  },
}));

const LatestSermonsCards = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h2">LatestSermons</Typography>

      <Grid item>
        <Card className={classes.root}>
          <img src={SupermacyImg} alt="" />
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
        <Card className={classes.root}>
          <img src={TeachImg} alt="" />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography
                className={classes.title}
                color="secondary"
                variant="subtitle2"
              >
                THE AWESOME TEACH COMPASSION OF GOD IN JONAH GOD'S GREATEST GIFT
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                Category: Global Outreach peaker: Pastor Abebe Kebede
              </Typography>
            </CardContent>
          </div>
        </Card>
      </Grid>
      <Grid item>
        <Card className={classes.root}>
          <img src={GospelImg} alt="" />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography className={classes.title} variant="subtitle2">
                THE GOSPEL SOUL & LIFE IN THE SERMON ON THE MOUNT FLOWER MOUND
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                Category: Global Outreach peaker: Pastor Abebe Kebede
              </Typography>
            </CardContent>
          </div>
        </Card>
      </Grid>
    </>
  );
};

export default LatestSermonsCards;