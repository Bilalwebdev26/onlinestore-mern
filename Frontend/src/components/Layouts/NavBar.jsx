import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import SearchBar from "../Common/SearchBar";
import CartDrawer from "./CartDrawer";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const[drawerOpen,setDrawerOpen]=useState(false)
  const[navDrawerOpen,setNavDrawerOpen]=useState(false)
  const toggleCartDrawer = ()=>{
      setDrawerOpen(!drawerOpen)
  }
  const toggleNavDrawer = ()=>{
    setNavDrawerOpen(!navDrawerOpen)
  }
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="">
          <Link to={"/"} className="text-2xl font-medium">
            Rabbit
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link
            to="/collection/all"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Men
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Women
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Top Wear
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Bottom Wear
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link to={"/login"} className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>
          <button onClick={toggleCartDrawer} className="relative hover:text-black">
            <HiOutlineShoppingBag className="h-6 w-6 cursor-pointer" />
            <span className="absolute -top-2.5 bg-red-600 px-2 rounded-full text-white text-xs py-1 cursor-pointer">
              4
            </span>
          </button>
          <SearchBar />
          <button className="cursor-pointer md:hidden" onClick={toggleNavDrawer}>
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
        {/* Cart drawer component */}
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
      {/* Mobile Navigation */}
      <div className={`fixed top-0 left-0 h-full w-3/4 sm:w-1/2 lg:w-1/3 shadow-lg transform transition-transform duration-300 bg-white flex flex-col z-50 ${
        navDrawerOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
          <div className="flex justify-end p-4 ">
             <button onClick={toggleNavDrawer}>
              <IoMdClose className="h-6 w-6"/>
             </button>
          </div>
          <div className="p-4">
               <h2 className="text-xl font-semibold mb-8">Menu</h2>
               {/* <nav className="space-y-10">
                <Link to="#" onClick={toggleNavDrawer} className="block text-gray-600 hover:text-black border-b">
                  Men Collection
                </Link>
                <Link to="#" onClick={toggleNavDrawer} className="block text-gray-600 hover:text-black border-b">
                  Women Collection
                </Link>
                <Link to="#" onClick={toggleNavDrawer} className="block text-gray-600 hover:text-black border-b">
                  Top Wear
                </Link>
                <Link to="#" onClick={toggleNavDrawer} className="block text-gray-600 hover:text-black border-b">
                  Bottom Wear
                </Link>
               </nav> */}
               <nav className="space-y-10">
    <Link
        to="#"
        onClick={toggleNavDrawer}
        className="block bg-gradient-to-r from-green-400 via-blue-700 to-red-400 bg-clip-text text-transparent border-b transition duration-300 font-bold"
    >
        Men Collection
    </Link>
    <Link
        to="#"
        onClick={toggleNavDrawer}
        className="block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent border-b transition duration-300 font-bold"
    >
        Women Collection
    </Link>
    <Link
        to="#"
        onClick={toggleNavDrawer}
        className="block bg-gradient-to-r from-red-700 via-pink-200 to-orange-500 bg-clip-text text-transparent border-b transition duration-300 font-bold"
    >
        Top Wear
    </Link>
    <Link
        to="#"
        onClick={toggleNavDrawer}
        className="block bg-gradient-to-r from-green-800 via-slate-900 to-purple-800 bg-clip-text text-transparent border-b transition duration-300 font-bold"
    >
        Bottom Wear
    </Link>
</nav>
          </div>
      </div>
    </>
  );
};

export default NavBar;
