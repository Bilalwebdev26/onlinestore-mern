import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import SearchBar from "../Common/SearchBar";
import CartDrawer from "./CartDrawer";

const NavBar = () => {
  const[drawerOpen,setDrawerOpen]=useState(false)
  const toggleCartDrawer = ()=>{
      setDrawerOpen(!drawerOpen)
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
            to="#"
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
          <Link to={"/profile"} className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>
          <button onClick={toggleCartDrawer} className="relative hover:text-black">
            <HiOutlineShoppingBag className="h-6 w-6 cursor-pointer" />
            <span className="absolute -top-2.5 bg-red-600 px-2 rounded-full text-white text-xs py-1 cursor-pointer">
              4
            </span>
          </button>
          <SearchBar />
          <button className="cursor-pointer md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
        {/* Cart drawer component */}
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
    </>
  );
};

export default NavBar;
