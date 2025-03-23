// import React, { useEffect, useRef, useState } from "react";
// import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
// import { Link } from "react-router-dom";
// const NewArrivals = () => {
//   const scrollRef = useRef(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(false);
//   const [canScrollLeft, setCanScrollLeft] = useState(false);
//   const [canScrollRight, setCanScrollRight] = useState(true);

//   const newArrivals = [
//     {
//       _id: "1",
//       name: "Jackets",
//       price: 120,
//       images: [
//         {
//           url: "https://picsum.photos/500/500/?random=1",
//           altText: "Jacket",
//         },
//       ],
//     },
//     {
//       _id: "2",
//       name: "Jackets",
//       price: 120,
//       images: [
//         {
//           url: "https://picsum.photos/500/500/?random=2",
//           altText: "Jacket",
//         },
//       ],
//     },
//     {
//       _id: "3",
//       name: "Jackets",
//       price: 120,
//       images: [
//         {
//           url: "https://picsum.photos/500/500/?random=3",
//           altText: "Jacket",
//         },
//       ],
//     },
//     {
//       _id: "4",
//       name: "Jackets",
//       price: 120,
//       images: [
//         {
//           url: "https://picsum.photos/500/500/?random=4",
//           altText: "Jacket",
//         },
//       ],
//     },
//     {
//       _id: "5",
//       name: "Jackets",
//       price: 120,
//       images: [
//         {
//           url: "https://picsum.photos/500/500/?random=5",
//           altText: "Jacket",
//         },
//       ],
//     },
//     {
//       _id: "6",
//       name: "Jackets",
//       price: 120,
//       images: [
//         {
//           url: "https://picsum.photos/500/500/?random=6",
//           altText: "Jacket",
//         },
//       ],
//     },
//     {
//       _id: "7",
//       name: "Jackets",
//       price: 120,
//       images: [
//         {
//           url: "https://picsum.photos/500/500/?random=7",
//           altText: "Jacket",
//         },
//       ],
//     },
//     {
//       _id: "8",
//       name: "Jackets",
//       price: 120,
//       images: [
//         {
//           url: "https://picsum.photos/500/500/?random=8",
//           altText: "Jacket",
//         },
//       ],
//     },
//   ];

//   const scroll = (direction) => {
//     const scrollAmount = direction === "left" ? -300 : 300;
//     scrollRef.current.scrollBy({ left: scrollAmount, behaviour: "smooth" });
//   };

//   const updateScrollButton = () => {
//     const container = scrollRef.current;
//     if (container) {
//         const rightScroll =
//           container.scrollWidth > leftScroll + container.clientWidth +10;
//       const leftScroll = container.scrollLeft;
//       setCanScrollLeft(leftScroll > 0);
//       console.log("Bool scroll left : ",canScrollLeft)
//       setCanScrollRight(rightScroll);
//     }
//     console.log({
//       scrollLeft: container.scrollLeft,
//       clientWidth: container.clientWidth,
//       conatinerScrollWidth: container.scrollWidth,
//     });
//   };

//   useEffect(() => {
//     const container = scrollRef.current;
//     if (container) {
//       container.addEventListener("scroll", updateScrollButton);
//     }
//     updateScrollButton();
//     return()=>{
//         if (container) {
//             container.removeEventListener("scroll", updateScrollButton);
//             window.removeEventListener("resize", updateScrollButton);
//           }
//     }
//   }, []);

