import React, { useState } from "react";
import { FavoritesPlaceCardComponent } from "../components/FavoritesPlaceCardComponent";

export const Favorites = () => {
  const [markedPlaces, setMarkedPlaces] = useState([]);
  return (
    <div className=" flex justify-center items-center flex-col">
      <div className="  w-10/12 mt-4">
        <div className="flex  items-center rounded-lg w-full  px-6 py-4 shadow-lg mb-6">
          <div className=" border-l-2	border-gray-400 pl-2">
            <p className="text-bold">Places</p>
            <p className="text-gray-400  ">
              {markedPlaces.length} marked
            </p>
          </div>
        </div>
        <div className="">
          <FavoritesPlaceCardComponent />
          <FavoritesPlaceCardComponent />
        </div>
      </div>
    </div>
  );
};
