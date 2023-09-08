import React, { useEffect, useState } from "react";
import { IndividualPlaceCard } from "./IndividualPlaceCard";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const PlaceCard = () => {
  const hotels = useSelector((state) => state.hotelFeature.hotels);
  let lowToHigh = useSelector((state) => state.filterFeature.lowToHigh);

  let hotel1 = hotels.map((obj1) => {
    return obj1;
  });
  let hotel2 = hotels.map((obj1) => {
    return obj1;
  });

  const loading = useSelector((state) => state.hotelFeature.loading);
  const error = useSelector((state) => state.hotelFeature.error);

  const [allHotels, setAllHotels] = useState([]);
  const [lowToHighHotels, setlowToHighHotels] = useState([]);
  const [highToLowHotels, sethighToLowHotels] = useState([]);
  const [finalHoteList, setfinalHoteList] = useState([]);
  const [DescHowItisSorted, setDescHowItisSorted] = useState(null);
  hotel1.sort(
    (a, b) =>
      a.price_breakdown.all_inclusive_price -
      b.price_breakdown.all_inclusive_price
  );
  hotel2.sort(
    (a, b) =>
      b.price_breakdown.all_inclusive_price -
      a.price_breakdown.all_inclusive_price
  );
  // let  = hotel1;
  // sethighToLowHotels(hotel1);
  // sethighToLowHotels(hotel2);
  // console.log(hotel1);
  // console.log(hotel2);
  useEffect(() => {
    setAllHotels(hotels);

    // hotel1.sort((a, b) => a.price_breakdown.all_inclusive_price - b.price_breakdown.all_inclusive_price);
    // hotel2.sort((a, b) => b.price_breakdown.all_inclusive_price - a.price_breakdown.all_inclusive_price);
    sethighToLowHotels(hotel1);
    sethighToLowHotels(hotel2);
    // console.log(hotel1);
    // console.log(hotel2);
    setfinalHoteList(lowToHigh === false ? hotel2 : hotel1);
    setDescHowItisSorted(lowToHigh === false ? "High to Low" : "Low to High");
  }, [hotels, loading, error, lowToHigh]);

  return (
    <div className=" w-full ml-2 h-full">
      <div className="w-full ">
        {loading && (
          <div className="text-3xl w-full  rounded-lg my-3  flex justify-center items-center p-4 text-bold">
            Loading the Hotel Info 🔃....
          </div>
        )}
        {!loading && error && (
          <div className="text-3xl w-full  rounded-lg my-3  flex justify-center items-center p-4 text-bold">
            Error in loading the data 🥹....
          </div>
        )}
        {hotels.length > 0 && (
          <div className="text-3xl w-full  rounded-lg my-2  flex justify-center items-center text-bold">
             {DescHowItisSorted} 📃....
          </div>
        )}
        {loading === false && !error && hotels.length === 0 ? (
          <div className="text-3xl w-full  rounded-lg my-3  flex justify-center items-center p-4 text-bold">
            Fill the form above to load hotel info 🛎️🏩....
          </div>
        ) : (
          finalHoteList.map((hotel) => {
            return (
              <div key={hotel.hotel_id}>
                <IndividualPlaceCard
                  Hotel_obj={hotel}
                  address={hotel.address}
                  city={hotel.city_trans}
                  district={hotel.district}
                  hotel_name={hotel.hotel_name}
                  main_photo_url={hotel.main_photo_url}
                  review_score={hotel.review_score}
                  review_score_word={hotel.review_score_word}
                  url={hotel.url}
                  price_breakdown={hotel.price_breakdown.all_inclusive_price}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
