import React from "react";

import { Popularplace } from "../components/Popularplace";

import Testimonial from "../components/Testimonial.jsx";

import HomeCard from "../components/HomeCard";

import { MostSearchedLocations } from "../components/MostSearchedLocations";
function Home() {
  return (
    <div>
      <HomeCard />
      <MostSearchedLocations />
      <Popularplace />
      <Testimonial />
    </div>
  );
}

export default Home;
