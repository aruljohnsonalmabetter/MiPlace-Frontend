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
      <div className=" max-w-1409px mx-auto p-8 h-600px font-mullish">
        <div>
          <h1 className=" rounded inline-block text-2xl font-bold mb-4 font-mullish">
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
      <hr class="h-1px my-8 bg-black"></hr>
    </>
  );
};

export default Availablerooms;
