import React, { useEffect } from "react";
import { Popularplace } from "../components/Popularplace";
import { MostSearchedLocations } from "../components/MostSearchedLocations";

import Testimonial from "../components/Testimonial.jsx";
import { API } from "../backend";
import HomeCard from "../components/HomeCard";
import { useDispatch, useSelector } from "react-redux";

import { setEnteredHotelDetails } from "../redux-features/enteredHotelDetailsSlice";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Home");
    // dispatch(
    //   setEnteredHotelDetails({
    //     city:"",
    //     firstDay:"",
    //     secondDay:"",
    //     roomsGuests:"",
    //   })
    // );
  }, []);
  console.log("API IS", API);
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
