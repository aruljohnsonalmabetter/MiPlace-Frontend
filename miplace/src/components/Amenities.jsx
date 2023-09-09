import React, { useEffect, useState } from "react";
import "../styles/PriceFilter.css";
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
          'X-RapidAPI-Key': '61cb1a08f0mshd64d9d9a395d1dbp1298acjsnecd88864da94',
          'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        const newSet=new Set(response.data);
        const newArray= Array.from(newSet)
        setFacilites(newArray);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    loadFacilities()
  }, [hotel_id])
  return (
    <div className=" w-full p-2 ">
      {/* <div className="bg-green-900 w-full flex items-center justify-center flex-col"> */}
      <p className=" p-1 text-bold">Facilities</p>
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