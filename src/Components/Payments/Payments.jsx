import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const Payments = () => {
  return (
    <div>
      {/* sidebar */}
      <Sidebar />

      <div className="p-4 sm:ml-64">
        <div class="relative overflow-x-auto">
          {/* dummy table 1 */}
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
              French Textbook
              <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                List of payment made for the french textbook.
              </p>
            </caption>
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  #
                </th>
                <th scope="col" class="px-6 py-3">
                  Transaction ID
                </th>
                <th scope="col" class="px-6 py-3">
                  User name
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
                <td class="px-6 py-4">SQPIDO6384121457997700002</td>
                <td class="px-6 py-4">Akande Mercy</td>
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
                <td class="px-6 py-4">6ceb7891-c061-4c6a-87c4-06ed0601e623</td>
                <td class="px-6 py-4">Akande Mercy</td>
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
                <td class="px-6 py-4">6ceb7891-c061-4c6a-87c4-06ed0601e6fb</td>
                <td class="px-6 py-4">Akande Mercy</td>
                <td class="px-6 py-4">₦ 4000</td>
                <td class="px-6 py-4">19 January, 2024 11:43 pm</td>
              </tr>
            </tbody>
          </table>

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
                <th scope="col" class="px-6 py-3">
                  Transaction ID
                </th>
                <th scope="col" class="px-6 py-3">
                  User name
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
                <td class="px-6 py-4">SQPIDO6384121457997700002</td>
                <td class="px-6 py-4">Akande Mercy</td>
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
                <td class="px-6 py-4">6ceb7891-c061-4c6a-87c4-06ed0601e623</td>
                <td class="px-6 py-4">Akande Mercy</td>
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
                <td class="px-6 py-4">6ceb7891-c061-4c6a-87c4-06ed0601e6fb</td>
                <td class="px-6 py-4">Akande Mercy</td>
                <td class="px-6 py-4">₦ 4000</td>
                <td class="px-6 py-4">19 January, 2024 11:43 pm</td>
              </tr>
            </tbody>
          </table>
          {/* dummy table 3 */}
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
              English Textbook
              <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                Record of class due payments made.
              </p>
            </caption>
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  #
                </th>
                <th scope="col" class="px-6 py-3">
                  Transaction ID
                </th>
                <th scope="col" class="px-6 py-3">
                  User name
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
                <td class="px-6 py-4">SQPIDO6384121457997700002</td>
                <td class="px-6 py-4">Akande Mercy</td>
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
                <td class="px-6 py-4">6ceb7891-c061-4c6a-87c4-06ed0601e623</td>
                <td class="px-6 py-4">Akande Mercy</td>
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
                <td class="px-6 py-4">6ceb7891-c061-4c6a-87c4-06ed0601e6fb</td>
                <td class="px-6 py-4">Akande Mercy</td>
                <td class="px-6 py-4">₦ 4000</td>
                <td class="px-6 py-4">19 January, 2024 11:43 pm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Payments;
