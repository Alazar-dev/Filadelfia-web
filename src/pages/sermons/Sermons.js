import {
    Box,
    Grid,
    Typography,
    InputBase,
    List,
    ListItem,
  } from "@material-ui/core";
  import { makeStyles, fade } from "@material-ui/core/styles";
  
  import GalleryRow from "../../components/gallery/GalleryRow";
  import GalleryCheckout from "../../components/gallery/GalleryCheckout";
  
  import headerImg from "../../assets/Prayer Wall/img.png";
  import LatestSermonsCard from "../../components/cards/LatestSermonsCard";
  
  const useStyles = makeStyles((theme) => ({
    headerImg: {
      width: '100%'
    },
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
      <div>
        <Box bgcolor="primary.dark" color="primary.light">
          <Typography align="center" variant="h5">LISTEN TO SERMONS</Typography>
        </Box>
        <Grid justify="center" container spacing={2}>
          <Grid item xs={12} md={6}>
            <img src={headerImg} alt="" />
            <LatestSermonsCard />
          </Grid>
          <Grid className={classes.mobileView} item xs={2}>
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
      </div>
    );
  };
  
  export default SermonsPage;