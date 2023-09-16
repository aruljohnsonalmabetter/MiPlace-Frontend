import React, { useEffect } from "react";
import HotelBookingComponent from "../components/HotelBookingComponent";
import Loginbookinginfo from "../components/Loginbookinginfo";
import FinalBookingSlipComponent from "../components/FinalBookingSlipComponent";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector.js";
// import { loadStripe } from '@stripe/stripe-js/pure';
// import { Method } from "ionicons/dist/types/stencil-public-runtime";
/*
  district: "",
  review_score: "",
  review_score_word: "",
  url: "",
  */
function BookingInfoandBill() {
  const hotelObj = useSelector((state) => state.indiHotelInfoFeature);
  const hotels = useSelector((state) => state.indiHotelInfoFeature);
  const userEneterdHotelDetailsObj = useSelector(
    (state) => state.enteredHotelDetailsFeature
  );
  useEffect(() => {
    console.log(hotelObj);
    console.log(userEneterdHotelDetailsObj);
  }, [hotelObj, userEneterdHotelDetailsObj]);

  
  return (
    <div class="flex  gap-[1.5rem] font-mullish">
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
          <div class="flex my-[1rem] bg-[#1E91B6] w-[47.375rem] mx-[1rem]  justify-between rounded-lg">
            <div className="text-white my-[1rem] ml-[1rem]">
              <button className="bg-lightBlue font-bold" >
              <Link to="/mybookings"> Pay in Full  </Link>
              </button>
              <p>Pay the total and you are all set</p>
            </div>
            <div className="my-[1rem] mr-[1rem]">dot</div>
          </div>
        </div>

        <Loginbookinginfo />
      </div>

      <FinalBookingSlipComponent
        url={hotelObj.main_photo_url}
        review={hotelObj.review_score_word}
        rating={hotelObj.review_score}
        address={hotelObj.address}
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