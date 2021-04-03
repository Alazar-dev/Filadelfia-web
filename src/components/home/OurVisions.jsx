import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

import Cross from "../../assets/Home/Our Vision/Cross.png";
import Bible from "../../assets/Home/Our Vision/Layer 1.png";
import Alert from "../../assets/Home/Our Vision/Icon1.png";
import Church from "../../assets/Home/Our Vision/icon.png";
import GroupCross from "../../assets/Home/Our Vision/Group 14.png";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      textAlign: "center",
    },
    card: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    text: {
      textAlign: "center",
      marginBottom: 30,
      fontWeight: 300,
      fontSize: "14px",
      letterSpacing: "0.43px",
    },
    statHeader: {
      color: "#999999",
      letterSpacing: "0.19px",
      fontSize: "16px",
    },
    statNumber: {
      fontWeight: "700",
      fontSize: "26px",
    },
  })
);

function OurVisions() {
  const classes = useStyles();
  return (
    <div>
      <Box pt={5} className={classes.root}>
        <Typography align="center" variant="h2">
          OUR VISIONS
        </Typography>
        <img className={classes.cross} src={Cross} alt="Cross" />
        <Typography className={classes.text}>
          To be a faithful, growing church, that demonstrates true community,
          deep Christian
          <div>spirituality and a passion for justice.</div>
        </Typography>
      </Box>
      <Box py={5} className={classes.root}>
        <VisionCard />
      </Box>
      <Box py={5} className={classes.root}>
        <ChurchStats />
      </Box>
    </div>
  );
}

export function VisionCard() {
  const classes = useStyles();
  return (
    <Container>
      <Grid justify="center" spacing={3} container>
        <Grid item xs={4}>
          <Paper>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="subtitle1" component="h2">
                  DAILY PRAYERS
                </Typography>
                <img src={GroupCross} alt="Group Cross" />
                <div>
                  <img src={Alert} alt="Daily Prayers_Image" />
                </div>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>
            <Card className={classes.card}>
              <CardContent>
                <div>
                  <img src={Bible} alt="Daily Prayers_Image" />
                </div>

                <img src={GroupCross} alt="Group Cross" />

                <Typography variant="subtitle1" component="h2">
                  LATEST TEACHING
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="subtitle1" component="h2">
                  NEXT SERMONS
                </Typography>
                <img src={GroupCross} alt="Group Cross" />

                <div>
                  <img src={Church} alt="Daily Prayers_Image" />
                </div>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export function ChurchStats() {
  const classes = useStyles();
  return (
    <Container>
      <Grid className={classes.secondComponent} spacing={2} container>
        <Grid item md={3} xs={6}>
          <Typography className={classes.statHeader}>
            HOURS OF WORSHIP
          </Typography>
          <Typography
            className={classes.statNumber}
            variant="h5"
            component="h2"
          >
            12312
          </Typography>
        </Grid>
        <Grid item md={3} xs={6}>
          <Typography className={classes.numLast} variant="h5" component="h2">
            414
          </Typography>
          <Typography className={classes.statHeader}>
            SERMONS PRESENTED
          </Typography>
        </Grid>
        <Grid item md={3} xs={6}>
          <Typography className={classes.statHeader}>
            DOLLARS DONATION
          </Typography>
          <Typography
            className={classes.statNumber}
            variant="h5"
            component="h2"
          >
            414
          </Typography>
        </Grid>
        <Grid item md={3} xs={6}>
          <Typography
            className={classes.statNumber}
            variant="h5"
            component="h2"
          >
            414
          </Typography>
          <Typography className={classes.statHeader}>NEXT SERMONS</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default OurVisions;
