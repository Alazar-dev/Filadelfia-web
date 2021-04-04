import {
  Box,
  Breadcrumbs,
  createStyles,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      background: "#5D5D5D 0% 0% no-repeat padding-box;",
    },
    title: {
      fontSize: "30px",
      lineHeight: "24px",
      letterSpacing: "0px",
      fontWeight: "bold",
      textTransform: "uppercase",
    },
    path: {
      fontSize: "14px",
      lineHeight: "28px",
      letterSpacing: "0.42px",
      fontWeight: "bold",
      textTransform: "uppercase",
      textDecoration: "none",
    },
  })
);

function BreadcumbHero({ title }) {
  const path = useLocation();
  const [activePath, setActivePath] = useState();
  const classes = useStyles();
  useEffect(() => {
    setActivePath(path.pathname.split("/")[1]);
  }, [path.pathname]);
  return (
    <Box className={classes.root} py={7}>
      <Typography variant="h3" className={classes.title} color="textSecondary">
        {title}
      </Typography>
      <Box bgcolor="primary.main" mt={3} px={3}>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography
            className={classes.path}
            color="textSecondary"
            component={Link}
            variant="body1"
            to="/"
          >
            Home
          </Typography>
          <Typography
            variant="body1"
            className={classes.path}
            color="textSecondary"
          >
            {activePath}
          </Typography>
        </Breadcrumbs>
      </Box>
    </Box>
  );
}

export default BreadcumbHero;
