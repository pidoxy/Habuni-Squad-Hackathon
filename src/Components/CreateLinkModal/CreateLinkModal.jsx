import React from 'react'
// import Modal from "../Modal/Modal";

const CreateLinkModal = () => {
return (
  <div>
        {/* <Modal open={open} onClose={() => setOpen(false)}>
            <div className="flex items-center justify-between p-2 md:p-3 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Simple payment link
              </h3>
            </div>
            <form class="space-y-4" action="#">
              <div>
                <label
                  for="payment"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Payment Title<span className="text-red-500">*</span>
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
                 for="amount"
                 class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
               >
                 Amount in Naira<span className="text-red-500">*</span>
               </label>
               <input
                 type="amount"
                 name="amount"
                 id="amount"
                 placeholder="••••••••"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
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
                 placeholder="••••••••"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                 required
               />
             </div> 
              <div>
               <label
                 for="extra_info"
                 class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
               >
                 Do you want to collect any extra information?
                 <span className="text-red-500">*</span>
               </label>
               <input
                 type="extra_info"
                 name="extra_info"
                 id="extra_info"
                 placeholder="••••••••"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                 required
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
                 placeholder="••••••••"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                 required
               />
             </div> 
              <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
           </form>
           <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
             <button
               data-modal-hide="default-modal"
               type="button"
               class="ms-3 text-gray-500 justify-stretch bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
             >
               Cancel
             </button>
             <button
               data-modal-hide="default-modal"
               type="button"
               class="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
             >
               Go Back
             </button>
             <button
                 data-modal-hide="default-modal"
                 type="button"
                 onClick={generatePaymentLink}
                 class="ms-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
               >
                 Create Link
               </button>
             </div>
           </Modal> */}
    </div>
  )
}

export default CreateLinkModal