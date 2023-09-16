import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import "./styles.css";
const HeaderComponent = () => {
  let [open, setOpen] = useState(false);

  return (
    <div className="z-10 navbar flex justify-center items-center h-20 top-0 sticky bg-white ">
      <div className="flex justify-between items-center w-11/12 h-full">
        <div className=" logo font-bold text-xl">
          <Link to="/">
            <h2>MiPlace</h2>
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {!open ? <HiMenuAlt3 /> : <IoClose />}
          {/* <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon> */}
        </div>

        <div className=" text-lg">
          <ul
            className={` md:flex  md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            } `}
          >
            {/* <ul className="flex justify-between items-center"> */}
            <li className="md:ml-8 text-xl md:my-0 my-7 font-mullish">
              <Link to="/Favorites">
                <button
                  className="border-2 text-bold   p-2 rounded-md  2 transition ease-in-out delay-100 bg-[#1E91B6] hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300 text-white my-2"
                  // className="border-2 text-bold border-sky-700 bg-white p-2 rounded-md  transition ease-in-out delay-250  hover:bg-sky-300 duration-300	m-2"
                >
                  View My Favorites{" "}
                </button>
              </Link>
            </li>
            <li className="md:ml-8 text-xl md:my-0 my-7 font-mullish">
              <Link to="/emailuscontactus" className="">
                Contact Us
              </Link>
            </li>
            <li className="md:ml-8 text-xl md:my-0 my-7 font-mullish">
              {/* Use Link to navigate to the login page */}

              <Link to="/login" className="">
                Login
              </Link>
            </li>
            <li className="md:ml-8 text-xl md:my-0 my-7 font-mullish">
              <Link to="/signup" className="btn px-6 py-3 rounded-md">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default HeaderComponent;
