import React from "react";
import { FaHotel } from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";

function Bookingreceipt({ hotel_name, firstDay, secondDay, noOfDays, url }) {
  return (
    <div class="flex my-[3rem] mx-[3.125rem]  ">
      <div className="bg-[#ECFAFF]  w-[15.375rem] h-[18rem]   p-[2rem]">
        <div className="mx-auto my-auto gap-auto w-[11.75rem] h-[3.625] ">
          <h1 className="font-semibold text-[2rem]">{firstDay}</h1>
          <p className="font-medium text-[0.75rem]">Check-In</p>
        </div>

        <div className=" mx-auto flex justify-around content-around my-[1rem]">
          <div>
            {" "}
            <FaHotel className="w-[2rem] h-[2rem]" />
          </div>
          <div className="w-[4.4375rem] h-[1.5625rem] rounded-lg border-2     `border-{#A1A1A1}` text-center ">
            {noOfDays} Night
          </div>
        </div>

        <div className="mx-auto my-auto w-[11.75rem] h-[3.625] ">
          <h1 className="font-semibold text-[2rem]">{secondDay}</h1>
          <p className="font-medium text-[0.75rem]">Check-out</p>
        </div>
      </div>

      <div className="w-[49.1875rem] h-[19.3125rem] ">
        <div className="flex justify-between p-[2rem] h-[6rem] bg-[#1E91B6]">
          <div className="flex">
            <h2>{hotel_name}</h2>
            {/* <img src={url} /> */}
          </div>

          <div>
            <p>Superior room - 1 double bed or 2 twin beds</p>
          </div>
        </div>

        <div className="flex justify-around p-[2rem]">
          <div className="flex">
            <AiFillClockCircle className="mt-4 mr-4 " />
            <div>
              <p>check in</p>
              <p>time</p>
            </div>
          </div>
          <div className="flex">
            <AiFillClockCircle className="mt-4 mr-4" />
            <div>
              <p>check in</p>
              <p>time</p>
            </div>
          </div>
          <div className="flex">
            <FaHotel className="mt-4 mr-4" />
            <div>
              <p>check in</p>
              <p>time</p>
            </div>
          </div>
        </div>

        <div className="px-[1.5rem]">
          <h1 className="text-3xl font-bold"> Booking ID</h1>
          <h2>987423492402301235434</h2>
        </div>
      </div>

      <div className="w-[19.9375rem] h-[19.3125rem] ">
        <h1>Hotel Image</h1>
        <img src={url} />
      </div>

      <div>
        <h1 className=" border-2 border-[#A1A1A1] rounded-full text-sm w-[6rem] mt-[7rem] px-3"  >2 days</h1>
        <p>{noOfDays}</p>
      </div>
    </div>
  );
}

export default Bookingreceipt;
