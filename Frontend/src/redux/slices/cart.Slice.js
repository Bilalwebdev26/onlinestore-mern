import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//helper function to load cart from localStorage
const localCart = () => {
  const storeCart = localStorage.getItem("cart");
  return storeCart ? JSON.parse(storeCart) : { products: [] };
};
//helper function to save cart to localstorage
const saveCartToLocal = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};
//fetch cart for a user or guest
export const fecthCart = createAsyncThunk(
  "cart/fetchCart",
  async ({ user, guestId }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/cart/all`,
        { params: { user, guestId } }
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Error in fetching cart"
      );
    }
  }
);
//add an item to cart
export const addItemInCart = createAsyncThunk(
  "cart/AddToCart",
  async (
    { user, guestId, productId, sizes, quantity, color },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/cart`,
         { quantity, productId, user, sizes, color, guestId } 
      );
      console.log("Cart : ",response.data.data)
      return response.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to add item"
      );
    }
  }
);
//update quantity
export const updateQuan = createAsyncThunk(
  "cart/updateQuantity",
  async (
    { quantity, productId, user, sizes, color, guestId },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/cart/changeQunatity`,
        { quantity, productId, user, sizes, color, guestId}
      );
      console.log("Cart response:", response.data.data);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update Quantity"
      );
    }
  }
);
//Remove from Cart
export const deleteFromCart = createAsyncThunk(
  "cart/deleteProduct",
  async ({ productId, user, guestId, color, sizes }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/cart/delete`,
        { data: { productId, user, guestId, color, sizes } }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete product from cart"
      );
    }
  }
);
//merge cart
export const mergeCart = createAsyncThunk(
  "cart/mergeCart",
  async ({ guestId, user }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/cart/merge`,
        { data: { guestId, user } },
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to merge"
      );
    }
  }
);
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: localCart(),
    loading: false,
    error: null,
  },
  reducers: {
    clearCart: (state) => {
      state.cart = { products: [] };
      localStorage.removeItem("cart");
    },
  },
  extraReducers:(builder)=>{
    //fetch cart
     builder.addCase(fecthCart.pending,(state,action)=>{
        state.loading=true
        state.error=null
     })
     .addCase(fecthCart.fulfilled,(state,action)=>{
        state.loading=false
        state.cart=action.payload
        saveCartToLocal(action.payload)
     })
     .addCase(fecthCart.rejected,(state,action)=>{
        state.loading=false
        state.error=action.error.message||"Failed to fetch"
     })
     //addItemInCart
     .addCase(addItemInCart.pending,(state,action)=>{
        state.loading=true
        state.error=null
     })
       .addCase(addItemInCart.fulfilled,(state,action)=>{
        state.loading=false
        state.cart=action.payload
        saveCartToLocal(action.payload)
     })
     .addCase(addItemInCart.rejected,(state,action)=>{
        state.loading=false
        state.error=action.payload.message||"Failed to Add in cart"
     })
     //updateQuan
      .addCase(updateQuan.pending,(state,action)=>{
        state.loading=true
        state.error=null
     })
       .addCase(updateQuan.fulfilled,(state,action)=>{
        state.loading=false
        state.cart=action.payload
        saveCartToLocal(action.payload)
     })
     .addCase(updateQuan.rejected,(state,action)=>{
        state.loading=false
        state.error=action.payload?.message||"Failed to Update Quantity in cart"
     })
     //deleteFromCart
      .addCase(deleteFromCart.pending,(state,action)=>{
        state.loading=true
        state.error=null
     })
       .addCase(deleteFromCart.fulfilled,(state,action)=>{
        state.loading=false
        state.cart=action.payload
        saveCartToLocal(action.payload)
     })
     .addCase(deleteFromCart.rejected,(state,action)=>{
        state.loading=false
        state.error=action.payload?.message||"Failed to Delete Product from cart"
     })
     //mergeCart
      .addCase(mergeCart.pending,(state,action)=>{
        state.loading=true
        state.error=null
     })
       .addCase(mergeCart.fulfilled,(state,action)=>{
        state.loading=false
        state.cart=action.payload
        saveCartToLocal(action.payload)
     })
     .addCase(mergeCart.rejected,(state,action)=>{
        state.loading=false
        state.error=action.payload?.message||"Failed to Merge cart"
     })
  }
});

export const {clearCart} = cartSlice.actions
export default cartSlice.reducer