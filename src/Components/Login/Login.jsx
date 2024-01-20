import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const BASE_URL = "https://squad-e2vj.onrender.com/";
  const [formData, setFormData] = useState({ email: "", password: ""})

  const generatePaymentLink = async () => {

    // Send a POST request
    try{
    await axios({
      method: "post",
      url: `${BASE_URL}api/v1/auth/login/`,      
      data: {
          email: formData.email,
          password: formData.password,
        }
    }).then(function (response) {
      console.log(response);
      if (response.status === 200){
        alert('Login Successful');
        navigate('/home')
      }
    });
  }catch(error){
    if (error.message === "Request failed with status code 400")
    console.log(error)
    alert("Invalid Login Details")
  }
  };

  return (
    <div>
      <div className="w-full mx-auto my-28 max-w-xs">

        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="pidoxy@mail.com"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={generatePaymentLink}
            >
              Sign In
            </button>
            <div className="inline-block space-y-4">
            <a
              className="block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
            <a
              className="block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="/signup"
            >
              Sign Up
            </a>
            </div>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2024 Habuni Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
