import React from 'react'
import Reviews from '../components/Reviews.jsx'
import Overview from '../components/Overview.jsx'
import Imagegrid from '../components/Imagegrid.jsx'
import Availablerooms from '../components/Availablerooms.js'
import Amenities from '../components/Amenities.jsx'
import Location from '../components/Location.jsx'
function HotelInfo() {
  return (
    <div>
    <Imagegrid/>
      <Overview/>
      <Availablerooms/>
      <Amenities/>
      <Location/>
     <Reviews/>
    </div>
  )
}

export default HotelInfo