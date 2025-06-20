import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userOrder } from '../redux/slices/order.Slice';

const MyOrderPage = () => {
    const dispatch = useDispatch()
    const naviagte = useNavigate()
    const{orders,loading,error}=useSelector((state)=>state.order)
    useEffect(()=>{
        dispatch(userOrder())
    },[dispatch])
    const handleRowClick = (id)=>{
       naviagte(`/order/${id}`)
    }
    if(loading){
        return <p className='text-3xl text-center font-bold'>Loading...</p>
    }
  return (
    <div className='max-w-7xl mx-auto p-4 sm:p-6'>
        <h2 className='text-xl sm:text-2xl font-bold mb-6 '>My Orders</h2>
        <div className="relative shadow-md sm:rounded-lg overflow-hidden">
            <table className='min-w-full text-left text-gray-500'>
                <thead className='bg-gray-100 text-xs uppercase text-gray-700'>
                    <tr>
                        <th className='py-2 px-4 sm:py-3'>Image</th>
                        <th className='py-2 px-4 sm:py-3'>Id</th>
                        <th className='py-2 px-4 sm:py-3'>Craeted At</th>
                        <th className='py-2 px-4 sm:py-3'>Shipping Address</th>
                        <th className='py-2 px-4 sm:py-3'>Price</th>
                        <th className='py-2 px-4 sm:py-3'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.length>0?(
                        orders?.map((order)=>(
                          <tr key={order._id} onClick={()=>{handleRowClick(order._id)}} className='border-b hover:border-gray-500 cursor-pointer'>
                            <td className='py-2 px-2 sm:py-4 sm:px-4'>
                                <img src={order.orderItem[0]?.images} alt={order.orderItem[0]?.name} 
                                className='w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg'
                                />
                            </td>
                            <td className='py-2 px-2 sm:px-4 sm:py-2 text-sm font-medium text-gray-900 whitespace-nowrap'>
                                #{order._id}
                            </td>
                            <td className='text-sm text-black p-2 sm:p-4 '>
                                {new Date(order.createdAt).toLocaleDateString()}{" "}<br/>
                                {new Date(order.createdAt).toLocaleTimeString()}
                            </td>
                            <td className='p-2 sm:p-4 text-sm text-black'>
                                {order.shippingAddress? `${order.shippingAddress.city},${order.shippingAddress.country}`:"N/A"}
                            </td>
                            <td className='p-2 sm:p-4 text-sm text-black font-semibold'>
                                ${parseFloat(order?.totalPrice).toFixed(2)}
                            </td>
                            <td className='p-2 sm:p-4 text-sm font-semibold'>
                              <span className={`p-2 rounded-sm duration-200 ${order.isPaid?"bg-green-500 hover:bg-green-300 hover:text-black text-white":"bg-red-600 hover:bg-red-300 hover:text-black text-white"}`}>{order.isPaid?"Paid":"Pending"}</span>
                            </td>
                          </tr>
                        ))
                    ):(
                        <tr className="">
                            <td colSpan={7} className='py-4 px-4 text-center text-gray-500'>You have no orders</td>
                        </tr>                   
                    )}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default MyOrderPage
