import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fff",
      default: "#F9A41E",
      dark: "#424242",
      darkest: "#000000",
      light: "#eceff1",
    },
    secondary: {
      main: "#F9A41E",
    },
  },
  typography: {
    fontFamily: "Aria",
    fontSize: 12,
    h1: {
      fontFamily: "Arial",
      fontSize: 28,
      textAlign: "center",
      marginTop: 50,
      marginBottom: 30,
      fontWeight: 600,
      padding: 25,
    },
    h2: {
      fontFamily: "Arial",
      fontSize: 20,
      marginTop: 50,
      marginBottom: 30,
      fontWeight: 600,
    },
    h3: {
      fontFamily: "Arial",
      fontSize: 20,
      textAlign: "center",
      fontWeight: 600,
      "@media (max-width: 900px)": {
        fontSize: 15,
        textAlign: "center",
        padding: 5,
      },
    },
    subtitle1: {
      textAlign: "center",
      fontWeight: 600,
      fontSize: 18,
    },
    body1: {
      textAlign: "center",
    },
    caption: {
      textAlign: "center",
      fontSize: 12,
    },
    paragraph: {
      textAlign: "center",
    },
  },
  spacing: 2,
  props: {
    MuiButton: {
      size: "medium",
    },
    MuiFilledInput: {
      margin: "dense",
    },
    MuiFormControl: {
      margin: "dense",
    },
    MuiFormHelperText: {
      margin: "dense",
    },
    MuiIconButton: {
      size: "small",
    },
    MuiInputBase: {
      margin: "dense",
    },
    MuiInputLabel: {
      margin: "dense",
    },
    MuiListItem: {
      dense: true,
    },
    MuiOutlinedInput: {
      margin: "dense",
    },
    MuiFab: {
      size: "small",
    },
    MuiTable: {
      size: "small",
    },
    MuiTextField: {
      margin: "dense",
    },
    MuiToolbar: {
      variant: "dense",
    },
  },
});

export default theme;