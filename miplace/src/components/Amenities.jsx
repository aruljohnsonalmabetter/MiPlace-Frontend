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
          'X-RapidAPI-Key': "7743bfcba1msha1fa62656925329p1db8acjsnca94aaa717ba",
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
    <div className=" rounded w-full p-8 h-600 font-mullish ">
      {/* <div className="bg-green-900 w-full flex items-center justify-center flex-col"> */}
      <h1 className="  text-2xl  font-bold mb-4 font-mullish">Facilities</h1>
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