import React, { useEffect } from "react";
// import { Link } from 'react-router-dom';
import Reviews from "../components/Reviews.jsx";
import Overview from "../components/Overview.jsx";
import Imagegrid from "../components/Imagegrid.jsx";
import Availablerooms from "../components/Availablerooms.js";
import Amenities from "../components/Amenities.jsx";
import Location from "../components/Location.jsx";
import HotelNamebooking from "../components/HotelNamebooking.js";
import { useSelector } from "react-redux/es/hooks/useSelector.js";
const HotelInfo = () => {
  const hotelObj = useSelector((state) => state.indiHotelInfoFeature);

  useEffect(() => {
    console.log(hotelObj);
  }, [hotelObj]);
  return (
    <div>
      <HotelNamebooking
        hotelname={hotelObj.hotel_name}
        city={hotelObj.city}
        address={hotelObj.address}
        price={hotelObj.price_breakdown}
        text="Download"
        review={hotelObj.review_score_word}
      />
      <Imagegrid img={hotelObj.main_photo_url}/>
      <Overview />
      <Availablerooms
        room="Superior room - 1 double bed or 2 twin beds"
        price={hotelObj.price_breakdown}
        text="Book now"
      />
      <Amenities />
      <Location />
      <Reviews />
    </div>
  );
};

export default HotelInfo;
