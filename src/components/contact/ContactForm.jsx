import {
  Box,
  Button,
  createStyles,
  Grid,
  makeStyles,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import ContactTitle from "./ContactTitle";
import firebase from "../../config/firebaseConfig";
import { useCollectionRef, useDocumentAdd } from "@epha123/fire-hooks";
import { Alert, AlertTitle } from "@material-ui/lab";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
    button: {
      background: theme.palette.primary.main,
      color: theme.palette.text.secondary + " !important",
      margin: "10px 20px",
    },
    input: {
      margin: "10px 20px",
      color: theme.palette.text.primary,
      background: theme.palette.secondary.main,
      "& .MuiFormLabel-root": {
        color: "#999999",
        letterSpacing: "0.42px",
      },
    },
    textarea: {
      maxWidth: "80%",
    },
  })
);

function ContactForm() {
  const classes = useStyles();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [active, setactive] = useState(false);
  firebase.firestore();

  const { loading, error, handleAdd } = useDocumentAdd();
  const addContact$ = useCollectionRef("contacts");

  const handleChange = (e) => {
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { lastName, firstName, email, message } = values;
    if (lastName !== "" && firstName !== "" && email !== "" && message !== "") {
      handleAdd(values, addContact$.doc());
      console.log(values);
    } else {
      setactive(true);
    }
  };
  return (
    <Grid item lg={8}>
      <ContactTitle title="GET IN TOUCH" />
      <Box py={2}>
        {error && (
          <Alert severity="error" title="Error" variant="filled">
            {error.message}
          </Alert>
        )}
        {!error && loading === false && (
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            Successfully Sent!
          </Alert>
        )}
        <form>
          <div>
            <TextField
              required
              variant="outlined"
              label="First Name"
              name="firstName"
              error={values.firstName === "" && active}
              onChange={handleChange}
              className={classes.input}
              placeholder="Your First Name"
            />
            <TextField
              required
              error={values.lastName === "" && active}
              variant="outlined"
              label="Last Name"
              name="lastName"
              onChange={handleChange}
              className={classes.input}
              placeholder="Your Last Name"
            />
          </div>
          <TextField
            required
            variant="outlined"
            label="Email"
            error={values.email === "" && active}
            name="email"
            onChange={handleChange}
            className={classes.input}
            type="email"
            placeholder="test@example.com"
          />
          <div className={classes.textarea}>
            <TextField
              required
              variant="outlined"
              label="Message"
              rows={10}
              multiline
              error={values.message === "" && active}
              name="message"
              onChange={handleChange}
              className={classes.input}
              fullWidth
              placeholder="please write your message"
            />
          </div>
          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={loading}
            className={classes.button}
          >
            Send Message
          </Button>
        </form>
      </Box>
    </Grid>
  );
}

export default ContactForm;
