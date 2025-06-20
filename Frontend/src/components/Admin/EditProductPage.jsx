import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../redux/slices/adminSlice/adminProduct.Slice";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProductById } from "../../redux/slices/product.slice";
import axios from "axios";

const EditProductPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const{id}=useParams()
  const{selectedProducts,loading,error}=useSelector((state)=>state.product)
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    countInStock: 0,
    sku: "",
    category: "",
    brand: "",
    color: [],
    sizes: [],
    collection: "",
    material: "",
    gender: "",
    images: [],
  });
  const[uploading,setUploading]=useState(false)
  useEffect(()=>{
    if(id){
      dispatch(fetchProductById({id}))
    }
  },[dispatch,id])
  useEffect(()=>{
    if(selectedProducts){
      setProductData(selectedProducts)
    }
  },[selectedProducts])
  const handleImageUpload = async(e)=>{
     const file=e.target.files[0]
     console.log(file)
     const formData = new FormData()
     formData.append("image",file)
     try {
      setUploading(true)
      const{data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/upload`,formData,{
        withCredentials:true
      })
      console.log("Data----------- : ",data)
      setProductData((prevData)=>({
        ...prevData,images:[...prevData.images,{url:data.imageUrl,altText:"name"}]
      }))
      setUploading(false)
     } catch (error) {
      console.log(error)
      setUploading(false)
     }
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(productData)
        dispatch(updateProduct({id,productData}))
        navigate("/admin/products")
  }
  if(loading){
    return <p>Laoding</p>
  }
  if(error){
    return <p>Error:{error}</p>
  }
  return (
    <div className="max-w-5xl mx-auto p-0 md:p-6 shadow rounded">
      <h2 className="text-3xl font-black mb-6">Edit Product</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-6">
          <label htmlFor="name" className="block font-semibold mb-2">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="w-full border-gray-300 rounded p-2 border"
            required
          />
        </div>
         {/* Description */}
         <div className="mb-6">
          <label htmlFor="description" className="block font-semibold mb-2">
            Product Description
          </label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            className="w-full border-gray-300 rounded p-2 border"
            rows={4}
            required
          />
        </div>
        {/* price */}
        <div className="mb-6">
            <label htmlFor="price" className="block font-semibold mb-2">Product Price</label>
            <input type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="w-full border-gray-300 rounded p-2 border"
            required />
        </div>
        {/* stock */}
        <div className="mb-6">
            <label htmlFor="countInStock" className="block font-semibold mb-2">Product Stock</label>
            <input type="number"
            name="countInStock"
            value={productData.countInStock}
            onChange={handleChange}
            className="w-full border-gray-300 rounded p-2 border"
            required />
        </div>
        {/* stock
        <div className="mb-6">
            <label htmlFor="" className="block font-semibold mb-2">Product Stock</label>
            <input type="number"
            value={productData.countInStock}
            onChange={handleChange}
            className="w-full border-gray-300 rounded p-2"
            required />
        </div> */}
        {/* SKU */}
        <div className="mb-6">
            <label htmlFor="sku" className="block font-semibold mb-2">Product SKU</label>
            <input type="text"
            name="sku"
            value={productData.sku}
            onChange={handleChange}
            className="w-full border-gray-300 rounded p-2 border"
            required />
        </div>
         {/* sizes */}
        <div className="mb-6">
            <label htmlFor="size" className="block font-semibold mb-2">Sizes(Coma Seperated)</label>
            <input type="text"
            name="size"
            value={productData.sizes.join(", ")}
            onChange={(e)=>{
                setProductData({
                    ...productData,
                    sizes:e.target.value.split(",").map((size)=>size.trim())
                })
            }}
            className="w-full border-gray-300 rounded p-2 border"
            required />
        </div>
         {/* colors */}
        <div className="mb-6">
            <label htmlFor="" className="block font-semibold mb-2">Colors +(Coma Seperated)</label>
            <input type="text"
            value={productData.color.join(", ")}
            onChange={(e)=>{
                setProductData({
                    ...productData,
                    color:e.target.value.split(",").map((size)=>size.trim())
                })
            }}
            className="w-full border-gray-300 rounded p-2 border"
            required />
        </div>
        {/* Image upload */}
        <div className="mb-6">
            <label htmlFor="" className="block font-semibold mb-2">Upload Image</label>
             <input type="file" onChange={handleImageUpload} className="border" />
             <div className="flex gap-4 mt-4">
                {productData.images.map((img,index)=>(
                    <div className="" key={index}>
                        <img src={img.url} alt={img.altText||"Product Image"} className="w-20 h-20 object-cover rounded-md shadow-sm" />
                    </div>
                ))}
             </div>
        </div>
        <button type="submit" className="w-full  bg-green-500 cursor-pointer text-white py-2 rounded-md hover:bg-green-600">Update Product</button>
      </form>
    </div>
  );
};

export default EditProductPage;
