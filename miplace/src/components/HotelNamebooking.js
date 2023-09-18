import React from "react";
import Button from "./Button";
import { BiSolidLocationPlus } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { BsFillShareFill } from "react-icons/bs";
import Rating from "./Rating";
import "./styles.css";
import { useDispatch } from "react-redux";
import { addFavHotel } from "../redux-features/userSlice";

const HotelNamebooking = ({
  // currency,
  hotel_id,
  hotelOBJ,
  hotelname,
  city,
  price,
  text,
  review,
  address,
  district,
}) => {
  const dispatch = useDispatch();

  const handleAddtoFav = () => {
    dispatch(addFavHotel(hotelOBJ));
    // console.log("favHotel : ", favHotel);
    console.log(hotelOBJ);
  };
  return (
    <div class="flex justify-between p-8 text-black rounded">
      <div>
        <h1 className="font-[Montserrat] text-[2.125rem] font-semibold">
          {hotelname}
        </h1>

        <h3 className=" flex font-[Montserrat]  font-medium justify-center items-center">
          <BiSolidLocationPlus className="mr-2" />
          {address}, {city}
        </h3>
        {/* <h3 className=" flex font-[Montserrat]  font-medium">
          <BiSolidLocationPlus /> {district}
        </h3> */}

        <div className="flex gap-[1rem] ">
          <Rating value="5" className="inline " />

          <p>{review || "5"} </p>
        </div>
      </div>
      <div className="space-y-2">
        <h1 className="font-[Montserrat] text-[2.125rem] font-bold text-[#1E91B6] text-black">
          {price}/night
          {/* {formatCurrency(price, currency)}/night */}
        </h1>
        <div id="icons" className="flex justify-between space-x-2">
          {/* <FcLike className="text-xl hover:scale-75 cursor-pointer transition ease-in-out delay-250" /> */}
          {/* <button
            className="border-2 border-black p-2  rounded-md m-2"
            onClick={handleAddtoFav}
          >
            <FcLike className="text-2xl hover:scale-75    transition ease-in-out delay-250" />
          </button> */}
          <div className="border-2 border-black inline-block flex justify-center h-6 px-1 ">
            <BsFillShareFill className="pt-2 snap-center" /></div>
          <Button className="md:text-sm inline-block" text={text} />
        </div>
      </div>
    </div>
  );
};

export default HotelNamebooking;
