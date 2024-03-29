import axios from "axios";
import React, { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";


const Signup = () => {
  const navigate = useNavigate();

  const BASE_URL = "https://squad-e2vj.onrender.com/";
  const SQUADCO = "https://sandbox-pay.squadco.com/";

  // const notify = () => toast("You have Successfully Signed up and a virtual account has been assigned to you!");

  const [formData, setFormData] = useState({
    customer_identifier: "CCC",
    first_name: "Joesph",
    last_name: "Ayodele",
    mobile_num: "08139011943",
    email: "ayo@gmail.com",
    bvn: "12343211654",
    dob: "30/10/1990",
    address: "22 Kota street, UK",
    gender: "1",
    beneficiary_account: "4920299492",
    password: "",
  });
  const createVirtualAccount = async (e) => {
    console.log(formData);
    e.preventDefault()
    // creating virtual accounts needs more

    // navigate('/home')
    // Send a POST request
    await axios({
      method: "post",
      url: `${BASE_URL}payment/create-virtual-account/`,
      data: {
        "customer_identifier": "CCC",
        "first_name": "Joep",
        "last_name": "Ayodel",
        "mobile_num": "08139011943",
        "email": "ayo@gmai.com",
        "bvn": "22234321165",
        "dob": "10/30/1990",
        "address": "22 Kota street, UK",
        "gender": "1",
        "beneficiary_account": "4920299492"
      },
    }).then(function (response) {
      console.log(response.data);
      console.log(response.data.data);
      if (response.data.status === 200) {
        // notify();
        // window.open(`${SQUADCO}/${formData.hash}`, "_blank", "noreferrer");
      }
      //   setUrl(response.data.data.checkout_url)
      navigate("/home");
      //   window.open(`${SQUADCO}/${formData.hash}`, '_blank', 'noreferrer');
    });

    // local signup
    // await axios({
    //   method: "post",
    //   url: `${BASE_URL}/api/v1/auth/registration/`,
    //   data: {
    //     first_name:"Test2",
    //     last_name: "Test2",
    //   email: "user@example.com",
    //   password1: "example.com",
    //   password2: "example.com"
    // },
    // }).then(function (response) {
    //   console.log(response.data);
    //   console.log(response.data.data);
    //   if (response.data.status === 200) {
    //     window.open(`${SQUADCO}/${formData.hash}`, "_blank", "noreferrer");
    //   }
    //   //   setUrl(response.data.data.checkout_url)
    //   navigate("/home");
    //   //   window.open(`${SQUADCO}/${formData.hash}`, '_blank', 'noreferrer');
    // });
    
  };
  return (
    <div>
      <form className="w-full mx-auto my-6  max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-3">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          {/* <ToastContainer /> */}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="first-name"
            >
              First Name<span className="text-red-500">*</span>
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="first-name"
              type="text"
              placeholder="Jane"
              onChange={(e) =>
                setFormData({ ...formData, first_name: e.target.value })
              }
              // required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="last-name"
            >
              Last Name<span className="text-red-500">*</span>
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="last-name"
              type="text"
              placeholder="Doe"
              onChange={(e) =>
                setFormData({ ...formData, last_name: e.target.value })
              }
              // required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-3">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email<span className="text-red-500">*</span>
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              placeholder="pidoxy@mail.com"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              // required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-3">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Address<span className="text-red-500">*</span>
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="address"
              type="text"
              placeholder="1, Jabalingo Road"
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              // required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-3">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="password"
            >
              Password<span className="text-red-500">*</span>
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="password"
              type="password"
              placeholder="******************"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              // required
            />
            <p className="text-gray-600 text-xs italic">
              At least 7 characters with one number and symbol
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              BVN<span className="text-red-500">*</span>
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="bvn"
              type="number"
              placeholder="12343211654"
              onChange={(e) =>
                setFormData({ ...formData, bvn: e.target.value })
              }
              // required
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              Gender<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
                // required
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="tel"
            >
              Telephone<span className="text-red-500">*</span>
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder="706799654"
              onChange={(e) =>
                setFormData({ ...formData, mobile_num: e.target.value })
              }
              // required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-3">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Date Of Birth<span className="text-red-500">*</span>
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="30/10/1990"
              onChange={(e) =>
                setFormData({ ...formData, first_name: e.target.value })
              }
              // required
            />
          </div>
        </div>
        <button
          type="submit"
          onClick={createVirtualAccount}
          className="py-3 px-5 w-full justify-self-end text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          SIGN UP
        </button>
      </form>
    </div>
  );
};

export default Signup;
