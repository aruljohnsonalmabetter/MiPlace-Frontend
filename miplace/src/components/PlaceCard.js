import React, { useEffect, useState } from "react";
import { IndividualPlaceCard } from "./IndividualPlaceCard";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const PlaceCard = () => {
  const hotels = useSelector((state) => state.hotelFeature.hotels);
  const loading = useSelector((state) => state.hotelFeature.loading);
  const error = useSelector((state) => state.hotelFeature.error);

  const [allHotels, setAllHotels] = useState([]);
  const [lowToHighHotels, setlowToHighHotels] = useState([]);
  const [highToLowHotels, sethighToLowHotels] = useState([]);
  // const [hotelName, setHotelName] = useState(null);
  // const [rating, setRating] = useState("");
  // const [link, setLink] = useState("");
  useEffect(() => {
    setAllHotels(hotels);
    // let hotel1 = hotels;
    // let hotel2 = hotels;
    // setHotelName(hotels.name);
    // setRating(hotels.rating);
    // setLink(hotels.link);
    // sethighToLowHotels(hotel1.sort(()=> (a, b) => a - b));
    // sethighToLowHotels(hotel2.sort((a, b) => b - a));
    // console.log(hotels);
    // console.log(loading);
    // console.log(error);
  }, [hotels, loading, error]);

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

        {loading === false && !error && hotels.length === 0 ? (
          <div className="text-3xl w-full  rounded-lg my-3  flex justify-center items-center p-4 text-bold">
            Fill the form above to load hotel info 🛎️🏩....
          </div>
        ) : (
          hotels.map((hotel) => {
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
        {/* {loading==false ||
          (error!=null  && (
            <>
              {hotels.map((hotel) => {
                return (
                  <IndividualPlaceCard
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
                );
              })}
            </>
          ))} */}
      </div>
    </div>
  );
};
