import React, { useEffect, useState } from "react";
import { IndividualPlaceCard } from "./IndividualPlaceCard";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const PlaceCard = () => {
  const hotels = useSelector((state) => state.hotelFeature.hotels);
  const [allHotels, setAllHotels] = useState({});
  const [hotelName, setHotelName] = useState(null);
  const [rating, setRating] = useState("");
  const [link, setLink] = useState("");
  useEffect(() => {
    setAllHotels(hotels);
    setHotelName(hotels.name);
    setRating(hotels.rating);
    setLink(hotels.link);
    // console.log(hotels);
  }, [hotels]);
  // if (hotels !== {}) {
  //   setAllHotels(hotels);
  //   // console.log("Asd");
  // }
  return (
    <div className=" w-full ml-2 h-full">
      <IndividualPlaceCard hotelName={hotelName} rating={rating} link={link} />
      {/* {!hotelName ? (
        <div className=" w-full  rounded-lg my-3 bg-red-900 ">
          Enter Details to load hotels
        </div>
      ) : (
        <IndividualPlaceCard
          hotelName={hotelName}
          rating={rating}
          link={link}
        />
      )} */}
    </div>
  );
};
