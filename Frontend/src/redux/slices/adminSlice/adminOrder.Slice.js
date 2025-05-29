import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOrders = createAsyncThunk(
  "order/fetchOrder",
  async (_, { rejectWithValue }) => {
    try {
      const response = axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/adminorder/all`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response.data || "Error to fetch all products"
      );
    }
  }
);
export const updateStatus = createAsyncThunk(
  "order/updateOrder",
  async (id, status, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/adminorder/status/${id}`,
        status,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || "Error to update status");
    }
  }
);
export const deliverOrder = createAsyncThunk(
  "order/deliverOrder",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/adminorder/delivered/${id}`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response.data || "Error to update Delivered status"
      );
    }
  }
);
export const deleteOrder = createAsyncThunk(
  "order/deleteOrder",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/adminorder/delete/${id}`,
        {
          withCredentials: true,
        }
      );
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data || "Error to delete order");
    }
  }
);
export const adminOrderSlice = createSlice({
  name: "adminOrder",
  initialState: {
    orders: [],
    totalOrders: 0,
    totalSales: 0,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
        state.totalOrders = action.payload.length;
        const calculateTotalRevenue = action.payload.reduce((acc, order) => {
          return acc + order.totalSales;
        }, 0);
        state.totalSales = calculateTotalRevenue;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      //update Order Status
      .addCase(updateStatus.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateStatus.fulfilled, (state, action) => {
        state.loading = false;
        const orderIndex = state.orders.findIndex(
          (order) => order._id === action.payload._id
        );
        if (orderIndex !== -1) {
          state.orders[orderIndex] = action.payload;
        }
      })
      .addCase(updateStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      //delete order
      .addCase(deleteOrder.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = state.orders.filter(
          (order) => order._id !== action.payload
        );
      })
      .addCase(deleteOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      //deivered order
      .addCase(deliverOrder.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deliverOrder.fulfilled, (state, action) => {
        state.loading = false;
        const orderIndex = state.orders.findIndex(
          (order) => order._id === action.payload._id
        );
        if (orderIndex !== -1) {
          state.orders[orderIndex] = action.payload;
        }
      })
      .addCase(deliverOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});
export default adminOrderSlice.reducer
