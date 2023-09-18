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
      .then(user => {
        if (user.error) {
          setValues({ ...values, error: user.error, success: true });
        } else {
          alert("sigup sucess")
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
      .catch(console.log("Error in signup",{setValues}));
      
  };

  console.log(values);

  return (
    <div className="bg-blue-500 sm-a51:bg-red-500 sm-a71:bg-green-500 font-mullish" >
        <div id="signin" className="bg-white p-4 pl-40 font-mullish rounded-lg shadow-md flex justify-center items-center gap-4  mx-auto">
          <img
            src={image}
            alt="Book Hotels fast and easy with Hotels"
            className="w-1/2"
          />
          <div className="flex-1 flex flex-col gap-2">
            <h1 className="text-3xl font-semibold">Book Hotels Fast and Easy With Hotels</h1>
          <input
            class="in"
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleChange("name")}
              className="p-2 border border-gray-300 rounded-md w-1/2"
            />
        
          <input
            class="in"
              type="email"
              placeholder="Enter you e-mail"
              value={email}
              onChange={handleChange("email")}
              className="p-2 border border-gray-300 rounded-md w-1/2"
            />

          <input
            class="in"
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
  </div>
  );

  
};


  export default Signup;
   