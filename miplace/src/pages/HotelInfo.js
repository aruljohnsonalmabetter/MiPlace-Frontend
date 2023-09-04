import React from 'react'
// import { Link } from 'react-router-dom';
import Reviews from '../components/Reviews.jsx'
import Overview from '../components/Overview.jsx'
import Imagegrid from '../components/Imagegrid.jsx'
import Availablerooms from '../components/Availablerooms.js'
import Amenities from '../components/Amenities.jsx'
import Location from '../components/Location.jsx'
import HotelNamebooking from '../components/HotelNamebooking.js'

const HotelInfo =() => {
  return (
    <div>
    <HotelNamebooking
     hotelname="Lemon Tree Premier Pune"
     city="City Center, 15 & 15A, Connaught Rd, Modi Colony, Pune, Maharashtra 411001"
     price="₹ 2349"
     text="Download"
    />
    <Imagegrid/>
      <Overview/>
      <Availablerooms
        room="Superior room - 1 double bed or 2 twin beds"
        price="₹2450"
        text="Book now"
      />
      <Amenities/>
      <Location/>
     <Reviews/>
    </div>
  )
}

export default HotelInfo