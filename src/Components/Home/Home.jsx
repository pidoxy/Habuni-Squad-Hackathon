import React, { useEffect, useRef, useState } from "react";
import Modal from "../Modal/Modal";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { redirect, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Home = () => {
  // id = uuidv4();
  let ref = useRef([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [link, setLink] = useState({link: "", copied: false });
  const [formData, setFormData] = useState({
    name: "jjj",
    //   alphanumeric
    hash: uuidv4(),
    link_status: 1,
    expire_by: "2024-04-26T11:22:08.587Z",
    amount: 4000,
    currency_id: "NGN",
    description: "",
    redirect_link: "https://habuni-squad-hackathon.vercel.app/home",
    return_msg: "",
  });

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(true);
  //   }, 2000);
    
  //   console.log(loading)
  // }, [loading]);

  let amount;
  const BASE_URL = "https://sandbox-api-d.squadco.com/";
  const token = "sandbox_sk_50844690725bb298637dc102b2ac6ab18a974ed24bcd";
  const SQUADCO = "https://sandbox-pay.squadco.com/";

  const navigate = useNavigate();

  const getTransactions = async () => {
    // Send a POST request
    await axios({
      method: "get",
      url: `${BASE_URL}/payment/view_all_payment/`,
    }).then(function (response) {
      console.log(response.data);
      ref.data = response.data;
      console.log(ref.data)
      
    });
    
    ref.data.map((item) => {
      
      amount += item.amount;
      return amount 
      
    })
  };

  // getTransactions();

  const generatePaymentLink = async () => {
    formData.hash = uuidv4();
    console.log(formData);

    // Send a POST request
    await axios({
      method: "post",
      url: `${BASE_URL}payment_link/otp`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        name: formData.name,
        hash: formData.hash,
        link_status: 1,
        expire_by: "2024-04-26T11:22:08.587Z",
        amounts: [
          {
            amount: formData.amount,
            currency_id: "NGN",
          },
        ],
        description: formData.description,
        redirect_link: formData.redirect_link,
        return_msg: formData.return_msg,
      },
    }).then(function (response) {
      console.log(response.data);
      console.log(response.data.data);
      if (response.data.status === 200) {
        // window.open(`${SQUADCO}/${formData.hash}`, "_blank", "noreferrer");
        alert("Link Created, copy the link below");
        setLink({...link, link:`${SQUADCO}/${formData.hash}`});
      }
      //   setUrl(response.data.data.checkout_url)
      // navigate(response.data.data.checkout_url);
      //   window.open(`${SQUADCO}/${formData.hash}`, '_blank', 'noreferrer');
    });
  };
  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      {/* sidebar */}
      <Sidebar />

      <div className="p-4 sm:ml-64">
        <div className="flex items-center justify-center my-3 h-24 rounded bg-gray-50 dark:bg-gray-800">
          <p className="text-2xl text-gray-400 dark:text-gray-500">
            Welcome, Emmanuel! 👋
          </p>
        </div>
        <div className=" rounded-lg dark:border-gray-700">
          <button
            onClick={() => setOpen(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-4 rounded"
          >
            Create Collection Link
          </button>
          <Modal open={open} onClose={() => setOpen(false)}>
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-2 md:p-3 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Create New Collection 
              </h3>
            </div>
            {/* <!-- Modal body --> */}
            <form class="space-y-4" action="#">
              <div>
                <label
                  for="payment"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Collection Title<span className="text-red-500">*</span>
                </label>
                <input
                  type="payment"
                  name="payment"
                  id="payment"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="French Texbook"
                  required
                />
              </div>

              <div class="flex flex-col">
                <p class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Currency?<span className="text-red-500">*</span>
                </p>
                <div>
                  {" "}
                  <input
                    checked
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    required
                  />
                  <label
                    for="checked-checkbox"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Naira
                  </label>
                </div>
              </div>

              <div class="flex flex-col">
                <p class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Fixed Amount?
                </p>
                <div>
                  {" "}
                  <input
                    checked
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    required
                  />
                  <label
                    for="checked-checkbox"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Fixed Amount
                  </label>
                </div>
              </div>
              <div>
                <label
                  for="payment"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Amount (₦)?<span className="text-red-500">*</span>
                </label>
                <input
                  type="payment"
                  name="payment"
                  id="payment"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="400"
                  onChange={(e) =>
                    setFormData({ ...formData, amount: e.target.value * 100 })
                  }
                  required
                />
              </div>
              <div>
                <label
                  for="description"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description<span className="text-red-500">*</span>
                </label>
                <input
                  type="description"
                  name="description"
                  id="description"
                  placeholder="Type in your description here"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  for="return_message"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Return message after payment
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="return_message"
                  name="return_message"
                  id="return_message"
                  placeholder="Type a return message here"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, return_msg: e.target.value })
                  }
                />
              </div>
            </form>
            {/* <!-- Modal footer --> */}
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="default-modal"
                type="button"
                onClick={generatePaymentLink}
                class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create Link
              </button>
              <CopyToClipboard
              text={link.link}
              onCopy={() => setLink({...link, copied: true })}
            >
              <span
                class="ms-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Copy link
              </span>
            </CopyToClipboard>
            </div>
            <div className="block my-2">
              {link.link && <a href={link.link}>{link.link}</a>}
            </div>
            
            {link.copied ? <span style={{color: 'green'}}>Collection link Successfully copied, you can now share.</span> : null}
          </Modal>
          <div className="flex justify-between">
            <div>
              <p
                href="#"
                class="block max-w-sm p-6 w-96 h-40 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <p class="font-normal text-gray-700 dark:text-gray-400">
                  Available Balance
                </p>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {(loading) ? `₦ ${amount}.00` : "₦ 1700.00"}
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                  You can withdraw this money or transfer it to any bank
                  account.
                </p>
              </p>
            </div>
            <div>
              <p
                href="#"
                class="block max-w-sm p-6 w-96 h-40 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <p class="font-normal text-gray-700 dark:text-gray-400">
                  Total Inflow
                </p>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  ₦ 7,949.70
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                  Total collections received.
                </p>
              </p>
            </div>
          </div>
            
            {/* dummy table 2 */}
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
              Class Dues
              <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                Record of class due payments made.
              </p>
            </caption>
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  #
                </th>
                <th scope="col" class=" py-3">
                  Transaction ID
                </th>
                <th scope="col" class="px-6 py-3">
                  User name
                </th>
                <th scope="col" class="px-6 py-3">
                  Status
                </th>
                <th scope="col" class="px-6 py-3">
                  Amount
                </th>
                <th scope="col" class="px-6 py-3">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  1
                </th>
                <td class=" py-4">SQPIDO6384121457997700002</td>
                <td class="px-6 py-4">Akande Mercy</td>
                <td class="px-6 py-4">okay</td>
                <td class="px-6 py-4">₦ 4000</td>
                <td class="px-6 py-4">18 January, 2024 11:43 pm</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  2
                </th>
                <td class=" py-4">6ceb7891-c061-4c6a-87c4-06ed0601e623</td>
                <td class="px-6 py-4">Akande Mercy</td>
                <td class="px-6 py-4">okay</td>
                <td class="px-6 py-4">₦ 4000</td>
                <td class="px-6 py-4">17 January, 2024 11:43 pm</td>
              </tr>
              <tr class="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  3
                </th>
                <td class=" py-4">6ceb7891-c061-4c6a-87c4-06ed0601e6fb</td>
                <td class="px-6 py-4">Akande Mercy</td>
                <td class="px-6 py-4">okay</td>
                <td class="px-6 py-4">₦ 4000</td>
                <td class="px-6 py-4">19 January, 2024 11:43 pm</td>
              </tr>
            </tbody>
          </table>
          <button
            type="submit"
            class="py-3 px-5 m-4  justify-self-end text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Export as CSV
          </button>

          <div className="my-4 w-full">
            <p
              href="#"
              class=" w-full block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <section class="bg-white dark:bg-gray-900">
                <div class="py-2 px-4 mx-auto max-w-screen-md">
                  <h2 class="mb-4 text-xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                    Contact Us
                  </h2>
                  <p class="mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    Got a technical issue? Want to send feedback about a beta
                    feature? Need details about our Business plan? Let us know.
                  </p>
                  <form action="#" class="space-y-4">
                    <div>
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        id="email"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="name@flowbite.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="subject"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="Let us know how we can help you"
                        required
                      />
                    </div>
                    <div class="sm:col-span-2">
                      <label
                        for="message"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >
                        Your message
                      </label>
                      <textarea
                        id="message"
                        rows="6"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Leave a comment..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Send message
                    </button>
                  </form>
                </div>
              </section>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
