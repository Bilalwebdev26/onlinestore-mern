import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOption from "../components/Products/SortOption";
import ProductGrid from "../components/Products/ProductGrid";

function CollectionPage() {
  const [products, setProducts] = useState([]);
  const [sidebar, setSidebar] = useState(false);
  const sidebarRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      const similarProduct = [
        {
          _id: 1,
          name: "Product 1",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500/?random=2" }],
        },
        {
          _id: 2,
          name: "Product 2",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500/?random=3" }],
        },
        {
          _id: 3,
          name: "Product 3",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500/?random=4" }],
        },
        {
          _id: 4,
          name: "Product 4",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500/?random=5" }],
        },
        {
          _id: 5,
          name: "Product 1",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500/?random=2" }],
        },
        {
          _id: 6,
          name: "Product 2",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500/?random=3" }],
        },
        {
          _id: 7,
          name: "Product 3",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500/?random=4" }],
        },
        {
          _id: 8,
          name: "Product 4",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500/?random=5" }],
        },
      ];
      setProducts(similarProduct);
    }, 1000);
  }, []);
  const closeSideBar = (e) => {
    //close sidebar if close outside
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setSidebar(false);
    }
  };
  useEffect(() => {
    //close sidebar if close outside add event listner
    document.addEventListener("mouseover", closeSideBar);
  }, []);
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile Filter button */}
      <button
        onClick={() => {
          setSidebar(!sidebar);
        }}
        className="lg:hidden border p-2 flex justify-center items-center"
      >
        <FaFilter className="mr-2" />
        <span className="font-semibold text-2xl">Filter</span>
      </button>
      {/* Filter sidebar */}
      <div
        className={`${
          sidebar ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-400 lg:static lg:translate-x-0`}
        ref={sidebarRef}
      >
        <FilterSidebar />
      </div>
      <div className="flex-grow p-4">
        <h2 className="text-3xl uppercase mb-4">All collection</h2>
        {/* Sort options */}
        <SortOption/>
        {/* Product Grid */}
        <ProductGrid products={products}/>
      </div>
    </div>
  );
}

export default CollectionPage;
