import React from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div className="z-10 navbar flex justify-center items-center h-20 top-0 sticky bg-white">
      <div className="flex justify-between items-center w-11/12 h-full">
        <div className="logo font-bold text-xl">
          <Link to="/" >
            <h2>MiPlace</h2>
          </Link>
        </div>
        <div className="w-2/5 text-lg">
          <ul className="flex justify-between items-center">
            {/* Use Link to navigate to the login page */}
            <Link to="/login" className="">
            About Us
          </Link>
            <li>

            
              <Link to="/emailuscontactus" className="">
                Contact Us </Link>
            </li>
            
            <li>
              {/* Use Link to navigate to the login page */}
              <Link to="/login" className="">
                Login
              </Link>
            </li>
            <li>
              {/* Use Link to navigate to the sign-up page */}
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
