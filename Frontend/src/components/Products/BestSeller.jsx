// import React, { useEffect, useState } from "react";
// import { FaCartPlus } from "react-icons/fa";

// const selectedProducts = {
//   _id: 1,
//   name: "Jacket",
//   originalPrice: 150,
//   price: 120,
//   description: "This is stylish jacket for any occasion.",
//   brand: "FashionBrand",
//   material: "Leather",
//   colors: ["black", "green", "blue"],
//   sizes: ["S", "M", "L", "XL"],
//   images: [
//     {
//       url: "https://picsum.photos/500/500/?random=1",
//       altText: "Jacket 1",
//     },
//     {
//       url: "https://picsum.photos/500/500/?random=2",
//       altText: "Jacket 2",
//     },
//   ],
// };
// const BestSeller = () => {
//     const[mainImage,setMainImage]=useState("")
//     useEffect(()=>{
//         if(selectedProducts?.images?.length>0){
//             setMainImage(selectedProducts.images[0].url)
//         }
//     },[selectedProducts])

//   return (
//     <div className="p-0">
//       <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
//         <div className="flex flex-col md:flex-row">
//           {/* Left Thumbnail  */}
//           <div className="hidden md:flex flex-col space-y-4 mr-2">
//             {selectedProducts.images.map((image, index) => (
//               <div className="" key={index}>
//                 <img
//                   src={image.url}
//                   alt={image.altText}
//                   className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
//                   onClick={()=>{setMainImage(image?.url)}}
//                 />
//               </div>
//             ))}
//           </div>
//           {/* Main image  */}
//           <div className="md:w-1/2">
//             <div className="mb-4">
//               <img
//                 src={mainImage}
//                 alt={selectedProducts.images[0]?.altText}
//                 className="rounded-lg w-full object-cover h-auto"
//               />
//             </div>
//           </div>
//           {/* Mobile Thumbnail  */}
//           <div className="flex flex-row md:hidden space-x-4">
//             {selectedProducts.images.map((image, index) => (
//               <img
//                 src={image.url}
//                 alt={image.altText}
//                 key={index}
//                 className="h-15 w-15 border rounded-lg"
//               />
//             ))}
//           </div>
//           {/* Other sections Right*/}
//           <div className="md:w-1/2 md:ml-10">
//             <h1 className="text-2xl md:text-3xl font-semibold mb-2">
//               {selectedProducts?.name}
//             </h1>
//             <div className="flex space-x-4">
//               <p className="text-xl mb-2 text-gray-500">
//                 ${selectedProducts?.price}
//               </p>
//               <p className="text-lg text-gray-600 mb-1 line-through">
//                 $
//                 {selectedProducts?.originalPrice &&
//                   `${selectedProducts?.originalPrice}`}
//               </p>
//             </div>
//             <p className="text-gray-600 mb-4">{selectedProducts?.description}</p>
//             <div className="mb-4">
//               <p className="text-gray-700 font-semibold">Colors:</p>
//               <div className="flex gap-2 mt-2">
//                 {selectedProducts.colors.map((color, index) => (
//                   <button
//                     key={index}
//                     className="rounded-full border w-8 h-8 cursor-pointer"
//                     style={{
//                       backgroundColor: color.toLocaleLowerCase(),
//                       filter: "brightness(0.7)",
//                     }}
//                   >
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <div className="mb-4">
//                 <p className="text-gray-700 font-semibold">Sizes:</p>
//                 <div className="flex gap-2 mt-2">
//                     {selectedProducts.sizes.map((size,index)=>(
//                         <button key={index} className="px-4 py-2 rounded border cursor-pointer">{size}</button>
//                     ))}
//                 </div>
//             </div>
//             <div className="mb-6 ">
//                 <p className="text-gray-700 font-semibold">Quantity:</p>
//                 <div className="flex items-center space-x-4 mt-2">
//                     <button className="px-2 py-1 bg-gray-200 rounded text-lg cursor-pointer">-</button>
//                     <span className="text-lg">1</span>
//                     <button className="bg-gray-200 px-2 py-1 rounded text-lg cursor-pointer">+</button>
//                 </div>
//             </div>
//             <button className="flex items-center gap-4 bg-black text-white rounded px-6 py-2 w-full mb-4 justify-center cursor-pointer hover:scale-110 duration-400">Add To Cart <FaCartPlus className="h-6 w-6"/></button>
//             <div className="mt-10 text-gray-700">
//             <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
//             <table className="w-full text-left text-sm text-gray-600">
//                 <tbody>
//                     <tr>
//                         <td className="py-1">Brand</td>
//                         <td className="py-1">{selectedProducts?.brand}</td>
//                     </tr>
//                     <tr>
//                         <td className="py-1">Material</td>
//                         <td className="py-1">{selectedProducts?.material}</td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//           </div>

