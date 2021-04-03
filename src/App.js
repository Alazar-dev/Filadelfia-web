import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./themes/Theme";

import Home from "./pages/Home";
import Sermons from "./pages/sermons/Sermons";
import PrayerWall from "./pages/prayerwall/PrayerWall";
import Events from "./pages/events/Events";
import Gallery from "./pages/gallery/Gallery";
import Contact from "./pages/contact/Contact";

import Header from "./layouts/header/AppBar";
import Footer from "./layouts/footer/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <ThemeProvider theme={theme}>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/sermons" component={Sermons} />
              <Route exact path="/prayerwall" component={PrayerWall} />
              <Route exact path="/events" component={Events} />
              <Route exact path="/gallery" component={Gallery} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
            <Footer />
          </ThemeProvider>
        </Router>
      </div>
    );
  }
}

export default App;
