import React from "react";
import { Popularplace } from "../components/Popularplace";
import { MostSearchedLocations } from "../components/MostSearchedLocations";

import Testimonial from "../components/Testimonial.jsx";
import {API} from "../backend"
import HomeCard from "../components/HomeCard";

export const signup = () => {
  return fetch(`${API}/signup`, { method: "GET" })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

function Home() {

  console.log("API IS",process.env.REACT_APP_BACKEND);
  console.log("API IS",{signup});
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
