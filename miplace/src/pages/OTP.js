
import React, { useState } from "react";
import image from '../images/reception.webp';
function OTP() {
  const [OTPass, setOTPass] = useState("");

  return (
  <div className="bg-white p-4 pl-40 rounded-lg shadow-md flex justify-center items-center gap-4  mx-auto">
    <img
      src={image}
      alt="Book Hotels fast and easy with Hotels"
      className="w-1/2"
    />
    <div className="flex-1 flex flex-col gap-2">
      <h1 className="text-3xl font-semibold">Book Hotels Fast and Easy With Hotels</h1>
      <h2 className="text-l">OTP Verification</h2>
      <input
        type="number"
        placeholder="OTP"
        value={OTPass}
        onChange={(e) => setOTPass(e.target.value)}
        className="p-2 border border-gray-300 rounded-md w-1/2"
      />
      
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md w-1/3">
        Get OTP
      </button>
    </div>
    </div>
  )
}

export default OTP;