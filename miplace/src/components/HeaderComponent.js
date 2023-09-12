import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
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
              <Link to="/aboutUs" className="">
                About Us{" "}
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
