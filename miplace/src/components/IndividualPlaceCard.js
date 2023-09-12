import React from "react";
import { BiSolidLocationPlus } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { BsFillCupFill } from "react-icons/bs";
import Rating from "./Rating";
import { useDispatch, useSelector } from "react-redux";
import { addFavHotel } from "../redux-features/userSlice";
import { useNavigate } from "react-router-dom";
import { setHotelDetails } from "../redux-features/indiHotelInfoSlice";
import Hotel15 from "../images/Hotelimages/Hotel15.webp";
export const IndividualPlaceCard = ({
  hotel_id,
  address,
  city,
  district,
  hotel_name,
  main_photo_url,
  review_score,
  review_score_word,
  url,
  price_breakdown,
  Hotel_obj,
}) => {
  let dispatch = useDispatch();
  let favHotel = useSelector((state) => state.userFeature.favHotel);

  const navigate = useNavigate();
  // useEffect(() => {
  //   console.log(favHotel)
  // }, [favHotel]);
  const handleAddtoFav = () => {
    dispatch(addFavHotel(Hotel_obj));
    console.log(favHotel);
    console.log(Hotel_obj);
  };

  const handleViewPlace = async () => {
    // navigate(`/hotel/${Hotel_obj._id}`);
    const hotelObj = {
      hotel_id,
      hotel_name,
      address,
      city,
      district,
      main_photo_url,
      review_score,
      review_score_word,
      url,
      price_breakdown,
      checkIn: "",
      checkOut: "",
    };
    console.log(hotelObj);
    dispatch(setHotelDetails(hotelObj));
    navigate("/hotelInfo");
  };

  return (
    <div className=" w-full   border-b-2 border-black p-3">
      {/* Divide into two parts */}
      <div className="flex items-center justify-center w-full  ">
        {/* IMG */}
        <div className="overflow-none h-[310px] w-[340px] 	rounded-md  bg-fixed	bg-center	bg-no-repeat	bg-cover	">
          <img
            src={Hotel15}
            alt="asd"
            className="object-center	object-cover	h-full	"
          />
        </div>
        <div className="flex justify-center items-center flex-col w-full ">
          {/* Written */}
          <div className="flex justify-center items-end w-full ">
            {/* Hotel info */}
            <div className=" m-2 w-9/12   ">
              <p className="text-2xl text-bold ">
                {hotel_name}
                {/* {hotel_name} - {hotel_id} */}
              </p>
              <div className="text-sm">
                {/* {HotelAddress} */}
                <BiSolidLocationPlus className="inline text-lg" />
                {address},{district} ,{city}
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
                  <p className="border-2 mr-4 inline border-sky-700 bg-white p-2 rounded-md text-bold  	">
                    {review_score || "No review posted"}
                  </p>
                  <p className="text-lg">
                    <p className="text-bold  inline"> {review_score_word}</p>{" "}
                    371 reviews
                  </p>
                </div>
              </div>
            </div>

            {/* Price Part */}
            <div className="m-2  p-2 text-right w-4/12">
              <p> starting from</p>
              <p className="text-lg text-bold text-blue-600 ">
                ₹ {price_breakdown}/night
              </p>
              <p className="">excl. tax</p>
            </div>
          </div>

          {/* Add to fav and view place button */}
          <div className=" flex justify-evenly items-center w-full">
            <button
              className="border-2 border-black p-2  rounded-md m-2"
              onClick={handleAddtoFav}
            >
              <FcLike className="text-2xl hover:scale-75    transition ease-in-out delay-250" />
            </button>

            <button
              className=" w-full bg-blue-800 rounded-mdw-full p-3 border-none  mr-4 inline rounded-md text-white transition ease-in-out delay-250  hover:bg-blue-700 duration-300 text-bold "
              onClick={handleViewPlace}
            >
              View Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
