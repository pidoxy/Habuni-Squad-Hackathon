import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const SquadPos = () => {
  return (
    <div>
      {/* sidebar */}
      <Sidebar />

      <div className="p-4 sm:ml-64">
        <div className="flex items-center justify-center my-3 h-24 rounded bg-gray-50 dark:bg-gray-800">
          <p className="text-2xl text-gray-400 dark:text-gray-500">
            Coming soon, our pay with a tap on your phone feature
          </p>
        </div>
      </div>
    </div>
  );
};

export default SquadPos;
