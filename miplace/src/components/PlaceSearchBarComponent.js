import React, { useEffect, useState } from "react";

export const PlaceSearchBarComponent = () => {
  const [city, setCity] = useState();
  const [roomsGuests, setRoomsGuests] = useState();
  const [days, setDays] = useState(0);
  const [firstDay, setFirstDay] = useState("");
  const [secondDay, setSecondDay] = useState("");

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
  //   setDays(nights);

  return (
    <div className=" flex justify-center items-center  w-full h-24 ">
      <div className="bg-white flex justify-between items-center w-11/12 h-full rounded-lg p-8   border-2 border-black ">
        <div>
          <label className="relative">
            <input
              className="border-2 border-solid border-black border-opacity-40	 px-3 py-1.5  rounded-md w-96 transition duration-200"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder=" "
            />
            <span className="top-0 absolute left-0  mx-3  transition duration-200 input-text">
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

              // placeholder="Enter a location"
            />
            <span className="absolute left-0 top-0 mx-3  transition duration-200 input-text">
              Rooms and Guests
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};
