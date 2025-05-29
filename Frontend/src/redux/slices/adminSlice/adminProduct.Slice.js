import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//all products
export const fetchProducts = createAsyncThunk(
  "admin/fetchProducts",
  async () => {
    const response = axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/adminproduct/all`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  }
);
//create Product
export const createProduct = createAsyncThunk(
  "admin/CreateProdcut",
  async (productData, { rejectedWithValue }) => {
    try {
      const response = axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/products/createproduct`,
        productData,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      return rejectedWithValue(
        error.response.message || "Failed To create product"
      );
    }
  }
);
//update existing product
export const updateProduct = createAsyncThunk(
  "admin/updateProduct",
  async (id, productData) => {
    const response = axios.put(
      `${import.meta.env.VITE_BACKEND_URL}/products/${id}/edit`,
      productData,
      {
        withCredentials: true,
      }
    );
    return response.data;
  }
);
export const deleteProduct = createAsyncThunk(
  "admin/deleteProduct",
  async (id) => {
    axios.delete(`${import.meta.env.VITE_BACKEND_URL}/products/delete/${id}`, {
      withCredentials: true,
    });
    return id;
  }
);

export const adminProductSlice = createSlice({
  name: "adminProduct",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(fetchProducts.pending,(state)=>{
        state.loading=true
        state.error=null
    })
    .addCase(fetchProducts.fulfilled,(state,action)=>{
        state.loading=false
        state.products=action.payload
    })
    .addCase(fetchProducts.rejected,(state,action)=>{
        state.loading=false
        state.error=action.payload.message
    })
    //createProduct
    .addCase(createProduct.pending,(state)=>{
        state.loading=true
        state.error=null
    })
    .addCase(createProduct.fulfilled,(state,action)=>{
        state.loading=false
        state.products.push(action.payload)
    })
    .addCase(createProduct.rejected,(state,action)=>{
        state.loading=false
        state.error=action.payload.message
    })
    //updateProduct
    .addCase(updateProduct.pending,(state,action)=>{
        state.loading=true
        state.error=null
    })
    .addCase(updateProduct.fulfilled,(state,action)=>{
        state.loading=true
        const updatePro = action.payload
        const productIndex = state.products.findIndex((product)=>product._id === updatePro._id)
        if(productIndex !== -1){
            state.products[productIndex]=updatePro
        }
    })
    .addCase(updateProduct.rejected,(state,action)=>{
        state.loading=false
        state.error=action.payload.message
    })
    //deleteProduct
    .addCase(deleteProduct.pending,(state,action)=>{
        state.loading=true
        state.error=null
    })
    .addCase(deleteProduct.fulfilled,(state,action)=>{
        state.loading=false
        state.products.filter((product)=>product._id !== action.payload)
    })
    .addCase(deleteProduct.rejected,(state,action)=>{
        state.loading=false
        state.error=action.payload.message
    })
  }
});

export default adminProductSlice.reducer
