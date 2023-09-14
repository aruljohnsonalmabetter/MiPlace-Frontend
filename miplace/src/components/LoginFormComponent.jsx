
import React, { useState } from "react";
import image from '../images/reception.webp';
import { Link } from 'react-router-dom';
import "./styles.css";

const LoginFormComponent = () => {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        return (
            <div id="login"className="bg-white p-4 pl-40 rounded-lg shadow-md flex justify-center items-center gap-4 font-mullish mx-auto">
                <img
                    src={image}
                    alt="Book Hotels fast and easy with Hotels"
                    className="w-1/2"
                />
                <div className="flex-1 flex flex-col gap-2">
                    <h1 className="text-3xl font-semibold">Book Hotels fast and easy with Hotels</h1>
                    <input
                        class="in2"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md w-1/2"
                    />
                    <input
                        class="in2"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md w-1/2"
                    />
                   
                    <button id="btn2" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md w-1/3">
                        <Link to="/home" >
                           Login
                        </Link>
                    </button>
                </div>
            </div>

        );
    };


export default LoginFormComponent;