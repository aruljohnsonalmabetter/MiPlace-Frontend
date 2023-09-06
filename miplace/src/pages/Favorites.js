import React, { useEffect, useState } from "react";
import { FavoritesPlaceCardComponent } from "../components/FavoritesPlaceCardComponent";
import { useSelector } from "react-redux";

export const Favorites = () => {
  let favHotel = useSelector((state) => state.userFeature.favHotel);
  const [markedPlaces, setMarkedPlaces] = useState([]);

  useEffect(() => {
    setMarkedPlaces(favHotel);
    console.log(favHotel);
  }, [favHotel]);
  return (
    <div className=" flex justify-center items-center flex-col">
      <div className="  w-10/12 mt-4">
        <div className="flex  items-center rounded-lg w-full  px-6 py-4 shadow-lg mb-6">
          <div className=" border-l-2	border-gray-400 pl-2">
            <p className="text-bold">Places</p>
            <p className="text-gray-400  ">
              {markedPlaces?.length || 0} marked
            </p>
          </div>
        </div>
        <div className="">
          <FavoritesPlaceCardComponent/>
          {/* {favHotel == undefined ? <div>Bad</div> : <div>Good</div>} */}
          {/* {favHotel!=undefined && favHotel.length === 0 ? (
            <div className="text-3xl w-full  rounded-lg my-3  flex justify-center items-center p-4 text-bold">
              Add Hotels to the fav list🛎️🏩....
            </div>
          ) : (
            favHotel.map((hotel) => {
              return (
                <div key={hotel.hotel_id}>
                  <FavoritesPlaceCardComponent
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
          )} */}
        </div>
      </div>
    </div>
  );
};
