import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Availablerooms = ({ room, price, text }) => {
  return (
    <>
      <div className="max-w-1409px mx-auto p-4 h-600px border border-gray-300  rounded">
        <div>
          <h1 className="text-2xl font-bold mb-4 font-mullish">
            Available rooms
          </h1>
        </div>

        <div class="flex justify-between my-2">
          <div class="flex font-mullish">
            <img />
            <p className="text-bold">{room}</p>
          </div>
          <div class="flex space-x-3 font-bold font-mullish">
            <h2>₹{price}/night</h2>
            <Link to="/bookingInfoandBill">
              <Button text={text} />{" "}
            </Link>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Availablerooms;
