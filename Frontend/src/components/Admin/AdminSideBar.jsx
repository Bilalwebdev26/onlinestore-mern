import React from 'react'
import { FaBoxOpen, FaClipboardList, FaStore, FaUser } from 'react-icons/fa6'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaSignOutAlt } from "react-icons/fa";

const AdminSideBar = () => {
    const navigate = useNavigate()
    const handleLogout = ()=>{
        navigate("/")
    }
  return (
    <div className='h-screen w-64 fixed top-0 left-0 bg-gray-800 text-white p-6'>
      <div className="mb-6">
        <Link to="/admin" className='text-2xl font-medium'>Rabbit</Link>
      </div>
      <h2 className='text-center text-xl font-medium mb-6'>Admin Dashboard</h2>
      <nav className='flex flex-col space-y-2'>
        <NavLink to="/admin/users" className={({isActive})=>isActive ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2":"text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"}>
            <FaUser/>
            <span>Users</span>
        </NavLink>
        <NavLink to="/admin/products" className={({isActive})=>isActive ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2":"text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"}>
            <FaBoxOpen/>
            <span>Products</span>
        </NavLink>
        <NavLink to="/admin/orders" className={({isActive})=>isActive ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2":"text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"}>
            <FaClipboardList/>
            <span>Orders</span>
        </NavLink>
        <NavLink to="/" className={({isActive})=>isActive ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2":"text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"}>
            <FaStore/>
            <span>Shop</span>
        </NavLink>
      </nav>
      <div className="mt-6">
        <button onClick={handleLogout} className='w-full bg-red-600 text-white hover:bg-red-700 py-2 px-4 rounded flex items-center justify-center space-x-2 cursor-pointer'>
          <FaSignOutAlt/>
          <span>Logout</span>
        </button>
      </div>
    </div>
  )
}

export default AdminSideBar
