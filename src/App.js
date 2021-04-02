import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from './themes/Theme'

import Header from "./layouts/header/AppBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <ThemeProvider theme={theme}>
            <Header />
            <Switch>
              <Route path="/" component={Home} />
            </Switch>
            <Footer />
          </ThemeProvider>
        </Router>
      </div>
    );
  }
}

export default App;
