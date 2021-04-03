import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#F9A41E",
      dark: "#252525",
      light: "#eceff1",
    },
    background: {
      default: "#eceff1",
    },
    secondary: {
      main: "#fff",
      dark: "#434343",
      light: "#eceff1",
    },
    text: {
      primary: "#434343",
      secondary: "#ffff",
    },
  },
});

export default theme;
