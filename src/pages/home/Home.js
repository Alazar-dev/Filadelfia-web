import { Box } from "@material-ui/core";
import React from "react";
import CoverImage from "../../components/home/CoverImage";
import Donate from "../../components/home/Donate";
import Gallery from "../../components/home/Gallery";
import LatestSermon from "../../components/home/LatestSermon";
import SermonEvents from "../../components/home/latestSermons/SermonEvents";
import OurVisions from "../../components/home/OurVisions";
import Savior from "../../components/home/Savior";
import Services from "../../components/home/Services";
import Testimony from "../../components/home/Testimony";

function Home() {
  return (
    <Box>
      <CoverImage />
      <LatestSermon />
      <OurVisions />
      <Donate />
      <SermonEvents />
      <Savior />
      <Gallery />
      <Services />
      <Testimony />
    </Box>
  );
}

export default Home;
