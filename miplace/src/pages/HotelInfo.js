// TODO :All the Hotel info has to be added.

import React, { useEffect } from "react";
// import { Link } from 'react-router-dom';
import Reviews from "../components/Reviews.jsx";
import Overview from "../components/Overview.jsx";
import Imagegrid from "../components/Imagegrid.jsx";
import Availablerooms from "../components/Availablerooms.js";
import Amenities from "../components/Amenities.jsx";
import Location from "../components/Location.jsx";
import HotelNamebooking from "../components/HotelNamebooking.js";
// import { useSelector } from "react-redux/es/hooks/useSelector.js";
import Recommendations from "../components/Recommendations.js";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const HotelInfo = () => {
  const hotelObj = useSelector((state) => state.indiHotelInfoFeature);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(hotelObj);
    // console.log(hotelObj.currency);
  }, [hotelObj]);
  return (
    <div>
      <ToastContainer/>
      <HotelNamebooking
        hotelOBJ={hotelObj}
        hotel_id={hotelObj.hotel_id}
        hotelname={hotelObj.hotel_name}
        city={hotelObj.city}
        district={hotelObj.district}
        address={hotelObj.address}
        price={hotelObj.price_breakdown}
        currencyPrice={hotelObj.currencyPrice}
        currency={hotelObj.currency}
        url={hotelObj.main_photo_url}
        text="Download"
        review={hotelObj.review_score_word}
      />
      <Imagegrid img={hotelObj.main_photo_url} />
      <Overview website={hotelObj.webUrl} />
      <Availablerooms
        room="Superior room - 1 double bed or 2 twin beds"
        price={hotelObj.price_breakdown}
        // currency={hotelObj.currency}
        text="Book now"
      />
      <Amenities hotel_id={hotelObj.hotel_id} />
      <Location />

      <Recommendations
        district={hotelObj.district}
        hotelName={hotelObj.hotel_name}
      />
    </div>
  );
};

export default HotelInfo;
