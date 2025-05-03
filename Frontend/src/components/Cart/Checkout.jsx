import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PayPalButton from "./PayPalButton";

const Checkout = () => {
  const navigate = useNavigate();
  const [shippingAddress, setshippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });
  const [CheckoutId, setCheckoutId] = useState(null);
  const cart = {
    products: [
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
        name: "Pant",
        size: "L",
        color: "blue",
        quantity: 1,
        price: 25,
        image: "https://picsum.photos/200?random=2",
      },
      {
        productId: 3,
        name: "Short",
        size: "S",
        color: "green",
        quantity: 1,
        price: 20,
        image: "https://picsum.photos/200?random=3",
      },
    ],
    totalPrice:220,
  };
  const handleCheckoutPayment = (e) => {
    e.preventDefault();
    setCheckoutId(123);
  };
  const handlePaymentSuccess = (details) => {
    console.log("Payment SuccessFull : ", details);
    navigate("/order-configration");
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      {/* Left Section */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6">Checkout</h2>
        <form onSubmit={handleCheckoutPayment}>
          <h3 className="text-lg mb-4">Contact Details</h3>
          <div className="mb-4">
            <label htmlFor="" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={"user@gmail.com"}
              className="w-full p-2 border rounded "
              disabled
            />
          </div>
          <h3 className="text-lg mb-4">Delivery</h3>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div className="">
              <label htmlFor="" className="text-gray-700 block">
                First Name
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={shippingAddress.firstName}
                onChange={(e) =>
                  setshippingAddress({
                    ...shippingAddress,
                    firstName: e.target.value,
                  })
                }
              />
            </div>
            <div className="">
              <label htmlFor="" className="text-gray-700 block">
                Last Name
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={shippingAddress.lastName}
                onChange={(e) =>
                  setshippingAddress({
                    ...shippingAddress,
                    lastName: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block text-gray-700">
              Address
            </label>
            <input
              type="text"
              value={shippingAddress.address}
              onChange={(e) =>
                setshippingAddress({
                  ...shippingAddress,
                  address: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div className="">
              <label htmlFor="" className="text-gray-700 block">
                City
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={shippingAddress.city}
                onChange={(e) =>
                  setshippingAddress({
                    ...shippingAddress,
                    city: e.target.value,
                  })
                }
              />
            </div>
            <div className="">
              <label htmlFor="" className="text-gray-700 block">
                Postal Code
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={shippingAddress.postalCode}
                onChange={(e) =>
                  setshippingAddress({
                    ...shippingAddress,
                    postalCode: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block text-gray-700">
              Phone Number
            </label>
            <input
              type="number"
              value={shippingAddress.phone}
              onChange={(e) =>
                setshippingAddress({
                  ...shippingAddress,
                  phone: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block text-gray-700">
              Country
            </label>
            <input
              type="text"
              value={shippingAddress.country}
              onChange={(e) =>
                setshippingAddress({
                  ...shippingAddress,
                  country: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mt-6">
            {!CheckoutId ? (
              <button
                type="submit"
                className="bg-black w-full text-white py-3 rounded"
              >
                Continue To Payment
              </button>
            ) : (
              <div className="">
                <h3 className="text-lg mb-4">Pay with Paypal</h3>
                {/* Paypal button comp*/}
                <PayPalButton
                  amount={100}
                  onSuccess={handlePaymentSuccess}
                  onError={(err) => alert("Payment failed.Try again")}
                />
              </div>
            )}
          </div>
        </form>
      </div>
      {/* Right Section */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="mb-4 text-lg">Order Summary</h3>
        <div className="mb-4 border-t py-4">
          {cart.products.map((product, index) => (
            <div
              className="flex items-start justify-between py-2 border-b"
              key={index}
            >
              <div className="flex items-start">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-24 object-cover mr-4"
                />
                <div className="">
                  <h3 className="text-md">{product.name}</h3>
                  <p className="text-gray-500">Size : {product.size}</p>
                  <p className="text-gray-500">Color : {product.color}</p>
                </div>
              </div>
              <p className="text-xl">${product.price?.toLocaleString()}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center text-lg mb-4">
          <p>Subtotal</p>
          <p>${cart.totalPrice?.toLocaleString()}</p>
        </div>
        <div className="flex justify-between items-center text-lg">
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div className="flex justify-between items-center text-lg mt-4 border-t pt-4">
          <p>Total</p>
          <p>${cart.totalPrice?.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
