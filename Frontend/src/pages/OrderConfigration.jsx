import React from "react";
// import { data } from "react-router-dom";
const checkout = {
  _id: "123456",
  createdAt: new Date(),
  checkOutItem: [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      color: "red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "T-shirt",
      size: "M",
      color: "Black",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=2",
    },
  ],
  shippingAddress:{
    address:"123 NewYork",
    city:"New York",
    Country:"USA"
  }
};
const calculateEstimatedDelivery = (createdAt)=>{
    const orderDate = new Date(createdAt)
    orderDate.setDate(orderDate.getDate()+10) //add next 10 days
    return orderDate.toLocaleDateString()
}
const OrderConfigration = () => {
  return <div className="max-w-4xl mx-auto p-6 bg-white ">
   <h1 className="text-4xl text-center mb-8 text-emerald-700 font-bold">Thank You For Your Order</h1>
   {checkout && <div className="p-6 rounded-lg border">
    <div className="flex justify-between mb-20">
        {/* order id and date */}
        <div className="">
            <h2 className="text-xl font-semibold">
                Order ID : {checkout._id}
            </h2>
            <p className="text-gray-500">
                Order Date : {new Date(checkout.createdAt).toLocaleDateString()}
            </p>
        </div>
        {/* Estimated Deleivery */}
        <div className="">
            <p className="text-emerald-700 text-sm">
                Estimated Delivery : {calculateEstimatedDelivery(checkout.createdAt)}
            </p>
        </div>
    </div>
    <div className="mb-20">
        {checkout.checkOutItem.map((item)=>(
            <div className="flex items-center mb-4" key={item._id}>
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4"/>
                <div className="">
                    <h4 className="text-md font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.color} | {item.size}</p>
                </div>
                <div className="ml-auto text-right">
                    <p className="text-md">${item.price}</p>
                    <p className="text-sm text-gray-500">Quantity : {item.quantity}</p>
                </div>
            </div>
        ))}
    </div>
    {/* Payment and delievery */}
    <div className="grid grid-cols-2 gap-8">
        <div className="">
            <h4 className="text-lg font-semibold mb-2">Payment</h4>
            <p className="text-gray-600">Paypal</p>
        </div>
        {/* Delivery info */}
        <div className="">
            <h4 className="text-lg font-semibold mb-2">Delivery</h4>
            <p className="text-gray-600">{checkout.shippingAddress.address}</p>
            <p className="text-gray-600">{checkout.shippingAddress.city},{checkout.shippingAddress.Country}</p>
        </div>
    </div>
    </div>}
  </div>;
};

export default OrderConfigration;
