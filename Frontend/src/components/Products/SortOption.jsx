import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

function SortOption() {
  const[searchParam,setSearchParam]=useSearchParams()
  const handleSortChange = (e)=>{
    const sortBy = e.target.value;
  }
  return (
    <div className="mb-4 flex items-center justify-end">
      <select
        name=""
        id="sort"
        className="border p-2 rounded-md focus:outline-none"
        // value={}
        onChange={handleSortChange}
      >
        <option value="">Default</option>
        <option value="priceAsc">Price:Low To High</option>
        <option value="priceDsc">Price:High To Low</option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
  );
}

export default SortOption;
