import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function FilterSidebar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate()
  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });
  const [priceRange, setPriceRange] = useState([0, 100]);
  const categories = ["Top Wear", "Bottom Wear"];
  const colors = [
    "Red",
    "Blue",
    "Black",
    "Green",
    "Yellow",
    "Gray",
    "White",
    "Pink",
    "Beige",
    "Navy",
  ];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const materials = [
    "Cotton",
    "Wool",
    "Denim",
    "Polyester",
    "Silk",
    "Linen",
    "Viscore",
    "Fleece",
  ];
  const brands = [
    "Urban Threads",
    "Modern Fit",
    "Street Style",
    "Beach Breeze",
    "Fashionista",
    "ChicStyle",
  ];
  const genders = ["male", "Female"];
  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    //{category:"top-wear",maxPrice:100}=>params.category
    setFilters({
      category: params.category || "",
      color: params.color || "",
      gender: params.gender || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,
    });
    setPriceRange([0, params.maxPrice || 100]);
  }, [searchParams]);

  const handleFilterChange = (e)=>{
    const{name,value,checked,type}=e.target;
    console.log({name,value,checked,type})
    let newFilters={...filters}
    console.log(newFilters)
    if(type=="checkbox"){
        if(checked){
            newFilters[name]=[...(newFilters[name] || []),value]//append value =>["XS","S"]
        }
        else{
                newFilters[name]=newFilters[name].filter((item)=>item!==value)
        }
    }else{
        newFilters[name]=value;
    }
     setFilters(newFilters)
     console.log(newFilters)
     updateURLparams(newFilters)
  }

  const updateURLparams = (Filters)=>{
   const param = new URLSearchParams()
   console.log("Object.keys(Filters)",Object.keys(Filters))
   Object.keys(Filters).forEach((key)=>{
    console.log("Filter[key]:",Filters[key])
    if(Array.isArray(Filters[key])&& Filters[key].length>0){
        param.append(key,Filters[key].join(","))
        console.log("param.append(key,Filters[key].join(","))",param.append(key,Filters[key].join(",")))
    }else if(Filters[key]){
        param.append(key,Filters[key])
    }
   })
   setSearchParams(param)
   navigate(`?${param.toString()}`)
  }    
  const updatePriceChange = (e)=>{
      const newPrice = e.target.value;
      setPriceRange([0,newPrice])
      const newFilters={...filters,minPrice:0,maxPrice:newPrice}
      setFilters(filters)
      updateURLparams(newFilters)
  }

  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>
      {/* Category Filter*/}
      <div className="mb-6">
        <label htmlFor="" className="block font-bold mb-2">
          Category
        </label>
        {categories.map((category) => (
          <div className="flex items-center mb-1" key={category}>
            <input
              type="radio"
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
              name="category"
              value={category}
              onChange={handleFilterChange}
              checked={filters.category===category}
            />
            <span className="text-gray-700">{category}</span>
          </div>
        ))}
      </div>
      {/* Gender Filter*/}
      <div className="mb-6">
        <label htmlFor="" className="block font-bold mb-2">
          Gender
        </label>
        {genders.map((gender) => (
          <div className="flex items-center mb-1" key={gender}>
            <input
              type="radio"
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
              name="gender"
              value={gender}
              onChange={handleFilterChange}
              checked={filters.gender===gender}
            />
            <span className="text-gray-700">{gender}</span>
          </div>
        ))}
      </div>

      {/* Color filters */}
      <div className="mb-6">
        <label htmlFor="" className="block font-bold mb-2">
          Color
        </label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              name="color"
              className={`w-8 h-8 rounded-full cursor-pointer border transition-transform hover:scale-105 ${filters.color===color ?"ring-2 ring-blue-500":""}`}
              style={{ backgroundColor: color.toLowerCase() }}
              value={color}
              onClick={handleFilterChange}
            ></button>
          ))}
        </div>
      </div>

      {/* Size Filters */}
      <div className="mb-6">
        <label htmlFor="" className="block font-bold mb-2">
          Sizes
        </label>
        {sizes.map((size) => (
          <div key={size} className="flex items-center mb-1">
            <input
              type="checkbox"
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
              name="size"
              value={size}
              onChange={handleFilterChange}
              checked={filters.size.includes(size)}
            />
            <span className="text-gray-700">{size}</span>
          </div>
        ))}
      </div>

      {/* Material Filters */}
      <div className="mb-6">
        <label htmlFor="material" className="block font-bold mb-2">
          Material
        </label>
        {materials.map((material) => (
          <div key={material} className="flex items-center mb-1">
            <input
              type="checkbox"
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
              name="material"
              value={material}
              onChange={handleFilterChange}
              checked={filters.material.includes(material)}
            />
            <span className="text-gray-700">{material}</span>
          </div>
        ))}
      </div>
      {/* Brands Filters */}
      <div className="mb-6">
        <label htmlFor="brand" className="block font-bold mb-2">
          Brand
        </label>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center mb-1">
            <input
              type="checkbox"
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
              name="brand"
              value={brand}
              onChange={handleFilterChange}
              checked={filters.brand.includes(brand)}
            />
            <span className="text-gray-700">{brand}</span>
          </div>
        ))}
      </div>
      {/* Price range filter */}
      <div className="mb-8">
        <label htmlFor="" className="block font-bold mb-2">
          Price Range
        </label>
        <input
          type="range"
          name="range"
          min={0}
          max={100}
          value={priceRange[1]}
          onChange={updatePriceChange}
          className="w-full h-2 bg-gray-300 cursor-pointer rounded-lg appearance-none"
        />
        <div className="flex justify-between text-gray-600 mt-2">
          <span>$0</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
}

export default FilterSidebar;
