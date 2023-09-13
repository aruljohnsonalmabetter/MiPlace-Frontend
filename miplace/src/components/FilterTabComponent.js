import { PriceFilter } from "./PriceFilter";
import { PlaceSearchBarRating } from "./PlaceSearchBarRating";
import { Freebies } from "./Freebies";
import { Amenities } from "./Amenities";
import { PriceFilter2 } from "./PriceFilter2";

export const FilterTabComponent = () => {
  return (
    <div className=" sticky w-[300px] bg-gray-200 m-3 p-3 rounded-lg">
      <div className="  p-2 w-full min-w-max	text-start">
        <div className="  flex   flex-col">
          <h2 className=" text-bold text-3xl border-b-2 border-b-black pb-2 ">Filters</h2>
          <div className="text-left  flex  items-center flex-col">
            {/* <div className="flex justify-center items-center flex-row">
            <p>Price</p>
            <input
              type="text"
              value={rangeVal}
              onChange={(e) => {
                setRangeVal(+e.target.value);
              }}
            />
            <input
              id="small-range"
              type="range"
              value={rangeVal}
              min="500"
              max="20000"
              onChange={(e) => setRangeVal(e.target.value)}
              class="w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"
            />
          </div> */}
            {/* <AccordionPrice title="Accordion #1" /> */}
            <PriceFilter2 />
            <hr />
            {/* <PlaceSearchBarRating /> */}
            <hr />
            <Freebies />
            <hr />
            {/* <Amenities /> */}

            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};
