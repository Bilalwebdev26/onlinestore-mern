import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, updateQuan } from "../../redux/slices/cart.Slice";
const CartContent = ({ cart, user, guestId }) => {
  const dispatch = useDispatch()
  console.log("-------------------Cart------------- : ", cart);

  // Function to get the color style
  const getColorStyle = (color) => {
    return { color: color }; // Directly use the color string
  };
  const handleAddToCart = (productId, delta, quantity, sizes, color) => {
    const newQunatity = quantity + delta;
    if (newQunatity >= 1) {
      dispatch(
        updateQuan({
          productId,
          quantity: newQunatity,
          guestId,
          user,
          sizes,
          color,
        })
      );
    }
  };
  const handleRemoveFromCart = (productId, sizes, color) => {
    console.log("______________Product ID ____________: ",productId)
    console.log("______________user ID ____________: ",user)
    dispatch(deleteFromCart({ productId, user, guestId, color, sizes }));
  };
  console.log("Cart.products", cart.products);
  return (
    <div>
      {console.log("Product.images-------------",cart.products.images)}
      {cart.products.map((product) => (
        <div
          className="flex items-start justify-between py-4 border-b"
          key={product.productId}
        >
          <div className="flex items-start">
            <img
              src={product.images}
              alt={product.name}
              className="h-24 object-cover w-20 mr-4 rounded"
            />
            <div className="">
              <h3 className="font-bold">{product.name}</h3>
              <p className="text-sm text-gray-500">
                Size :{" "}
                <span className="text-black font-extrabold">
                  {" "}
                  {product.sizes}
                </span>{" "}
                | Color :
                <span
                  className="text-black font-extrabold "
                  style={getColorStyle(product.color)}
                >
                  {product.color}
                </span>
              </p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => handleAddToCart(product.productId,-1,product.quantity,product.sizes,product.color)}
                  className="border rounded px-2 py-1 text-xl font-medium"
                >
                  -
                </button>
                <p className="mx-2">{product.quantity}</p>
                <button onClick={() => handleAddToCart(product.productId,1,product.quantity,product.sizes,product.color)} className="border rounded px-2 py-1 text-xl font-medium">
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p className="font-semibold">${product.price.toLocaleString()}</p>
            <button onClick={()=>handleRemoveFromCart(product.productId,product.sizes,product.color)} className="mt-5">
              <RiDeleteBin3Line className="h-6 w-6 text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContent;
