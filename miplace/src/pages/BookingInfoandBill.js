import React, { useEffect, useState } from "react";
import HotelBookingComponent from "../components/HotelBookingComponent";
import Loginbookinginfo from "../components/Loginbookinginfo";
import FinalBookingSlipComponent from "../components/FinalBookingSlipComponent";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector.js";
<<<<<<< HEAD
import {FaRegDotCircle} from 'react-icons/fa'
// import { loadStripe } from '@stripe/stripe-js/pure';
// import { Method } from "ionicons/dist/types/stencil-public-runtime";
/*
  district: "",
  review_score: "",
  review_score_word: "",
  url: "",
  */
=======
import { loadStripe } from "@stripe/stripe-js";
import { signout, isAutheticated } from "../auth/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PUBLI_KEY =
  "pk_test_51NsnOGSICQL4cc0kpJTFk4IiycCAix6ymed9VpMHMUVyuxV7viIaUXJw2wo9yXPtJjzuqFJp1CVTWfAe0VSUBERT00N4eYVReF";
>>>>>>> 20a89c82b1c9193af1c1f6f71bb7b60def290b98
function BookingInfoandBill() {
  const hotelObj = useSelector((state) => state.indiHotelInfoFeature);
  console.log("Hotel Obj : ", [hotelObj]);
  const hotels = useSelector((state) => state.indiHotelInfoFeature);
  const userEneterdHotelDetailsObj = useSelector(
    (state) => state.enteredHotelDetailsFeature
  );

  const [isloading, setIsloading] = useState(false);
  useEffect(() => {
    console.log(hotelObj);
    console.log(userEneterdHotelDetailsObj);
  }, [hotelObj, userEneterdHotelDetailsObj]);

  const navigate = useNavigate();

  // Payment Integration
  const makePayment = async () => {
    if (!isAutheticated()) {
      toast.warn("Please LogIn/SignUp to continue", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    } else setIsloading(true);

    toast.warn("Do not Click back or Refresh the page.....", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    // }

    const stripe = await loadStripe(PUBLI_KEY);
    const hotelData = {
      ...hotelObj,
      noOfDays: userEneterdHotelDetailsObj.noOfDays,
      rooms: userEneterdHotelDetailsObj.roomsGuests,
    };
    const body = {
      products: [hotelData],
    };

    const headers = { "Content-Type": "application/json" };
    const respone = await fetch(
      "http://localhost:8000/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );
    // if (respone.error) toast.warn("Warning");
    const session = await respone.json();
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) toast.warn(result.error);
    // navigate("/mybookings");
  };

  return (
<<<<<<< HEAD
    <div class="flex justify-center items-top  gap-[1.5rem] font-mullish">
=======
    <div class="flex  gap-[1.5rem] font-mullish">
      <ToastContainer />
>>>>>>> 20a89c82b1c9193af1c1f6f71bb7b60def290b98
      <div class="  mt-[2.5rem]  w-[49.375rem] h-[64.25rem]  ">
        <HotelBookingComponent
          hotelName={hotelObj.hotel_name}
          price={hotelObj.price_breakdown}
          url={hotelObj.main_photo_url}
          city={hotelObj.city}
          currency={hotelObj.currency}
          address={hotelObj.address}
          firstDay={userEneterdHotelDetailsObj.firstDay}
          secondDay={userEneterdHotelDetailsObj.secondDay}
          noOfDays={userEneterdHotelDetailsObj.noOfDays}
        />

        <div class="border-solid my-[2.5rem]  w-[49.375rem] border-2 border-{A1A1A1} rounded-lg font-mullish">
<<<<<<< HEAD
          <div class="flex my-[1rem] bg-[#1E91B6] w-[47.375rem] mx-[1rem]  justify-between rounded-lg">
            <div className="text-white my-[1rem] ml-[1rem]">
              <button className="bg-lightBlue font-bold" >
              <Link to="/mybookings"> Pay in Full  </Link>
              </button>
              <p>Pay the total and you are all set</p>
            </div>
            <div className="my-[1rem] mr-[1rem] flex justify-center items-center"><FaRegDotCircle /></div>
=======
          <div class="flex my-[1rem] bg-[#1E91B6] w-[47.375rem] mx-[1rem]  justify-between items-center rounded-lg p-3">
            <p className="text-bold">Pay the total and you are all set : </p>

            <button
              className="bg-black font-bold p-2 border-2 text-white hover:bg-gray-800"
              onClick={makePayment}
            >
              Pay in Full
              {/* <Link to="/mybookings"> Pay in Full </Link> */}
            </button>
>>>>>>> 20a89c82b1c9193af1c1f6f71bb7b60def290b98
          </div>
        </div>

        <Loginbookinginfo />
      </div>

      <FinalBookingSlipComponent
        url={hotelObj.main_photo_url}
        currencyPrice={hotelObj.currencyPrice}
        currency={hotelObj.currency}
        review={hotelObj.review_score_word}
        rating={hotelObj.review_score}
        address={hotelObj.address}
        price={hotelObj.price_breakdown}
        noOfDays={userEneterdHotelDetailsObj.noOfDays}
        rooms={userEneterdHotelDetailsObj.roomsGuests}
      />
    </div>
  );
}

export default BookingInfoandBill;

//payment integration
// const makePayment = async () => {
//   const stripe = await loadStripe("pk_test_51NposySFLJXN2nA64GVOfZD5breUlUgQGzHW8I8QYPrwUmRKWsuhw6nCMciae8e50lK4n3WWleC8g1cXrSaZorRD00aY0YUIIg");
//   const body = {
//     products: hotels
//   }
//   const headers = {
//     "Content-Type": "application/json"
//   }
//   const response = await fetch("http://localhost:8000/api/create-checkout-session", {
//     method: "POST",
//     headers: headers,
//     body: JSON.stringify(body)

//   });
//   const session = await response.json();
//   const result = stripe.redirectToCheckout({
//     sessionId:session.id
//   })
//   if (result.error) {
//     console.log(result.error);
//   }
// }
