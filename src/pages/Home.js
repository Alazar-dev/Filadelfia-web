import { Box } from "@material-ui/core";
import React from "react";
import CoverImage from "../components/home/CoverImage";
import Donate from "../components/home/Donate";
import LatestSermon from "../components/home/LatestSermon";
import SermonEvents from "../components/home/latestSermons";
import OurVisions from "../components/home/OurVisions";

function Home() {
  return (
    <Box>
      <CoverImage />
      <LatestSermon />
      <OurVisions />
      <Donate />
      <SermonEvents />
    </Box>
  );
}

export default Home;