//         </div>
//         {/* Characteristic Table  */}

//       </div>
//     </div>
//   );
// };

// export default BestSeller;
// import React, { useEffect, useState, useRef } from "react";
// import { FaCartPlus } from "react-icons/fa";

// const selectedProducts = {
//   _id: 1,
//   name: "Jacket",
//   originalPrice: 150,
//   price: 120,
//   description: "This is stylish jacket for any occasion.",
//   brand: "FashionBrand",
//   material: "Leather",
//   colors: ["black", "green", "blue"],
//   sizes: ["S", "M", "L", "XL"],
//   images: [
//     {
//       url: "https://picsum.photos/500/500/?random=1",
//       altText: "Jacket 1",
//     },
//     {
//       url: "https://picsum.photos/500/500/?random=2",
//       altText: "Jacket 2",
//     },
//   ],
// };

// const BestSeller = () => {
//   const [mainImage, setMainImage] = useState("");
//   const [isZoomed, setIsZoomed] = useState(false);
//   const [zoomStyle, setZoomStyle] = useState({});
//   const imageContainerRef = useRef(null);

//   useEffect(() => {
//     if (selectedProducts?.images?.length > 0) {
//       setMainImage(selectedProducts.images[0].url);
//     }
//   }, []);

//   const handleMouseMove = (e) => {
//     if (!imageContainerRef.current) return;

//     const container = imageContainerRef.current;
//     const { left, top, width, height } = container.getBoundingClientRect();
//     const x = ((e.clientX - left) / width) * 100;
//     const y = ((e.clientY - top) / height) * 100;

//     setZoomStyle({
//       transformOrigin: `${x}% ${y}%`,
//       transform: "scale(2)",
//     });
//   };

//   const handleMouseEnter = () => {
//     setIsZoomed(true);
//   };

//   const handleMouseLeave = () => {
//     setIsZoomed(false);
//     setZoomStyle({});
//   };

//   return (
//     <div className="p-0">
//       <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
//         <div className="flex flex-col md:flex-row">
//           {/* Left Thumbnail */}
//           <div className="hidden md:flex flex-col space-y-4 mr-2">
//             {selectedProducts.images.map((image, index) => (
//               <div key={index}>
//                 <img
//                   src={image.url}
//                   alt={image.altText}
//                   className={`w-20 h-20 object-cover rounded-lg cursor-pointer border transition-colors duration-300 ${mainImage === image.url ? "border-emerald-400 ring-2" : "border-gray-500"}`}
//                   onClick={() => setMainImage(image.url)}
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Main image with inline zoom */}
//           <div className="md:w-1/2 relative overflow-hidden">
//             <div
//               ref={imageContainerRef}
//               className="mb-4 relative"
//               onMouseMove={handleMouseMove}
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//             >
//               <img
//                 src={mainImage}
//                 alt={selectedProducts.images[0]?.altText}
//                 className={`rounded-lg w-full object-cover h-auto transition-transform duration-300  ${
//                   isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
//                 }`}
//                 style={zoomStyle}
//               />

//               {/* Zoom indicator (optional) */}
//               {isZoomed && (
//                 <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
//                   Zoomed 2x
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Mobile Thumbnail */}
//           <div className="flex flex-row md:hidden space-x-4">
//             {selectedProducts.images.map((image, index) => (
//               <img
//                 src={image.url}
//                 alt={image.altText}
//                 key={index}
//                 className="h-15 w-15 border rounded-lg"
//                 onClick={() => setMainImage(image.url)}
//               />
//             ))}
//           </div>

