import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import "./styles.css";
const Availablerooms = ({  room, price, text }) => {
  // function formatCurrency(amount, currencyCode) {
  //   // Create a formatter based on the currency code
  //   const formatter = new Intl.NumberFormat(undefined, {
  //     style: "currency",
  //     currency: currencyCode,
  //   });

  //   // Format the amount
  //   return formatter.format(amount);
  // }
  return (
    <>
      <div className="border-2 rounded bg-gradient-to-r from-gray-500 via-lightgray-500 max-w-1409px mx-auto p-4 h-600px  border-gray-300  rounded font-mullish">
        <div>
          <h1 className="bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded inline-block text-white text-2xl font-bold mb-4 font-mullish hover:shadow-indigo-500/40">
            Available rooms
          </h1>
        </div>

        <div class="flex justify-between my-2">
          <div class="flex font-mullish">
            <img />
            <p className="text-bold text-xl ">{room}</p>
          </div>
          <div id="available"class="flex space-x-3 font-bold font-mullish text-xl">
            <h2>{price}/night</h2>
            {/* <h2>{formatCurrency(price, currency)}/night</h2> */}
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
