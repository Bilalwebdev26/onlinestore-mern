import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//create checkout
export const createCheckout = createAsyncThunk(
  "checkout/createCheckout",
  async ({checkoutItems,shippingAddress,paymentMethod,totalPrice}, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/checkout/create`,
        {checkoutItems,shippingAddress,paymentMethod,totalPrice},
        { withCredentials: true }
      );
      console.log("Response from checkout create slice : ",response)
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error in Checkout");
    }
  }
);
export const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    checkout: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase(createCheckout.pending,(state,action)=>{
        state.loading=true
        state.error=null
    })
    .addCase(createCheckout.fulfilled,(state,action)=>{
        state.loading=false
        state.checkout=action.payload
    })
    .addCase(createCheckout.rejected,(state,action)=>{
        state.loading=false
        state.error=action.payload.message
    })
  }
});
export const {} = checkoutSlice.actions
export default checkoutSlice.reducer
