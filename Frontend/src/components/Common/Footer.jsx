import React from "react";
import { RiTwitchLine, RiTwitterLine } from "react-icons/ri";
import { TbBrandInstagram, TbBrandMeta } from "react-icons/tb";
import { MdOutlineCopyright } from "react-icons/md";
import{FiPhoneCall} from "react-icons/fi"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t py-12 px-7">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-9 px-4 lg:px-0">
        {/* Subscribe  */}
        <div className="">
          <h3 className="text-lg text-gray-800 mb-4 font-bold">News Letter</h3>
          <p className="text-gray-800 mb-4">
            Be the first to hear about products,exclusive events and online
            offer.
          </p>
          <p className="mb-4 text-sm font-semibold">
            Sign up and get 10% of your first order.
          </p>
          <form action="" className="flex">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-3 w-full rounded-l-md text-sm border-l border-b border-gray-300 border-t focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800"
            >
              Subscribe
            </button>
          </form>
        </div>
        {/* Shop Links */}
        <div className="">
            <h3 className="text-lg text-gray-800 mb-4 font-bold ">Shop</h3>
            <ul className="space-y-2 text-gray-600">
                <li>
                    <Link to="#" className="hover:text-gray-500 transition-colors">Mens top Wear</Link>
                </li>
                <li>
                    <Link to="#" className="hover:text-gray-500 transition-colors">Womens top Wear</Link>
                </li>
                <li>
                    <Link to="#" className="hover:text-gray-500 transition-colors">Mens bottom Wear</Link>
                </li>
                <li>
                    <Link to="#" className="hover:text-gray-500 transition-colors">Womens bottom Wear</Link>
                </li>
            </ul>
        </div>
        {/* Contact Us  */}
        <div className="">
            <h3 className="text-lg text-gray-800 mb-4 font-bold">Support</h3>
            <ul className="space-y-2 text-gray-600">
                <li>
                    <Link to="#" className="hover:text-gray-500 transition-colors">Conatct Us</Link>
                </li>
                <li>
                    <Link to="#" className="hover:text-gray-500 transition-colors">About Us</Link>
                </li>
                <li>
                    <Link to="#" className="hover:text-gray-500 transition-colors">FAQ's</Link>
                </li>
                <li>
                    <Link to="#" className="hover:text-gray-500 transition-colors">Features</Link>
                </li>
            </ul>
        </div>
        {/* Follow Us  */}
        <div className="">
            <h3 className="text-lg text-gray-800 mb-4 font-bold">Follow Us</h3>
            <div className="flex items-center space-x-4 mb-6">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreference" className="hover:text-gray-300">
                <TbBrandMeta className="h-6 w-6"/>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreference" className="hover:text-gray-300">
                <TbBrandInstagram className="h-6 w-6"/>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreference" className="hover:text-gray-300">
                <RiTwitterLine className="h-6 w-6"/>
                </a>
            </div>
            <p>Call us</p>
            <p>
                <FiPhoneCall className="inline-block mr-2 "/>
                0123-456-7890
            </p>
        </div>
        
      </div>
      <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6 flex items-center justify-center">
        <p className="text-sm md:text-md font-semibold text-gray-500">
        <MdOutlineCopyright className="h-6 w-6 inline-block text-black"/>
            2025 ,CompileTab.All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
