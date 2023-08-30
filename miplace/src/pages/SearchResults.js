import React from "react";
import { FilterTabComponent } from "../components/FilterTabComponent";
import { PlaceCard } from "../components/PlaceCard";
import { PlaceSearchBarComponent } from "../components/PlaceSearchBarComponent";

function SearchResults() {
  return (
    <div className="h-full p-6 ">
      <div className="">
        <div className="mb-8">
          <PlaceSearchBarComponent />
        </div>
        <div className="flex justify-center items-center">
          <div className=" flex justify-between items-start w-11/12">
            {/* <div className=" flex justify-between items-center "> */}
            <FilterTabComponent />
            <div className=" flex justify-center items-center flex-col">
              <PlaceCard />
              <button className="bg-black text-white rounded-md w-full p-3 transition ease-in-out delay-250  hover:bg-gray-800 duration-300 text-bold  ">
                Show more results
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
