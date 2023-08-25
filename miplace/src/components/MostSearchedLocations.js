import React from "react";
import img from "../images/Mars-Orbit-Mission.jpg";
export const MostSearchedLocations = () => {
  const placesObj = [
    {
      url: img,
      numOfPlaces: 123,
      placeName: "Delhi",
    },
    {
      url: img,
      numOfPlaces: 123,
      placeName: "Delhi",
    },
    {
      url: img,
      numOfPlaces: 123,
      placeName: "Delhi",
    },
    {
      url: img,
      numOfPlaces: 123,
      placeName: "Delhi",
    },
    {
      url: img,
      numOfPlaces: 123,
      placeName: "Delhi",
    },
  ];
  return (
    <div className=" flex justify-center items-center ">
      <div className="    mostSearchedPlaces w-10/12 ">
        <p className="text-start text-2xl font-bold">Most Searched Locations</p>
        <div className="  flex justify-between items-center w-full my-5">
          {placesObj.map((elem) => {
            return (
              <div className="flex justify-evenly items-center mr-16 " key={Math.random() * 1000}>
                <img className="rounded-xl" src={elem.url} alt="img" />
                <div className="ml-3 text-start ">
                  <p className="text-lg font-semibold">{elem.placeName}</p>
                  <p className="text-base ">{elem.numOfPlaces}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
