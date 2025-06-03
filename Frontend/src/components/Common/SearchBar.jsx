import React, { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../redux/slices/product.slice";
import {useNavigate} from "react-router-dom"
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isopen, setIsOpen] = useState(false);
  const dispatch = useDispatch()
  const{products,loading,error}=useSelector((state)=>state.product)
  const navigate = useNavigate()
  const handleSearchToggle = () => {
    setIsOpen(!isopen);
  };
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log("Search Term : ",searchTerm)
    dispatch(fetchProduct({search:searchTerm}))
    navigate(`/collection/all?search=${searchTerm}`)
    setIsOpen(false);
  }
  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${
        isopen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"
      }`}
    >
      {isopen ? (
        <form onSubmit={handleSubmit} className="relative flex items-center justify-center w-full">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search"
              name="search"
              value={searchTerm}
              onChange={(e)=>{setSearchTerm(e.target.value)}}
              className="bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none focus:ring-2 w-full placeholder:text-gray-700"
            />

            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <HiMagnifyingGlass className="h-6 w-6" />
            </button>
          </div>
          <button type="button" onClick={handleSearchToggle}>
            <HiOutlineXMark className="h-6 w-6 cursor-pointer hover:text-gray-600"/>
          </button>
        </form>
      ) : (
        <button type="button" onClick={handleSearchToggle}>
          <HiMagnifyingGlass className="h-6 w-6 text-gray-700 cursor-pointer" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
