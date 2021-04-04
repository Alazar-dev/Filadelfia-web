import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  createStyles,
  Grid,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  TextField,
} from "@material-ui/core";
import React from "react";
import photo1 from "../../assets/Sermons/Check out/Photo 01.png";
import photo2 from "../../assets/Sermons/Check out/Photo 02.png";
import photo3 from "../../assets/Sermons/Check out/Photo 03.png";
import photo4 from "../../assets/Sermons/Check out/Photo 04.png";
import photo5 from "../../assets/Sermons/Check out/Photo 05.png";
import photo6 from "../../assets/Sermons/Check out/Photo 06.png";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
    search: {
      margin: "10px 20px",
      color: theme.palette.text.primary,
      background: theme.palette.secondary.main,
      "& .MuiFormLabel-root": {
        color: "#999999",
        letterSpacing: "0.42px",
      },
    },
    title: {
      background: theme.palette.secondary.dark,
      borderRadius: "2px",
      color: theme.palette.secondary.light,
    },
    imgs: {
      marginTop: 10,
      "&:hover": {
        opacity: 0.8,
        cursor: "pointer",
        transform: "scale(1.09)",
        transition: "1s",
      },
    },
    gridItem: {
      maxWidth: "fit-content",
    },
  })
);

function EventRight() {
  const classes = useStyles();
  return (
    <Grid item md={4}>
      <Box py={5}>
        <Box>
          <TextField
            className={classes.search}
            label="Search"
            variant="outlined"
          />
        </Box>
        <Box py={2}>
          <Card>
            <CardHeader
              color="secondary"
              title="EVENTS"
              className={classes.title}
            ></CardHeader>
            <CardContent>
              <List>
                <ListItem button divider>
                  <ListItemText primary="Monthly" />
                  <ListItemSecondaryAction>12</ListItemSecondaryAction>
                </ListItem>
                <ListItem button divider>
                  <ListItemText primary="Yearly" />
                  <ListItemSecondaryAction>256</ListItemSecondaryAction>
                </ListItem>
                <ListItem button divider>
                  <ListItemText primary="Youth" />
                  <ListItemSecondaryAction>56</ListItemSecondaryAction>
                </ListItem>
                <ListItem button divider>
                  <ListItemText primary="Woman" />
                  <ListItemSecondaryAction>43</ListItemSecondaryAction>
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Fundraising" />
                  <ListItemSecondaryAction>45</ListItemSecondaryAction>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Box>

        <Box>
          <Card>
            <CardHeader
              className={classes.title}
              title="CHECK OUT OUR GALLERY"
            />
            <CardContent>
              <Container>
                <Grid container justify="center" spacing={2}>
                  {[photo1, photo2, photo3, photo4, photo5, photo6].map(
                    (imgs, index) => (
                      <Grid
                        key={index}
                        item
                        md={4}
                        className={classes.gridItem}
                      >
                        <img className={classes.imgs} src={imgs} alt="" />
                      </Grid>
                    )
                  )}
                </Grid>
              </Container>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Grid>
  );
}

export default EventRight;