//           {/* Other sections Right*/}
//           <div className="md:w-1/2 md:ml-10">
//             {/* ... rest of your product details code remains the same ... */}
//             <h1 className="text-2xl md:text-3xl font-semibold mb-2">
//               {selectedProducts?.name}
//             </h1>
//             <div className="flex space-x-4">
//               <p className="text-xl mb-2 text-gray-500">
//                 ${selectedProducts?.price}
//               </p>
//               <p className="text-lg text-gray-600 mb-1 line-through">
//                 $
//                 {selectedProducts?.originalPrice &&
//                   `${selectedProducts?.originalPrice}`}
//               </p>
//             </div>
//             <p className="text-gray-600 mb-4">{selectedProducts?.description}</p>
//             <div className="mb-4">
//               <p className="text-gray-700 font-semibold">Colors:</p>
//               <div className="flex gap-2 mt-2">
//                 {selectedProducts.colors.map((color, index) => (
//                   <button
//                     key={index}
//                     className="rounded-full border w-8 h-8 cursor-pointer"
//                     style={{
//                       backgroundColor: color.toLocaleLowerCase(),
//                       filter: "brightness(0.7)",
//                     }}
//                   >
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <div className="mb-4">
//                 <p className="text-gray-700 font-semibold">Sizes:</p>
//                 <div className="flex gap-2 mt-2">
//                     {selectedProducts.sizes.map((size,index)=>(
//                         <button key={index} className="px-4 py-2 rounded border cursor-pointer">{size}</button>
//                     ))}
//                 </div>
//             </div>
//             <div className="mb-6 ">
//                 <p className="text-gray-700 font-semibold">Quantity:</p>
//                 <div className="flex items-center space-x-4 mt-2">
//                     <button className="px-2 py-1 bg-gray-200 rounded text-lg cursor-pointer">-</button>
//                     <span className="text-lg">1</span>
//                     <button className="bg-gray-200 px-2 py-1 rounded text-lg cursor-pointer">+</button>
//                 </div>
//             </div>
//             <button className="flex items-center gap-4 bg-black text-white rounded px-6 py-2 w-full mb-4 justify-center cursor-pointer hover:scale-110 duration-400">Add To Cart <FaCartPlus className="h-6 w-6"/></button>
//             <div className="mt-10 text-gray-700">
//             <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
//             <table className="w-full text-left text-sm text-gray-600">
//                 <tbody>
//                     <tr>
//                         <td className="py-1">Brand</td>
//                         <td className="py-1">{selectedProducts?.brand}</td>
//                     </tr>
//                     <tr>
//                         <td className="py-1">Material</td>
//                         <td className="py-1">{selectedProducts?.material}</td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BestSeller;
import React, { useEffect, useState, useRef } from "react";
import { toast } from "sonner";
import { FaCartPlus } from "react-icons/fa";
import ProductGrid from "./ProductGrid";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductById,
  fetchSimilarProducts,
} from "../../redux/slices/product.slice.js";
import { addItemInCart } from "../../redux/slices/cart.Slice.js";

// const selectedProducts = {
//   _id: 1,
//   name: "Jacket",
//   originalPrice: 150,
//   price: 120,
//   description: "This is stylish jacket for any occasion.",
//   brand: "FashionBrand",
//   material: "Leather",
//   colors: ["black", "green", "blue"],
//   sizes: ["S", "M", "L", "XL"],
//   images: [
//     {
//       url: "https://picsum.photos/500/500/?random=1",
//       altText: "Jacket 1",
//     },
//     {
//       url: "https://picsum.photos/500/500/?random=2",
//       altText: "Jacket 2",
//     },
//   ],
// };
// const similarProducts = [
//   {
//     _id: 1,
//     name: "Product 1",
//     price: 100,
//     images: [{ url: "https://picsum.photos/500/500/?random=2" }],
//   },
//   {
//     _id: 2,
//     name: "Product 2",
//     price: 100,
//     images: [{ url: "https://picsum.photos/500/500/?random=3" }],
//   },
//   {
//     _id: 3,
//     name: "Product 3",
//     price: 100,
//     images: [{ url: "https://picsum.photos/500/500/?random=4" }],
//   },
//   {
//     _id: 4,
//     name: "Product 4",
//     price: 100,
//     images: [{ url: "https://picsum.photos/500/500/?random=5" }],
//   },
// ];

