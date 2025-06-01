import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOption from "../components/Products/SortOption";
import ProductGrid from "../components/Products/ProductGrid";
import{useDispatch, useSelector} from "react-redux"
import { fetchProduct } from "../redux/slices/product.slice.js";
import { useParams, useSearchParams } from "react-router-dom";

function CollectionPage() {
  const {collection} = useParams()
  const[searchParams] = useSearchParams()
  const {products,loading,error} = useSelector((state)=>state.product)
  const dispatch = useDispatch()
  const queryParams = Object.fromEntries([...searchParams])
  console.log("Collection : ",collection)
  console.log("Search Params ", searchParams)
  console.log("Query Params :",queryParams)
  //const [products, setProducts] = useState([]);
  const [sidebar, setSidebar] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    dispatch(fetchProduct({collection,...queryParams}))
  }, [dispatch,collection,searchParams]);
  
  const closeSideBar = (e) => {
    console.log(sidebarRef.current.contains(e.target))
    //close sidebar if close outside
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setSidebar(false);
    }
  };
  useEffect(() => {
    //close sidebar if close outside add event listner
    document.addEventListener("mouseover", closeSideBar);
    //clean event listner
    return()=>{
      document.removeEventListener("mousemove",closeSideBar)
    }
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
        <ProductGrid products={products} loading={loading} error={error}/>
      </div>
    </div>
  );
}

export default CollectionPage;
