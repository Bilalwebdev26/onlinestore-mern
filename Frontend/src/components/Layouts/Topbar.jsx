import React from 'react'
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
const Topbar = () => {
  return (
    <div className='text-white bg-red-500'>
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <div className="hidden md:flex items-center space-x-4">
            <a href="#" className='hover:text-gray-300'>
                <TbBrandMeta className='h-5 w-5'/>
            </a>
            <a href="#" className='hover:text-gray-300'>
                <IoLogoInstagram className='h-5 w-5'/>
            </a>
            <a href="#" className='hover:text-gray-300'>
                <RiTwitterXLine className='h-5 w-5'/>
            </a>
        </div>
        <div className="text-sm text-center flex-grow">
            <span>We Ship WorldWide - fast and reliable shipping!</span>
        </div>
        <div className="hidden md:block">
            <a href="tel:+123456789" className='hover:text-gray-300'>+1 (234) 567-890</a>
        </div>
      </div>
    </div>
  )
}

export default Topbar
