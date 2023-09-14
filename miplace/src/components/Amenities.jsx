import React, { useEffect, useState } from "react";
import "../styles/PriceFilter.css";
import Location from "./Location.jsx";
import axios from "axios";
const Amenities = ({ hotel_id }) => {
  const [facilites, setFacilites] = useState([]);

  useEffect(() => {
    const loadFacilities = async () => {

      const options = {
        method: 'GET',
        url: 'https://apidojo-booking-v1.p.rapidapi.com/properties/get-facilities',
        params: {
          hotel_ids: hotel_id,
          languagecode: 'en-us'
        },
        headers: {
          'X-RapidAPI-Key': '6dfae3dcc5msh4f874cfe28d4357p198f92jsneb96c8cfa217',
          'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        const newSet = new Set(response?.data);
        const newArray = Array.from(newSet)
        setFacilites(newArray);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    loadFacilities()
  }, [hotel_id])
  return (
    <div className="border-2 rounded w-full p-4 h-600 font-mullish bg-gradient-to-r from-gray-500 via-black-500">
      {/* <div className="bg-green-900 w-full flex items-center justify-center flex-col"> */}
      <h1 className=" bg-cyan-500 shadow-lg inline-block shadow-cyan-500/50 rounded text-white text-2xl  font-bold mb-4 font-mullish hover:shadow-indigo-500/40">Facilities</h1>
      <div className="price-input  flex  flex-col">
        <div className="">
          {facilites.map((indiFac) => {
            return (<p key={indiFac.facilitytype_id} htmlFor="" className="block m-2">{indiFac?.facilitytype_name}</p>)
          })}
        </div>
      </div>
    </div>
  );
};

export default Amenities