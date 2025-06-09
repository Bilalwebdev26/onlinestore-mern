import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/slices/cart.Slice";
const calculateEstimatedDelivery = (createdAt) => {
  const orderDate = new Date(createdAt);
  orderDate.setDate(orderDate.getDate() + 10); //add next 10 days
  return orderDate.toLocaleDateString();
};
const OrderConfigration = () => {
  //clear cart when order is confirmed
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { checkout, loading, error } = useSelector((state) => state.checkout);
  console.log("_________CHECKOUT : ", checkout);
  useEffect(() => {
    if (checkout && checkout._id) {
      dispatch(clearCart());
      localStorage.removeItem("cart");
    } else {
      navigate("/my-orders");
    }
  }, [checkout, dispatch, navigate]);
  if (loading) {
    return <p className="text-3xl text-center font-bold">Loading...</p>;
  }
  if (error) {
    return <p className="text-3xl text-center font-bold">Error:{error}</p>;
  }
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white ">
      <h1 className="text-4xl text-center mb-8 text-emerald-700 font-bold">
        Thank You For Your Order
      </h1>
      {checkout && (
        <div className="p-6 rounded-lg border">
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
                Estimated Delivery :{" "}
                {calculateEstimatedDelivery(checkout.createdAt)}
              </p>
            </div>
          </div>
          <div className="mb-20">
            {console.log("----------____Checkout_____------- : ", checkout)}
            {/* {checkout.checkoutItem.map((item) => (
              <div className="flex items-center mb-4" key={item._id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div className="">
                  <h4 className="text-md font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">
                    {item.color} | {item.size}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-md">${item.price}</p>
                  <p className="text-sm text-gray-500">
                    Quantity : {item.quantity}
                  </p>
                </div>
              </div>
            ))} */}
            {Array.isArray(checkout.checkoutItems) &&
              checkout.checkoutItems.map((item) => (
                <div className="flex items-center mb-4" key={item._id}>
                  <img
                    src={item.images}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md mr-4"
                  />
                  <div>
                    <h4 className="text-md font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-500">
                      Color : {item.color} |Size :  {item.sizes}
                    </p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="text-md">${item.price}</p>
                    <p className="text-sm text-gray-500">
                      Quantity : {item.quantity}
                    </p>
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
              <p className="text-gray-600">
                {checkout.shippingAddress.address}
              </p>
              <p className="text-gray-600">
                {checkout.shippingAddress.city},
                {checkout.shippingAddress.Country}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfigration;
