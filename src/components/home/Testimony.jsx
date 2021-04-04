import {
  Box,
  Container,
  createStyles,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      background: "#ffffff 0% 0% no-repeat padding-box",
      height: "30vh",
    },
    qoute: {
      color: theme.palette.primary.main,
      fontSize: "60px",
      lineHeight: "72px",
      fontWeight: "bold",
    },
    text: {
      fontSize: "22px",
      lineHeight: "40px",
      textAlign: "center",
      paddingBottom: "10px",
    },
    author: {
      fontSize: "22px",
      lineHeight: "19px",
      textAlign: "center",
    },
  })
);

function Testimony() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          py={5}
          px={5}
          className={classes.root}
        >
          <Typography variant="body1" className={classes.text}>
            <span className={classes.qoute}>“</span> It's amazing to me the
            number of people who will volunteer to help at <br /> church but
            won't lift a finger to help at home!
            <span className={classes.qoute}> “ </span>
          </Typography>
          <Typography className={classes.author}>-Abebe Kebede</Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Testimony;
