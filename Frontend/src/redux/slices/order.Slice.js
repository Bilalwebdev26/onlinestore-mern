import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//fetch user order
export const userOrder = createAsyncThunk(
  "order/userOrder",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/order/my-orders`,
        {
          withCredentials: true,
        }
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data || "Error in Fetch Order");
    }
  }
);
//fetch specific order
export const orderById = createAsyncThunk(
  "order/orderById",
  async (orderId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/order/singleOrder/${orderId}`,
        {
          withCredentials: true,
        }
      );
      return response.data.data
    } catch (error) {
        return rejectWithValue(error.response.data||"Error in find order")
    }
  }
);
export const orderSlice = createSlice({
    name:"order",
    initialState:{
        orders:[],
        totalOrders:0,
        orderDetail:null,
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(userOrder.pending,(state,action)=>{
            state.loading=true
            state.error=null
        })
        .addCase(userOrder.fulfilled,(state,action)=>{
            state.loading=false
            state.orders=action.payload
        })
        .addCase(userOrder.rejected,(state,action)=>{
            state.loading=false
            state.error=action.payload.message
        })
        //fetch order detail by id
        .addCase(orderById.pending,(state,action)=>{
            state.loading=true
            state.error=null
        })
        .addCase(orderById.fulfilled,(state,action)=>{
            state.loading=false
            state.orderDetail=action.payload
        })
        .addCase(orderById.rejected,(state,action)=>{
            state.loading=false
            state.error=action.payload.message
        })
    }
})
export default orderSlice.reducer
