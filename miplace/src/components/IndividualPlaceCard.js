import React from "react";
import place from "../images/Mars-Orbit-Mission.jpg";
// import { BiSolidLocationPlus } from 'react-icons/fa';
import { BiSolidLocationPlus } from "react-icons/bi";
import Rating from "./Rating";

export const IndividualPlaceCard = () => {
  return (
    <div className="bg-green-400 w-full">
      {/* Divide into two parts */}
      <div className="flex items-center justify-center w-full bg-red-900">
        <div className="bg-red-900">
          <img
            src={place}
            alt="asd"
            className="overflow-none h-[310px] w-[340px] object-cover	"
          />
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-red-400 m-2">
            <p className="text-3xl text-bold">
              {/* {HotelName} */}
              Lemon Tree Premier Pune
            </p>
            <p className="text-sm">
              {/* {HotelAddress} */}
              <BiSolidLocationPlus className="inline text-lg" /> City Center, 15
              & 15A, Connaught Rd, Modi Colony, Pune, Maharashtra 411001{" "}
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center">
                  <Rating value="5" className="inline " />
                  <p className="inline ">5 Star Hotel</p>
                </div>
                <p className="inline ">20+ Aminities</p>
              </div>
              <div className="flex  items-center my-4">
                <p className="border-2 mr-4 inline border-sky-700 bg-white p-2 rounded-md  transition ease-in-out delay-250  hover:bg-sky-300 duration-300	">
                  4.2
                </p>
                <p className="text-lg">
                  <p className="text-bold  inline"> Very Good</p> 371 reviews
                </p>
              </div>
            </p>
          </div>
          <div className="m-2 bg-blue-200 p-2">
            <p > starting from</p>
            <p className="text-lg text-bold text-[##3799B8] inline">₹ 2349/night</p>
            <p className="">excl. tax</p>
          </div>
        </div>
      </div>
    </div>
  );
};
