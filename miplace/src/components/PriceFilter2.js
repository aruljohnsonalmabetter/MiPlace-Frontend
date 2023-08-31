import React, { useState } from "react";
import "../styles/PriceFilter.css";

export const PriceFilter2 = () => {
  const [rangeVal, setRangeVal] = useState(700);

  // the height of the box

  // This function is called when the first range slider changes
  const changeRangeVal = (event) => {
    setRangeVal(event.target.value);
  };
  //   console.log(rangeVal);
  return (
    <div className=" w-full p-2 ">
      {/* <div className="bg-green-900 w-full flex items-center justify-center flex-col"> */}
      {/* <div flex justify-center items-center flex-col> */}
      <p className="  p-1  text-bold">Prices</p>
      <div className="flex  items-center flex-col">
        <div className="">
          <label className="mx-2">Rs 500</label>
          <input
          className="w-48"
            type="range"
            onChange={changeRangeVal}
            min={500}
            max={20000}
            step={100}
            value={rangeVal}
          ></input>
        <label className="mx-2">Rs 20000</label>
        </div>
        <p className="rounded-md border-2 border-black p-1">Upto Price : {rangeVal}</p>
      </div>
    </div>
  );
};
