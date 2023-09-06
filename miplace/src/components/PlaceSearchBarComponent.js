import React, { useEffect, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  fetchHotelsFailure,
  fetchHotelsStart,
  fetchHotelsSuccess,
} from "../redux-features/hotelSlice";

export const PlaceSearchBarComponent = () => {
  const [city, setCity] = useState("");
  const [roomsGuests, setRoomsGuests] = useState("");
  const [firstDay, setFirstDay] = useState("");
  const [secondDay, setSecondDay] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function getNumberOfNightsBetweenDates(start_date, end_date) {
    if (start_date && end_date) {
      if (start_date > end_date) {
        console.log(Date());
        alert(
          "Start Date should be smaller than end date.Please correct the start or the end date"
        );
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
  }

  const handleSearch = async () => {
    if (
      city === "" ||
      firstDay === "" ||
      secondDay === "" ||
      roomsGuests === ""
    )
      return alert("Please enter all the details");

    //----------
    dispatch(fetchHotelsStart());

    navigate("/searchResults");
    console.log("Entered Hotel Data : ");
    console.log(city);
    console.log(firstDay);
    console.log(secondDay);
    console.log(roomsGuests);

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
        "X-RapidAPI-Key": "61cb1a08f0mshd64d9d9a395d1dbp1298acjsnecd88864da94",
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
            "61cb1a08f0mshd64d9d9a395d1dbp1298acjsnecd88864da94",
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
      className=" flex justify-center items-center  w-full h-24  flex-col"
    >
      <div
        id="container"
        className="bg-white flex justify-between items-center w-11/12 h-full rounded-lg p-8   border-2 border-black "
      >
        <div>
          <label className="relative">
            <input
              className="border-2 border-solid border-black border-opacity-40	 px-3 py-1.5  rounded-md w-96 transition duration-200"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder=" "
            />
            <span className="top-0 absolute left-0  mx-3  transition duration-200 input-text text-bold">
              Enter City or Location
            </span>
            {/* <span
              className={
                city!==""
                  ? `-top-8 absolute left-0  mx-3  transition duration-200 input-text`
                  : `top-0 absolute left-0  mx-3  transition duration-200 input-text`
              }
            >
              Enter City or Location
            </span> */}
          </label>
        </div>
        <div>
          <label className="relative">
            <input
              className="border-2 border-solid border-black border-opacity-40	 px-3 py-1.5  rounded-md  transition duration-200"
              type="date"
              value={firstDay}
              onChange={(e) => setFirstDay(e.target.value)}
            />
            {/* <span className="absolute left-0 top-0 mx-3  transition duration-200 input-text">
              Check in
            </span> */}
          </label>
        </div>
        <p className="text-bold text-indigo-700 text-lg">to</p>
        <div>
          <label className="relative">
            <input
              className="border-2 border-solid border-black border-opacity-40	  px-3 py-1.5  rounded-md  transition duration-200"
              type="date"
              value={secondDay}
              onChange={(e) => setSecondDay(e.target.value)}
              // placeholder="Enter a location"
            />
            {/* <span className="absolute left-0 top-0 mx-3  transition duration-200 input-text">
              Check out
            </span> */}
          </label>
        </div>
        {/* <div className="flex justify-center  flex-col text-start">
          <label>Check in</label>
          <input
            className="px-3 py-1.5 w-200px  rounded-md"
            type="date"
            placeholder="Enter a location"
          />
        </div> */}

        {/* <div className="flex justify-center  flex-col text-start">
          <label>Check out</label>
          <input
            className="px-3 py-1.5 w-200px  rounded-md"
            type="date"
            placeholder="Enter a location"
          />
        </div> */}

        <div className=" ">
          <p className="rounded-3xl	 px-3 py-1 border-2 border-solid border-none border-opacity-40	text-lg text-white bg-black bg-opacity-80">
            {firstDay && secondDay
              ? getNumberOfNightsBetweenDates(firstDay, secondDay)
              : 0}{" "}
            Nights
            {/* {firstDay && secondDay ? set(firstDay, secondDay) : 0} Nights */}
            {/* {days} Nights */}
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
              // placeholder="Enter a location"
            />
            <span className="absolute left-0 top-0 mx-3  transition duration-200 input-text text-bold">
              Rooms and Guests
            </span>
          </label>
        </div>
      </div>
      {/* <Link
        to="/searchResults"
        className="bg-[#196680] px-2 py-2 text-white w-11/12 text-semibold text-lg rounded-md hover:bg-sky-600 transition-all duration-500 ease-in"
      >
        <button className="w-full" onClick={handleSearch}>
          Search
        </button>
      </Link> */}
      <button
        className="bg-[#196680] px-2 py-2 text-white w-11/12 text-semibold text-lg rounded-md hover:bg-sky-600 transition-all duration-500 ease-in"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};
