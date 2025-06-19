import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import AdminSideBar from "./AdminSideBar";
import { Outlet } from "react-router-dom";
const AdminLayout = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  return (
    <div className="min-h-screen  flex flex-col md:flex-row relative">
      {/* Mobile toggle button */}
      <div className="flex items-center md:hidden bg-gray-900 text-white z-20 p-3">
        <button onClick={toggleSideBar}>
          <FaBars size={24} />
        </button>
        <h1 className="ml-4 text-xl font-medium">Admin Dashboard</h1>
      </div>
      {/* Overlay for mobile sidebar */}
      {isSideBarOpen && (
        <div
          className="fixed inset-0 z-10 bg-black opacity-50 md:hidden"
          onClick={toggleSideBar}
        ></div>
      )}
      {/* sidebar */}
      <div
        className={`bg-gray-900 text-white w-64 h-screen fixed top-0 left-0 z-30 transform transition-transform duration-300 ${
          isSideBarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:block`}
      >
        <AdminSideBar />
      </div>
      {/* Main Content */}
      <div className="flex-grow p-6 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;

// import React, { useState } from 'react';
// import { FaBars } from "react-icons/fa6";
// import AdminSideBar from './AdminSideBar';
// import { Outlet } from 'react-router-dom';

// const AdminLayout = () => {
//   const [isSideBarOpen, setIsSideBarOpen] = useState(false);

//   const toggleSideBar = () => {
//     setIsSideBarOpen(!isSideBarOpen);
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Fixed Sidebar */}
//       <div className="hidden md:block fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white z-30">
//         <AdminSideBar />
//       </div>

//       {/* Mobile Sidebar with toggle */}
//       {isSideBarOpen && (
//         <>
//           <div className="fixed inset-0 z-20 bg-black opacity-50 md:hidden" onClick={toggleSideBar}></div>
//           <div className="fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white z-30 md:hidden transform transition-transform duration-300">
//             <AdminSideBar />
//           </div>
//         </>
//       )}

//       {/* Mobile top bar */}
//       <div className="md:hidden fixed top-0 left-0 right-0 bg-gray-900 text-white flex items-center z-40 p-3">
//         <button onClick={toggleSideBar}>
//           <FaBars size={24} />
//         </button>
//         <h1 className="ml-4 text-xl font-medium">Admin Dashboard</h1>
//       </div>

//       {/* Main Content with left margin to accommodate fixed sidebar */}
//       <div className="flex-grow md:ml-64 w-full overflow-y-auto p-6 mt-12 md:mt-0">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default AdminLayout;