//   return (
//     <section className="mb-5 py-16 px-4">
//       <div className="container mx-auto text-center mb-10 relative">
//         <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
//         <p className="text-sm text-gray-600 mb-8">
//           Discover the latest styles off the runway,freshly added to keep your
//           wardrobe on the cutting edge of fashion
//         </p>
//         {/* Scroll  */}
//         <div className="absolute right-0 bottom-[-30px] flex space-x-2">
//           <button
//             onClick={() => {
//               scroll("left");
//             }}
//             disabled={!canScrollLeft}
//             className={`rounded-full ${
//               canScrollLeft
//                 ? "text-black bg-white cursor-pointer"
//                 : "text-white bg-gray-500 cursor-not-allowed"
//             }`}
//           >
//             <CiCircleChevLeft className="w-8 h-8" />
//           </button>
//           <button
//             onClick={() => {
//               scroll("right");
//             }}
//             disabled={!canScrollRight}
//             className={`rounded-full ${
//               canScrollRight
//                 ? "text-black bg-white cursor-pointer"
//                 : "text-white bg-gray-500 cursor-not-allowed"
//             }`}
//           >
//             <CiCircleChevRight className="w-8 h-8 " />
//           </button>
//         </div>
//       </div>
//       {/* ScrollAble content  */}
//       <div
//         ref={scrollRef}
//         className="container mx-auto overflow-x-scroll flex space-x-6 relative"
//       >
//         {newArrivals.map((product) => (
//           <div
//             className="min-w-[50%] sm:min-w-[50%] lg:min-w-[30%] relative"
//             key={product._id}
//           >
//             <img
//               src={product.images[0]?.url}
//               alt={product.images[0]?.altText || product.name}
//               className="w-full h-[200px] md:h-[400px] lg:w-[500px] object-cover rounded-lg"
//             />
//             <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md text-white p-4 rounded-b-lg">
//               <Link to={`/product/${product._id}`} className="block">
//                 <h4 className="font-medium">{product.name}</h4>
//                 <p className="mt-1 ">${product.price}</p>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default NewArrivals;
import React, { useEffect, useRef, useState } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const newArrivals = [
        {
          _id: "1",
          name: "Jackets",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500/?random=1",
              altText: "Jacket",
            },
          ],
        },
        {
          _id: "2",
          name: "Jackets",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500/?random=2",
              altText: "Jacket",
            },
          ],
        },
        {
          _id: "3",
          name: "Jackets",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500/?random=3",
              altText: "Jacket",
            },
          ],
        },
        {
          _id: "4",
          name: "Jackets",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500/?random=4",
              altText: "Jacket",
            },
          ],
        },
        {
          _id: "5",
          name: "Jackets",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500/?random=5",
              altText: "Jacket",
            },
          ],
        },
        {
          _id: "6",
          name: "Jackets",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500/?random=6",
              altText: "Jacket",
            },
          ],
        },
        {
          _id: "7",
          name: "Jackets",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500/?random=7",
              altText: "Jacket",
            },
          ],
        },
        {
          _id: "8",
          name: "Jackets",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500/?random=8",
              altText: "Jacket",
            },
          ],
        },
      ];

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const updateScrollButton = () => {
    const container = scrollRef.current;
    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScroll =
        container.scrollWidth > leftScroll + container.clientWidth + 10; // Add a small threshold

      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScroll);
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButton);
      window.addEventListener("resize", updateScrollButton);
    }

    // Initial check
    updateScrollButton();

    return () => {
      if (container) {
        container.removeEventListener("scroll", updateScrollButton);
        window.removeEventListener("resize", updateScrollButton);
      }
    };
  }, []);

  return (
    <section className="mb-5 py-16 px-4">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-sm text-gray-600 mb-8">
          Discover the latest styles off the runway, freshly added to keep your
          wardrobe on the cutting edge of fashion
        </p>
        {/* Scroll Buttons */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`rounded-full ${
              canScrollLeft
                ? "text-black bg-white cursor-pointer"
                : "text-white bg-gray-500 cursor-not-allowed"
            }`}
          >
            <CiCircleChevLeft className="w-8 h-8" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`rounded-full ${
              canScrollRight
                ? "text-black bg-white cursor-pointer"
                : "text-white bg-gray-500 cursor-not-allowed"
            }`}
          >
            <CiCircleChevRight className="w-8 h-8" />
          </button>
        </div>
      </div>
      {/* Scrollable Content */}
      <div
        ref={scrollRef}
        className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {newArrivals.map((product) => (
          <div
            className="min-w-[50%] sm:min-w-[50%] lg:min-w-[30%] relative"
            key={product._id}
          >
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
              className="w-full h-[200px] md:h-[400px] lg:w-[500px] object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md text-white p-4 rounded-b-lg">
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
