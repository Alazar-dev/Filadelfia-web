import { Box, createStyles, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Cross from "../../assets/Home/Our Vision/Cross.png";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
    cross: {
      alignItems: "center",
      textAlign: "center",
      paddingLeft: "10px",
      display: "flex",
    },
  })
);

function ContactTitle({ title }) {
  const classes = useStyles();
  return (
    <Box py={5} display="flex">
      <Typography variant="h4">{title}</Typography>
      <span className={classes.cross}>
        <img src={Cross} alt="Cross" />
      </span>
    </Box>
  );
}

export default ContactTitle;
