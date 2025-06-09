import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { orderById } from "../redux/slices/order.Slice";

const OrderDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const{orderDetail,loading,error}=useSelector((state)=>state.order)
  useEffect(()=>{
    dispatch(orderById(id))
  },[dispatch,id])
  // useEffect(() => {
  //   const mockOrder = {
  //     _id: id,
  //     createdAt: new Date(),
  //     isPaid: true,
  //     isDelivered: false,
  //     paymentMethod: "Paypal",
  //     shippingMethod: "standard",
  //     shippingAddress: {
  //       city: "New York",
  //       country: "USA",
  //     },
  //     orderItem: [
  //       {
  //         productId: 1,
  //         name: "T-shirt Polo black kncok",
  //         size: "M",
  //         color: "red",
  //         quantity: 1,
  //         price: 15,
  //         image: "https://picsum.photos/200?random=1",
  //       },
  //       {
  //         productId: 2,
  //         name: "T-shirt",
  //         size: "M",
  //         color: "red",
  //         quantity: 3,
  //         price: 45,
  //         image: "https://picsum.photos/200?random=2",
  //       },
  //     ],
  //   };
  //   setOrderDetail(mockOrder);
  // }, [id]);
  if(loading){
    return <p className="text-3xl font-bold ">Loading...</p>
  }
  if(error){
    return <p className="text-3xl font-bold ">Error:{error}</p>
  }
  return (
    <div className="mx-auto max-w-7xl p-4 sm:p-6">
      <h2 className="font-bold text-3xl">Order Details</h2>
      {!orderDetail ? (
        <p>No Order Detail Found</p>
      ) : (
        <div className="p-4 max-w-5xl mx-auto border rounded-md border-gray-400">
          <div className="flex justify-between flex-col md:flex-row">
            <div className="">
              <p>
                <span className="font-semibold">Order Id </span>:{" "}
                {orderDetail._id}
              </p>
              <p className="text-sm text-gray-700">
                {new Date(orderDetail.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="space-y-1 mb-3">
              {orderDetail.isPaid ? (
                <p className="bg-green-100 rounded-xl p-1 text-xs text-center font-medium text-green-700">
                  Approved
                </p>
              ) : (
                <p className="bg-red-100 rounded-xl p-1 text-xs text-center font-medium text-red-700">
                  Not Paid
                </p>
              )}
              {orderDetail.isDelivered ? (
                <p className="rounded-xl p-1 text-xs text-center font-medium text-emerald-900 bg-green-300">
                  Delivered
                </p>
              ) : (
                <p className="rounded-xl p-1 text-xs text-center font-medium text-gray-600  bg-yellow-200 ">
                  Pending Delivery
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-around flex-col md:flex-row">
            <div className="mb-3 border bg-gray-50 rounded-md border-gray-400 p-1 md:border-none md:bg-none shadow-md">
              <h2 className="font-semibold">Payment Info</h2>
              <p className="font-mono">
                Payment Metod : {orderDetail.paymentMethod}
              </p>
              <p className="font-mono">
                Status : {orderDetail.isPaid ? "Paid" : "Not Paid"}
              </p>
            </div>
            <div className="mb-3 border bg-gray-50 rounded-md border-gray-400 p-1 md:border-none md:bg-none shadow-md">
              <h2 className="font-semibold">Shipping Info</h2>
              <p className="font-mono">
                Shipping Method : {orderDetail.shippingMethod}
              </p>
              <p className="font-mono">
                Address : {orderDetail.shippingAddress?.city},
                {orderDetail.shippingAddress?.country}
              </p>
            </div>
          </div>
          <div className="">
            <h2 className="font-black">Product</h2>
            <table className="w-full">
              <thead className="bg-gray-100 uppercase rounded-md">
                <tr>
                  <th className="py-2 px-4 sm:px-3">Name</th>
                  <th className="py-2 px-4 sm:px-3">Unit Price</th>
                  <th className="py-2 px-4 sm:px-3">Qty</th>
                  <th className="py-2 px-4 sm:px-3">Total</th>
                </tr>
              </thead>
              <tbody>
                {orderDetail.orderItem.map((item, index) => (
                  <tr className="border-b hover:border-gray-700" key={index}>
                    <td className="p-2 sm:p-4 flex items-center font-mono gap-2 flex-col md:flex-row text-start">
                      <img
                        src={item.images}
                        alt={item.name}
                        className="w-10 h-10 rounded-md object-cover"
                      />
                      <Link
                        to={`/product/${item.productId}`}
                        className="text-md text-blue-900"
                      >
                        {item.name}
                      </Link>
                    </td>
                    <td className="text-right">
                      <span>${item.price}</span>
                    </td>
                    <td className="text-right">
                      <span>{item.quantity}</span>
                    </td>
                    <td className="text-right">
                      <span>${item.price * item.quantity}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link
              className="font-normal text-sm text-blue-900 flex items-center my-3"
              to={"/my-orders"}
            >
              <IoArrowBack className="text-black font-bold w-5 h-5" />
              Back to My Orders
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetail;
