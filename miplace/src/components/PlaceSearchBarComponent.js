import React, { useEffect, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setEnteredHotelDetails } from "../redux-features/enteredHotelDetailsSlice";
import {
  fetchHotelsFailure,
  fetchHotelsStart,
  fetchHotelsSuccess,
} from "../redux-features/hotelSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const PlaceSearchBarComponent = () => {
  const [city, setCity] = useState("");
  const [roomsGuests, setRoomsGuests] = useState("");
  const [firstDay, setFirstDay] = useState("");
  const [secondDay, setSecondDay] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const enteredDetails = useSelector(
    (state) => state.enteredHotelDetailsFeature
  );
  useEffect(() => {
    setCity(enteredDetails.city);
    setFirstDay(enteredDetails.firstDay);
    setSecondDay(enteredDetails.secondDay);
    setRoomsGuests(enteredDetails.roomsGuests);
  }, [enteredDetails]);
  const noOfDays = function getNumberOfNightsBetweenDates(
    start_date,
    end_date
  ) {
    if (start_date && end_date) {
      if (start_date > end_date) {
        console.log(Date());
        // toast(
        //   "Start Date should be smaller than end date.Please correct the start or the end date"
        // );

        // toast.warning(
        //   "⚠️ Start Date should be smaller than end date.Please correct the start or the end date!",
        //   {
        //     position: "top-center",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "dark",
        //   }
        // );
        // alert(
        //   "Start Date should be smaller than end date.Please correct the start or the end date"
        // );
        window.location.reload();
        // setFirstDay(Date());
        return 0;
      }
      const start_date_obj = new Date(start_date);
      const end_date_obj = new Date(end_date);

      // Calculate the number of days between the two dates.
      const days_between =
        (end_date_obj - start_date_obj) / (1000 * 60 * 60 * 24);

      // Subtract 1 to account for the fact that the first day is not a night.
      const nights_between = days_between;

      if (nights_between < 0) return 0;
      return nights_between;
    }
    return 0;
  };

  const handleSearch = async () => {
    let currDate = new Date();
    console.log(currDate < firstDay);
    if (firstDay > currDate) {
      console.log("yes");
      toast.warning("⚠️ Please select valid First Day.", {
        position: "top-center",
      });
      return;
    }
    if (secondDay > currDate) {
      console.log("yes");
      toast.warning("⚠️ Please select valid First Day.", {
        position: "top-center",
      });
      return;
    }
    if (
      city === "" ||
      firstDay === "" ||
      secondDay === "" ||
      roomsGuests === ""
    ) {
      toast("⚠️ Please enter all the details", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      // alert("Please enter all the details");
      return;
    }

    //----------
    localStorage.setItem(
      "enteredDetails",
      JSON.stringify({
        city,
        firstDay,
        secondDay,
        roomsGuests,
      })
    );
    console.log(JSON.parse(localStorage.getItem("enteredDetails")));
    dispatch(fetchHotelsStart());

    dispatch(
      setEnteredHotelDetails({
        city,
        firstDay,
        secondDay,
        roomsGuests,
      })
    );

    navigate("/searchResults");
    console.log("Entered Hotel Data : ");
    console.log(city);
    console.log(firstDay);
    console.log(secondDay);
    console.log(roomsGuests);
    // console.log(noOfDays);

    // const options = {
    //   method: "GET",
    //   url: "https://best-booking-com-hotel.p.rapidapi.com/booking/best-accommodation",
    //   params: {
    //     cityName: city,
    //     countryName: "India",
    //   },
    //   headers: {
    //     "X-RapidAPI-Key": "5ec9036550msh61d2fa84395ad4ep1a400ejsn7b162fc14eba",
    //     "X-RapidAPI-Host": "best-booking-com-hotel.p.rapidapi.com",
    //   },
    // };

    // try {
    //   const response = await axios.request(options);
    //   dispatch(fetchHotelsSuccess(response.data));

    //   console.log(response.data);
    //   // console.log(typeof(response.data));
    // } catch (error) {
    //   dispatch(fetchHotelsFailure(error));
    //   console.error(error);
    // }

    // https://rapidapi.com/apidojo/api/booking
    const options1 = {
      method: "GET",
      url: "https://apidojo-booking-v1.p.rapidapi.com/locations/auto-complete",
      params: {
        text: city,
        languagecode: "en-us",
      },
      headers: {
        "X-RapidAPI-Key": "7743bfcba1msha1fa62656925329p1db8acjsnca94aaa717ba",
        "X-RapidAPI-Host": "apidojo-booking-v1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options1);
      const dest_id = await response.data[0].dest_id;

      const options2 = {
        method: "GET",
        url: "https://apidojo-booking-v1.p.rapidapi.com/properties/list",
        params: {
          offset: "0",
          arrival_date: firstDay,
          departure_date: secondDay,
          guest_qty: "1",
          dest_ids: dest_id,
          room_qty: "1",
          search_type: "city",
          children_qty: "2",
          children_age: "5,7",
          search_id: "none",
          price_filter_currencycode: "USD",
          order_by: "popularity",
          languagecode: "en-us",
          travel_purpose: "leisure",
        },
        headers: {
          "X-RapidAPI-Key":
            "7743bfcba1msha1fa62656925329p1db8acjsnca94aaa717ba",
          "X-RapidAPI-Host": "apidojo-booking-v1.p.rapidapi.com",
        },
      };
      const response2 = await axios.request(options2);

      dispatch(fetchHotelsSuccess(response2.data.result));
      // console.log(response);
      // console.log(dest_id);
      // console.log(response2.data.result);
    } catch (error) {
      dispatch(fetchHotelsFailure(error));
      console.error(error);
    }
  };

  return (
    <div
      id="largecontainer"
      className=" flex justify-center items-center w-full h-22  flex-col "
    >
      <ToastContainer />
      <div className="flex-col space-y-1 border-2 border-black rounded-lg p-2 w-11/12 bg-white my-8 ">
        <div
          id="container"
          className="bg-white flex  space-x-2 items-center justify-evenly rounded-lg pt-4"
        >
          <div className="m-2">
            <label className="relative">
              <input
                className="border-2 border-solid border-black border-opacity-40	 px-2 py-1.5  rounded-md w-80 transition duration-200"
                type="text"
                value={city || enteredDetails.city}
                // value={city}
                onChange={(e) => {
                  dispatch(
                    setEnteredHotelDetails({
                      ...enteredDetails,
                      city: e.target.value,
                    })
                  );
                  setCity(e.target.value);
                }}
                placeholder=" "
              />
              <span className="top-0 absolute left-0  mx-3  transition duration-200 input-text text-bold">
                Enter City or Location
              </span>
            </label>
          </div>
          <div id="datecomponent" className="flex space-x-2">
            <div className="flex">
              <h3 className=" text-bold text-sm flex items-center justify-center font-bold  ">
                {" "}
                checkIn :
              </h3>
              <div className="m-2">
                <input
                  className="border-2 border-solid border-black border-opacity-40	 px-2 py-1.5  rounded-md  transition duration-200"
                  type="date"
                  // value={firstDay || enteredDetails.firstDay}
                  value={firstDay || enteredDetails.firstDay}
                  onChange={(e) => {
                    dispatch(
                      setEnteredHotelDetails({
                        ...enteredDetails,
                        firstDay: e.target.value,
                      })
                    );
                    setFirstDay(e.target.value);
                  }}
                />
                {/* <span className="absolute left-0 top-0 mx-3  transition duration-200 input-text">
              Check in
            </span> */}
              </div>{" "}
            </div>
            <p className=" text-black-700  mr-[2rem] font-bold flex items-center justify-center text-xl">
              to
            </p>

            <div className="flex">
              <span className=" text-sm flex items-center justify-center font-bold">
                checkout :
              </span>
              <div className="m-2">
                <label className="relative">
                  <input
                    className="border-2 border-solid border-black border-opacity-40	py-1.5  px-3  rounded-md  transition duration-200"
                    type="date"
                    // value={secondDay || enteredDetails.secondDay}
                    value={secondDay || enteredDetails.secondDay}
                    onChange={(e) => {
                      dispatch(
                        setEnteredHotelDetails({
                          ...enteredDetails,
                          secondDay: e.target.value,
                        })
                      );
                      setSecondDay(e.target.value);
                    }}
                    // placeholder="Enter a location"
                  />
                  {/* <span className="absolute left-0 top-0 mx-3  transition duration-200 input-text">
              Check out
            </span> */}
                </label>
              </div>
            </div>
          </div>
          <div className="">
            <p className="rounded-3xl	 px-3 py-1 border-2 border-solid border-black border-opacity-40	text-bold 	text-md  bg-opacity-80">
              {}
              {(firstDay && secondDay) ||
              enteredDetails.firstDay ||
              enteredDetails.secondDay
                ? noOfDays(
                    firstDay || enteredDetails.firstDay,
                    secondDay || enteredDetails.secondDay
                  )
                : 0}{" "}
              Nights
              {/* {firstDay && secondDay ? noOfDays(firstDay, secondDay) : 0} Nights */}
            </p>
          </div>
          <div>
            <label className="relative">
              <input
                className="border-2 border-solid border-black border-opacity-40	 px-3 py-1.5 w-64  rounded-md  transition duration-200"
                type="text"
                placeholder=" "
                value={roomsGuests}
                onChange={(e) => setRoomsGuests(e.target.value)}
              />
              <span className="absolute left-0 top-0 mx-3  transition duration-200 input-text text-bold">
                Rooms
              </span>
            </label>
          </div>
        </div>

        {/* <div className="">
          <p className="rounded-3xl	 px-3 py-1 border-2 border-solid border-black border-opacity-40	text-bold 	text-md  bg-opacity-80">
            {firstDay && secondDay ? noOfDays(firstDay, secondDay) : 0} Nights
            {/* {firstDay && secondDay ? noOfDays(firstDay, secondDay) : 0} Nights */}
        {/* </p>
        </div>  */}

        {/* <div>
          <label className="relative">
            <input
              className="border-2 border-solid border-black border-opacity-40	 px-3 py-1.5 w-64  rounded-md  transition duration-200"
              type="text"
              placeholder=" "
              value={roomsGuests}
              onChange={(e) => setRoomsGuests(e.target.value)}
            />
            <span className="absolute left-0 top-0 mx-3  transition duration-200 input-text text-bold">
              Rooms
            </span>
          </label>
        </div> */}

        {/* <button
          className="bg-[#1E91B6] px-2 py-2 text-white w-11/12 text-semibold text-lg rounded-md font-mullish hover:bg-lightBlue-600 transition-all duration-500 ease-in"
          onClick={handleSearch}
        >
          Search
        </button> */}

        <div className="flex justify-center pb-70">
          <button
            className="bg-[#1E91B6] px-4 py-1.5 text-white inline-block text-semibold text-lg rounded-md font-mullish hover:bg-blue-600 transition-all duration-300 ease-in mb-2"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
