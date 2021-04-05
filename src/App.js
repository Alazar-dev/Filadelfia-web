import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./themes/Theme";
import { CssBaseline, LinearProgress } from "@material-ui/core";

import Footer from "./layouts/footer/Footer";
import Header from "./layouts/header/AppBar";

const Home = lazy(() => import("./pages/home/Home"));
const Sermons = lazy(() => import("./pages/sermons/Sermons"));
const PrayerWall = lazy(() => import("./pages/prayerwall/PrayerWall"));
const Events = lazy(() => import("./pages/events/Events"));
const Gallery = lazy(() => import("./pages/gallery/Gallery"));
const Contact = lazy(() => import("./pages/contact/Contact"));

class App extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Suspense fallback={<LinearProgress color="primary" />}>
            <Router>
              <CssBaseline />
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
            </Router>
          </Suspense>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
