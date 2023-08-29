import React from "react";
import { FilterTabComponent } from "../components/FilterTabComponent";
import { PlaceCard } from "../components/PlaceCard";
import { PlaceSearchBarComponent } from "../components/PlaceSearchBarComponent";

function SearchResults() {
  return (
    <div className="h-full p-6 ">
      <div className="bg-green-900">
        <div className="mb-8">
          <PlaceSearchBarComponent />
        </div>
        <div className="flex justify-center items-center">
          <div className=" flex justify-between items-center w-11/12">
            {/* <div className=" flex justify-between items-center "> */}
            <FilterTabComponent />
            <PlaceCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
