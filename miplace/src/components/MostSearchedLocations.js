import React from "react";
import img from "../images/Mars-Orbit-Mission.jpg";
import "./styles.css";
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
    <div className=" flex justify-center items-center mt-[3.625rem]">
      <div className="    mostSearchedPlaces w-11/12 ">
        <p id="para" className="text-start text-2xl font-bold mb-[2.246875rem]  ">Most Searched Locations</p>
        <div id="box"className="flex justify-between items-center w-full my-5 md:flex-wrap gap-4">
          {placesObj.map((elem) => {
            return (
              <div className=" justify-evenly items-center mr-16 " key={Math.random() * 1000}>
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
