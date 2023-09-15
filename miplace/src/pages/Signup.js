import React, { useState } from "react";
import image from '../images/reception.webp';
import { signup } from "../auth/index";






const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false
  });
  
  const { name, email, password,error, success  } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true
          });
        }
      })
      .catch(console.log("Error in signup"));
  };
  return (
    <div className="bg-white p-4 pl-40 rounded-lg shadow-md flex justify-center items-center gap-4  mx-auto">
      <img
        src={image}
        alt="Book Hotels fast and easy with Hotels"
        className="w-1/2"
      />
      <div className="flex-1 flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">Book Hotels Fast and Easy With Hotels</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange= {handleChange("name")}
          className="p-2 border border-gray-300 rounded-md w-1/2"
        />
        
        <input
          type="email"
          placeholder="Enter you e-mail"
          value={email}
          onChange={handleChange("email")}
          className="p-2 border border-gray-300 rounded-md w-1/2"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleChange("password")}
          className="p-2 border border-gray-300 rounded-md w-1/2"
                
        />

       
        <button onClick={onSubmit} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md w-1/3">
          Register
        </button>
      </div>
    </div>

  );
};


export default Signup;
