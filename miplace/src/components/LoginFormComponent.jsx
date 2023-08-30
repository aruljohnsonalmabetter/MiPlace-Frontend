
import React, { useState } from "react";
import image from '../images/reception.webp';

const LoginFormComponent = () => {
        const [name, setName] = useState("");
        const [phoneNumber, setPhoneNumber] = useState("");
    const [countryCode, setCountryCode] = useState("");

        return (
            <div className="bg-white p-4 pl-40 rounded-lg shadow-md flex justify-center items-center gap-4  mx-auto">
                <img
                    src={image}
                    alt="Book Hotels fast and easy with Hotels"
                    className="w-1/2"
                />
                <div className="flex-1 flex flex-col gap-2">
                    <h1 className="text-3xl font-semibold">Book Hotels fast and easy with Hotels</h1>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md w-1/2"
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md w-1/2"
                    />
                    <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md w-1/3"
                    >
                        <option value="+1">+1 (United States)</option>
                        <option value="+44">+44 (United Kingdom)</option>
                        <option value="+91">+91 (India)</option>
                        <option value="+62">+62 (Indonesia)</option>
                        <option value="+86">+86 (China)</option>
                    </select>
                    <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md w-1/3">
                        Login
                    </button>
                </div>
            </div>

        );
    };


export default LoginFormComponent;