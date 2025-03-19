import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";

const CartContent = () => {
  const cartProducts = [
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
  ];

 // Function to get the color style
 const getColorStyle = (color) => {
    return { color: color }; // Directly use the color string
  };

  return (
    <div>
      {cartProducts.map((product) => (
        <div
          className="flex items-start justify-between py-4 border-b"
          key={product.productId}
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="h-24 object-cover w-20 mr-4 rounded"
            />
            <div className="">
              <h3 className="font-bold">{product.name}</h3>
              <p className="text-sm text-gray-500">
                Size : <span className="text-black font-extrabold"> {product.size}</span> |
                Color :<span className="text-black font-extrabold " style={getColorStyle(product.color)}>{product.color}</span>
              </p>
              <div className="flex items-center mt-2">
                <button className="border rounded px-2 py-1 text-xl font-medium">
                    -
                </button>
                <p className="mx-2">{product.quantity}</p>
                <button className="border rounded px-2 py-1 text-xl font-medium">
                    +
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p className="font-semibold">${product.price.toLocaleString()}</p>
            <button className="mt-5">
                <RiDeleteBin3Line className="h-6 w-6 text-red-600"/>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContent;
