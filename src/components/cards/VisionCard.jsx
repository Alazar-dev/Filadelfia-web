import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid, Paper } from "@material-ui/core";

import Bible from "../../assets/Home/Our Vision/Layer 1.png";
import Alert from "../../assets/Home/Our Vision/Icon1.png";
import Church from "../../assets/Home/Our Vision/icon.png";

const useStyles = makeStyles({
  secondComponent: {
    textAlign: "center",
    width: "82%",
    marginLeft: 115,
    marginTop: 50,
    "@media (max-width: 900px)": {
      display: "none",
    },
  },

  numFirst: {
    marginTop: 15,
    fontWeight: 600,
  },
  numLast: {
    marginBottom: 15,
    fontWeight: 600,
  },
  img: {
    textAlign: "center",
    marginTop: 25,
  },
  imgCenter: {
    textAlign: "center",
    marginBottom: 25,
  },
});

const VisionCard = () => {
  const classes = useStyles();

  return (
    <>
      <Grid justify="center" spacing={2} container>
        <Grid item xs={4}>
          <Paper>
            <Card className={classes.root}>
              <CardContent>
                <Typography variant="subtitle1" component="h2">
                  DAILY PRAYERS
                </Typography>
                <div className={classes.img}>
                  <img src={Alert} alt="Daily Prayers_Image" />
                </div>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>
            <Card className={classes.root}>
              <CardContent>
                <div className={classes.imgCenter}>
                  <img src={Bible} alt="Daily Prayers_Image" />
                </div>

                <Typography variant="subtitle1" component="h2">
                  LATEST TEACHING
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>
            <Card className={classes.root}>
              <CardContent>
                <Typography variant="subtitle1" component="h2">
                  NEXT SERMONS
                </Typography>
                <div className={classes.img}>
                  <img src={Church} alt="Daily Prayers_Image" />
                </div>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>
      <SimpleData />
    </>
  );
};

function SimpleData() {
  const classes = useStyles();
  return (
    <Grid className={classes.secondComponent} spacing={2} container>
      <Grid item md={3} xs={6}>
        <Card className={classes.root}>
          <CardContent>
            <Typography color="textSecondary">HOURS OF WORSHIP</Typography>
            <Typography
              className={classes.numFirst}
              variant="h5"
              component="h2"
            >
              12312
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={3} xs={6}>
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.numLast} variant="h5" component="h2">
              414
            </Typography>
            <Typography color="textSecondary">SERMONS PRESENTED</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={3} xs={6}>
        <Card className={classes.root}>
          <CardContent>
            <Typography color="textSecondary">DOLLARS DONATION</Typography>
            <Typography
              className={classes.numFirst}
              variant="h5"
              component="h2"
            >
              414
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={3} xs={6}>
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.numLast} variant="h5" component="h2">
              414
            </Typography>
            <Typography color="textSecondary">NEXT SERMONS</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default VisionCard;