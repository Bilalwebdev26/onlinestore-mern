import React from "react";
import { FaCartPlus } from "react-icons/fa";

const selectedProduct = {
  _id: 1,
  name: "Jacket",
  originalPrice: 150,
  price: 120,
  description: "This is stylish jacket for any occasion.",
  brand: "FashionBrand",
  material: "Leather",
  colors: ["black", "green", "blue"],
  sizes: ["S", "M", "L", "XL"],
  images: [
    {
      url: "https://picsum.photos/500/500/?random=1",
      altText: "Jacket 1",
    },
    {
      url: "https://picsum.photos/500/500/?random=2",
      altText: "Jacket 2",
    },
  ],
};
const BestSeller = () => {
  return (
    <div className="p-0">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left Thumbnail  */}
          <div className="hidden md:flex flex-col space-y-4 mr-2">
            {selectedProduct.images.map((image, index) => (
              <div className="" key={index}>
                <img
                  src={image.url}
                  alt={image.altText}
                  className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
                />
              </div>
            ))}
          </div>
          {/* Main image  */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={selectedProduct.images[0]?.url}
                alt={selectedProduct.images[0]?.altText}
                className="rounded-lg w-full object-cover h-auto"
              />
            </div>
          </div>
          {/* Mobile Thumbnail  */}
          <div className="flex flex-row md:hidden space-x-4">
            {selectedProduct.images.map((image, index) => (
              <img
                src={image.url}
                alt={image.altText}
                key={index}
                className="h-15 w-15 border rounded-lg"
              />
            ))}
          </div>
          {/* Other sections Right*/}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProduct?.name}
            </h1>
            <div className="flex space-x-4">
              <p className="text-xl mb-2 text-gray-500">
                ${selectedProduct?.price}
              </p>
              <p className="text-lg text-gray-600 mb-1 line-through">
                $
                {selectedProduct?.originalPrice &&
                  `${selectedProduct?.originalPrice}`}
              </p>
            </div>
            <p className="text-gray-600 mb-4">{selectedProduct?.description}</p>
            <div className="mb-4">
              <p className="text-gray-700 font-semibold">Colors:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.colors.map((color, index) => (
                  <button
                    key={index}
                    className="rounded-full border w-8 h-8 cursor-pointer"
                    style={{
                      backgroundColor: color.toLocaleLowerCase(),
                      filter: "brightness(1)",
                    }}
                  >
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4">
                <p className="text-gray-700 font-semibold">Sizes:</p>
                <div className="flex gap-2 mt-2">
                    {selectedProduct.sizes.map((size,index)=>(
                        <button key={index} className="px-4 py-2 rounded border cursor-pointer">{size}</button>
                    ))}
                </div>
            </div>
            <div className="mb-6 ">
                <p className="text-gray-700 font-semibold">Quantity:</p>
                <div className="flex items-center space-x-4 mt-2">
                    <button className="px-2 py-1 bg-gray-200 rounded text-lg cursor-pointer">-</button>
                    <span className="text-lg">1</span>
                    <button className="bg-gray-200 px-2 py-1 rounded text-lg cursor-pointer">+</button>
                </div>
            </div>
            <button className="flex items-center gap-4 bg-black text-white rounded px-6 py-2 w-full mb-4 justify-center">Add To Cart <FaCartPlus className="h-6 w-6"/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
