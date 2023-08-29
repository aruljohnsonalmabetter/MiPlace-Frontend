import React from 'react'
import { FooterComponent } from "../components/FooterComponent";
import { HeaderComponent } from "../components/HeaderComponent";
import { Popularplace } from "../components/Popularplace";



import Testimonial from "../components/Testimonial.jsx";

import HomeCard from "../components/HomeCard";

import { MostSearchedLocations } from '../components/MostSearchedLocations';
function Home() {
  return (
    <div>
      <HeaderComponent />
      <HomeCard />
      
      <MostSearchedLocations/>
      <Popularplace/>
        <Testimonial/>
  

      <FooterComponent/> </div>
  )
}

export default Home;