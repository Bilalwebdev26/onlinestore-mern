import React from "react";
import MyOrderPage from "./MyOrderPage";

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:space-x-6 space-x-6 md:space-y-0">
          {/* left section */}
          <div className="w-full md:w-1/3 lg:w-1/4 shadow-md rounded-lg p-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">John Doe</h1>
            <p className="text-lg text-gray-600 mb-4">John@example.com</p>
            <button className="bg-red-500 w-full text-white font-semibold rounded-lg py-2 px-4 hover:scale-110 hover:bg-red-700 duration-400 cursor-pointer">
              Log Out
            </button>
          </div>
          {/* Right section */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <MyOrderPage/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
