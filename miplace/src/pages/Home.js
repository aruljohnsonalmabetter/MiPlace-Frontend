import React from "react";
import { Popularplace } from "../components/Popularplace";
import { MostSearchedLocations } from "../components/MostSearchedLocations";

import Testimonial from "../components/Testimonial.jsx";
import {API} from "../backend"
import HomeCard from "../components/HomeCard";



function Home() {

  console.log("API IS",API);
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
