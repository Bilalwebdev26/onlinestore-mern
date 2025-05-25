import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk(
  "product/fetchByFilters",
  async ({
    collection,
    size,
    gender,
    color,
    minPrice,
    maxPrice,
    sortBy,
    search,
    category,
    material,
    brand,
    limit,
  }) => {
    const query = new URLSearchParams();
    if (collection) query.append("collection", collection);
    if (size) query.append("size", size);
    if (gender) query.append("gender", gender);
    if (color) query.append("color", color);
    if (minPrice) query.append("minPrice", minPrice);
    if (maxPrice) query.append("maxPrice", maxPrice);
    if (sortBy) query.append("sortBy", sortBy);
    if (search) query.append("search", search);
    if (category) query.append("category", category);
    if (material) query.append("material", material);
    if (brand) query.append("brand", brand);
    if (limit) query.append("limit", limit);
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/products?${query.toString()}`
    );
    console.log("Response : ", response);
    return response.data;
  }
);

//Product by id
export const fetchProductById = createAsyncThunk(
  "product/fetchById",
  async ({ id }) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/products/${id}`
    );
    console.log("Response : ", response);
    return response.data;
  }
);
//update product
export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async ({ id, productData }) => {
    const response = await axios.put(
      `${import.meta.env.VITE_BACKEND_URL}/products/${id}/edit`,
      productData,
      {
        withCredentials: true, // 🔒 this sends cookies (access/refresh) with the request
      }
    );
    return response.data;
  }
);
//simillar product
export const similarProducts = createAsyncThunk(
  "product/similarProduct",
  async ({ id }) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/products/simillar/${id}`
    );
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    selectedProducts: null,
    similarProducts: [],
    loading: false,
    error: null,
    filters: {
      category: "",
      size: "",
      brand: "",
      color: "",
      gender: "",
      minPrice: "",
      maxPrice: "",
      sortBy: "",
      search: "",
      material: "",
      collection: "",
    },
  },
  reducers: {
    setFilter: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilter: (state) => {
      state.filters = {
        category: "",
        size: "",
        brand: "",
        color: "",
        gender: "",
        minPrice: "",
        maxPrice: "",
        sortBy: "",
        search: "",
        material: "",
        collection: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductById.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProducts = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateProduct.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        const updatedProduct = action.payload;
        const index = state.products.findIndex(
          (product) => product._id === updateProduct._id
        );
        if (index !== -1) {
          state.products[index] = updateProduct;
        }
      })
      .addCase(updateProduct.rejected,(state,action)=>{
        state.loading=false
        state.error=action.error.message
      })
      .addCase(similarProducts.pending,(state,action)=>{
        state.loading=true
        state.error=null
      })
      .addCase(similarProducts.fulfilled,(state,action)=>{
        state.loading=false
        state.similarProducts=Array.isArray(action.payload)?action.payload:[]
      })
      .addCase(similarProducts.rejected,(state,action)=>{
        state.loading=false
        state.error=action.error.message
      })
  },
});

//delete product
export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id) => {
    const response = await axios.delete(
      `${import.meta.env.VITE_BACKEND_URL}/products/delete/${id}`,
      { withCredentials: true }
    );
    return response.data;
  }
);
//newArrivals
export const newArrivalsProducts = createAsyncThunk(
  "product/newArrivals",
  async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/products/newArrivals`
    );
    return response.data;
  }
);
//bestSellerProduct
export const bestSellerProduct = createAsyncThunk(
  "product/bestSellerProduct",
  async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/products/bestSellerProduct`
    );
    return response.data;
  }
);
//createProduct

export const {setFilter,clearFilter} = productSlice.actions
export default productSlice.reducer