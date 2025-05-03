import React, { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import CartContent from "../Cart/CartContent";
import { useNavigate } from "react-router-dom";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  const navigate = useNavigate()
  const handleCheckout = ()=>{
    toggleCartDrawer()
     navigate("/checkout")
  }
  return (
    <div
      className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 lg:w-1/3 shadow-lg transform transition-transform duration-300 bg-white flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
          <HiMiniXMark className="h-8 w-8 cursor-pointer " />
        </button>
      </div>
      {/* Cart content with scroll bar */}
      <div className="flex-grow p-4 overflow-y-auto">
         <h2 className="text-xl font-semibold mb-4">Your Cart </h2>
         {/* componet for cart prodcut */}
         <CartContent/>
      </div>
      {/* Checkout section */}
      <div className="bg-white p-4 sticky bottom-0">
        <button onClick={handleCheckout} className="w-full bg-black text-white font-semibold hover:bg-gray-800 py-3 rounded-lg duration-300 cursor-pointer">Checkout</button>
        <p className="text-sm tracking-tighter text-center mt-2 text-gray-600">Shipping,taxes,and discount codes calculated at checkout.</p>
      </div>
    </div>
  );
};

export default CartDrawer;
