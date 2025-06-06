import React from "react";
import { Link } from "react-router-dom";
function ProductGrid({ products,loading,error }) {
  console.log("Products from grid : ",products)
  if(loading){
    return <p className="text-center text-3xl font-black">Loading....</p>
  }
  if(error){
    return <p className="text-center text-2xl font-mono">Error : {error}</p>
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
      {products.map((product,index) => (
        <Link key={product._id} to={`/product/${product._id}`} className="block">
          <div className="bg-white p-4 rounded-lg ">
            <div className="h-96 w-full">
              <img
                src={product.images[0]?.url}
                alt={product.images[0]?.altText || product.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-sm mb-2">{product.name}</h3>
            <p className="text-gray-500 font-medium text-sm tracking-tighter">${" "}{product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductGrid;
