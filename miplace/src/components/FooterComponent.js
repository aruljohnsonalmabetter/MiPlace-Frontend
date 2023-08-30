import React from "react";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="p-3 relative flex justify-center items-center  ">
      <div className="  flex justify-between items-center  w-11/12 h-full	">
        <div className="left w-2/5 text-start	 space-y-4">
          <p className="text-xl font-bold	 inline-block	">
            About <br /> MiPlace
          </p>
          <p className="inline-block	">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /> Nullam dictum aliquet accumsan porta lectus ridiculus in
            mattis. Netus sodales in volutpat ullamcorper amet adipiscing
            fermentum.
          </p>
          <ul className=" flex justify-between text-md w-2/5">
            <a href="http://localhost:3000/">icon</a>
            <a href="http://localhost:3000/">icon</a>
            <a href="http://localhost:3000/">icon</a>
            <a href="http://localhost:3000/">icon</a>
          </ul>
        </div>
        <div className=" p-5 text-start left-0 space-y-4	">
          <p className="text-xl font-bold	">Company</p>
          <ul className="flex flex-col space-y-3 text-md ">
            <Link to="/">About</Link>
            <Link to="/">Features</Link>
            <Link to="/">Works</Link>
            <Link to="/">Career</Link>
          </ul>
        </div>
        <div className=" p-5 text-start left-0 space-y-4	">
          <p className="text-xl font-bold	">Help</p>
          <ul className="flex flex-col space-y-3 text-md ">
            <Link to="/">Customer Support</Link>
            <Link to="/">Delivery Details</Link>
            <Link to="/termsOfservice">Terms & Conditions</Link>
            <Link to="/privacyPolicy">Privacy Policy</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default FooterComponent;
