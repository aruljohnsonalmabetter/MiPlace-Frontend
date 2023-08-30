import React from "react";

export const WriteReview = () => {
  return (
    <div className="flex justify-center items-center w-full ">
      {/* <div className="flex justify-center items-center w-10/12 bg-red-800 "> */}
      <div className="p-7 flex justify-center items-center flex-col border-2 border-gray-400 w-6/12 rounded-xl ">
        <p className="text-2xl text-bold m-2">Write a Review</p>
        <form className="w-full flex justify-center items-center flex-col ">
          <textarea
            className="border-2 border-gray-400 h-80 w-10/12 p-4 rounded-md "
            placeholder="Write your reviews and thoughts here"
          />
          <button className="bg-blue-400 text-white rounded-md w-10/12 p-3 transition ease-in-out delay-250  hover:bg-gray-800 duration-300 text-bold  m-2 ">
            Submit
          </button>{" "}
        </form>
      </div>
      {/* </div>     */}
    </div>
  );
};