const BestSeller = ({ productId }) => {
  //47
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedProducts, similarProducts, loading, error } = useSelector(
    (state) => state.product
  );
  console.log("Selected Product : ", selectedProducts);
  const { user, guestId } = useSelector((state) => state.auth);
  // Initialize with the first image URL immediately
  const [mainImage, setMainImage] = useState(
    null
    // selectedProducts.images.length > 0 ? selectedProducts.images[0].url : null
  );
  const [selecetSize, setSelectSize] = useState("S");
  const [selectColor, setSelectColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomStyle, setZoomStyle] = useState({});
  const imageContainerRef = useRef(null);
  const productFetchById = productId || id;
  console.log("productFetchById : ", productFetchById);
  useEffect(() => {
    console.log("Selected Product : ", selectedProducts);
  }, [selectedProducts]);
  useEffect(() => {
    if (productFetchById) {
      dispatch(fetchProductById({ id: productFetchById }));
      dispatch(fetchSimilarProducts({ id: productFetchById }));
    }
  }, [dispatch,productFetchById]);
  // Update mainImage when selectedProducts is loaded
  useEffect(() => {
    if (selectedProducts?.images?.length > 0) {
      setMainImage(selectedProducts.images[0].url);
    }
  }, [selectedProducts]);
  console.log("Selected : ", selectedProducts);
  const handleQuantityChange = (action) => {
    if (action === "plus") setQuantity((prev) => prev + 1);
    if (action === "minus") setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };
  const handleAddToCart = () => {
    if (!selectColor) {
      toast.error("Please Select Color", { duration: 1000 });
      return;
    }
    setIsButtonDisabled(true);
    dispatch(
      addItemInCart({
        productId: productFetchById,
        quantity,
        sizes: selecetSize,
        color: selectColor,
        guestId,
        user: user?._id,
        images:mainImage,
      })
    )
      .then(() => {
        toast.success("Product added into the cart", {
          duration: 1000,
        });
      })
      .finally(() => {
        setIsButtonDisabled(false);
      });
  };
  if (loading) {
    return <p>Loading....</p>;
  }
  if (error) {
    return <p>Error : {error}</p>;
  }
  const handleMouseMove = (e) => {
    if (!imageContainerRef.current) return;

    const container = imageContainerRef.current;
    const { left, top, width, height } = container.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: "scale(2)",
    });
  };

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
    setZoomStyle({});
  };

  // Only render the image if mainImage is not null
  // const renderMainImage = () => {
  //   if (!mainImage) return null;

  //   return (
  //     <img
  //       src={mainImage}
  //       alt={
  //         similarProducts.images.find((img) => img.url === mainImage)
  //           ?.altText || "Product image"
  //       }
  //       className={`rounded-lg w-full object-cover h-auto transition-transform duration-300 ${
  //         isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
  //       }`}
  //       style={zoomStyle}
  //     />
  //   );
  // };
  const renderMainImage = () => {
    const images = selectedProducts?.images?.find(
      (img) => img.url === mainImage
    );

    if (!images) {
      return (
        <div className="w-full h-[400px] flex items-center justify-center bg-gray-100">
          <p className="text-gray-500">Image not available</p>
        </div>
      );
    }

    return (
      <img
        src={images.url}
        alt={images.altText}
        className="w-full h-auto object-cover rounded-lg"
      />
    );
  };

  console.log("Selected : ", selectedProducts);
  console.log("Similar : ", similarProducts);

  return (
    <div className="p-0">
      {selectedProducts && (
        <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
          <div className="flex flex-col md:flex-row">
            {/* Left Thumbnail */}
            <div className="hidden md:flex flex-col space-y-4 mr-2">
              {/* {selectedProducts?.images?.map((image, index) => (
              <div key={index}>
                <img
                  src={image.url}
                  alt={image.altText}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border transition-colors duration-300 ${
                    mainImage === image.url
                      ? "border-emerald-400 ring-2"
                      : "border-gray-500"
                  }`}
                  onClick={() => setMainImage(image.url)}
                />
              </div>
            ))} */}
              {selectedProducts?.images?.length > 0 ? (
                selectedProducts.images.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image.url}
                      alt={image.altText}
                      className={`w-20 h-20 object-cover rounded-lg cursor-pointer border transition-colors duration-300 ${
                        mainImage === image.url
                          ? "border-emerald-400 ring-2"
                          : "border-gray-500"
                      }`}
                      onClick={() => setMainImage(image.url)}
                    />
                  </div>
                ))
              ) : (
                <p>Loading images...</p>
              )}
            </div>

            {/* Main image with inline zoom */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div
                ref={imageContainerRef}
                className="mb-4 relative"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {renderMainImage()}

                {/* Zoom indicator (optional) */}
                {isZoomed && mainImage && (
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                    Zoomed 2x
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Thumbnail */}
            <div className="flex flex-row md:hidden space-x-4">
              {/* {similarProducts.images.map((image, index) => (
                <img
                  src={image.url}
                  alt={image.altText}
                  key={index}
                  className={`w-15 h-15 object-cover rounded-lg cursor-pointer border transition-colors duration-300 ${
                    mainImage === image.url
                      ? "border-emerald-400 ring-2"
                      : "border-gray-500"
                  }`}
                  onClick={() => setMainImage(image.url)}
                />
              ))} */}
              {selectedProducts?.images?.length > 0 ? (
                selectedProducts.images.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image.url}
                      alt={image.altText}
                      className={`w-20 h-20 object-cover rounded-lg cursor-pointer border transition-colors duration-300 ${
                        mainImage === image.url
                          ? "border-emerald-400 ring-2"
                          : "border-gray-500"
                      }`}
                      onClick={() => setMainImage(image.url)}
                    />
                  </div>
                ))
              ) : (
                <p>Loading images...</p>
              )}
            </div>

            {/* Other sections Right*/}
            <div className="md:w-1/2 md:ml-10">
              <h1 className="text-2xl md:text-3xl font-semibold mb-2">
                {selectedProducts?.name}
              </h1>
              <div className="flex space-x-4">
                <p className="text-xl mb-2 text-gray-500">
                  ${selectedProducts?.discountPrice}
                </p>
                <p className="text-lg text-gray-600 mb-1 line-through">
                  {selectedProducts?.price && `$${selectedProducts?.price}`}
                </p>
              </div>
              <p className="text-gray-600 mb-4">
                {selectedProducts?.description}
              </p>
              <div className="mb-4">
                <p className="text-gray-700 font-semibold">Colors:</p>
                <div className="flex gap-2 mt-2">
                  {console.log("Colors : ", selectedProducts.color)}
                  {selectedProducts.color.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectColor(color);
                      }}
                      className={`rounded-full border w-8 h-8 cursor-pointer ${
                        selectColor === color
                          ? "border-4 border-black"
                          : "border-gray-300"
                      }`}
                      style={{
                        backgroundColor: color.toLocaleLowerCase(),
                        filter: "brightness(0.7)",
                      }}
                    ></button>
                  ))}
                  {/* {selectedProducts?.colors?.length > 0 ? (
                    selectedProducts.colors.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectColor(color)}
                        className={`rounded-full border w-8 h-8 cursor-pointer ${
                          selectColor === color
                            ? "border-4 border-black"
                            : "border-gray-300"
                        }`}
                        style={{
                          backgroundColor: color.toLowerCase(),
                          filter: "brightness(0.7)",
                        }}
                      ></button>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500">No colors available</p>
                  )} */}
                </div>
              </div>
              <div className="mb-4">
                <p className="text-gray-700 font-semibold">Sizes:</p>
                <div className="flex gap-2 mt-2">
                  {selectedProducts.sizes.map((size, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectSize(size);
                      }}
                      className={`px-4 py-2 text-black rounded border cursor-pointer ${
                        selecetSize === size
                          ? "bg-black text-white"
                          : "border-gray-300"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-6 ">
                <p className="text-gray-700 font-semibold">Quantity:</p>
                <div className="flex items-center space-x-4 mt-2">
                  <button
                    onClick={() => {
                      handleQuantityChange("minus");
                    }}
                    className="px-2 py-1 bg-gray-200 rounded text-lg cursor-pointer"
                  >
                    -
                  </button>
                  <span className="text-lg">{quantity}</span>
                  <button
                    onClick={() => {
                      handleQuantityChange("plus");
                    }}
                    className="bg-gray-200 px-2 py-1 rounded text-lg cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={handleAddToCart}
                disabled={isButtonDisabled}
                className={`flex items-center gap-4 bg-black text-white rounded px-6 py-2 w-full mb-4 justify-center cursor-pointer hover:scale-110 duration-400 ${
                  isButtonDisabled
                    ? "cursor-not-allowed opacity-50"
                    : "hover:bg-gray-900"
                }`}
              >
                Add To Cart{" "}
                {isButtonDisabled ? "..." : <FaCartPlus className="h-6 w-6" />}
              </button>
              <div className="mt-10 text-gray-700">
                <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
                <table className="w-full text-left text-sm text-gray-600 border border-gray-200">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 px-4 border-r border-gray-200 font-bold">
                        Brand
                      </td>
                      <td className="py-2 px-4">{selectedProducts?.brand}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 px-4 border-r border-gray-200 font-bold">
                        Material
                      </td>
                      <td className="py-2 px-4">
                        {selectedProducts?.material}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="mt-20">
            <h2 className="text-2xl text-center font-medium mb-4">
              You May Also Like
            </h2>
            <ProductGrid products={similarProducts} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BestSeller;
