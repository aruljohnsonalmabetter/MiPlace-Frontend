import React from "react";
import place from "../images/Mars-Orbit-Mission.jpg";
// import { BiSolidLocationPlus } from 'react-icons/fa';
import { BiSolidLocationPlus } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { BsFillCupFill } from "react-icons/bs";
import Rating from "./Rating";

export const IndividualPlaceCard = () => {
  return (
    <div className=" w-full  rounded-lg my-3">
      {/* Divide into two parts */}
      <div className="flex items-center justify-center w-full  ">
        {/* IMG */}
        <div>
          <img
            src={place}
            alt="asd"
            className="overflow-none h-[310px] w-[340px] object-cover	rounded-md"
          />
        </div>
        <div className="flex justify-center items-center flex-col  ">
          {/* Written */}
          <div className="flex justify-center items-end w-full ">
            {/* Hotel info */}
            <div className=" m-2 w-9/12  ">
              <p className="text-3xl text-bold ">
                {/* {HotelName} */}
                Lemon Tree Premier Pune
              </p>
              <p className="text-sm">
                {/* {HotelAddress} */}
                <BiSolidLocationPlus className="inline text-lg" /> City Center,
                15 & 15A, Connaught Rd, Modi Colony, Pune, Maharashtra 411001{" "}
                <div className="flex justify-between items-center text-bold">
                  <div className="flex justify-between items-center">
                    <div className="flex justify-center items-center ">
                      <Rating value="5" className="inline " />
                      <p className="inline   ">5 Star Hotel</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <BsFillCupFill className="mr-2" />
                    <p className="inline   "> 20+ Aminities</p>
                  </div>
                </div>
                <div className="flex  items-center my-4">
                  <p className="border-2 mr-4 inline border-sky-700 bg-white p-2 rounded-md  transition ease-in-out delay-250  hover:bg-sky-300 duration-300 text-bold  	">
                    4.2
                  </p>
                  <p className="text-lg">
                    <p className="text-bold  inline"> Very Good</p> 371 reviews
                  </p>
                </div>
              </p>
            </div>

            {/* Price Part */}
            <div className="m-2  p-2 text-right ">
              <p> starting from</p>
              <p className="text-lg text-bold text-blue-600 ">₹ 2349/night</p>
              <p className="">excl. tax</p>
            </div>
          </div>

          <div className=" flex justify-evenly items-center w-full">
            <div className="border-2 border-black p-2  rounded-md m-2">
              <FcLike className="text-2xl hover:scale-75   cursor-pointer transition ease-in-out delay-250" />
            </div>
            <button className="bg-blue-800 w-full p-3 bordeer-none  mr-4 inline rounded-md text-white transition ease-in-out delay-250  hover:bg-blue-700 duration-300 text-bold  ">
              View Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
