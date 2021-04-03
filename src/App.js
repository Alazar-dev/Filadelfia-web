import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./themes/Theme";

import Header from "./layouts/header/AppBar";
import Home from "./pages/Home";
import Footer from "./layouts/footer/Footer";
import { CssBaseline } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Router>
            <CssBaseline />
            <Header />
            <Switch>
              <Route path="/" component={Home} />
            </Switch>
            <Footer />
          </Router>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
