import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "../lib/axios.js"
import axios from "axios";
const userFromStorage = localStorage.getItem("userInfo");

const initialGuestId =
  localStorage.getItem("guestId") || `guest_${new Date().getTime()}`;
localStorage.setItem("guestId", initialGuestId);

//initial State
const initialState = {
  user: userFromStorage,
  guestId: initialGuestId,
  loading: false,
  error: null,
};
//async thunk for user login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      console.log("Login Route");
      console.log("Backend URL:", import.meta.env.VITE_BACKEND_URL);
      console.log(`${import.meta.env.VITE_BACKEND_URL}/users/login`);
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/users/login`,
        userData,
        { withCredentials: true }
      );
      console.log("response : ", response);
      console.log("User Data :", userData);
      console.log("User  :", response.data.data);
      localStorage.setItem("userInfo", JSON.stringify(response.data.data));
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login Failed");
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/users/register`,
        userData,
        { withCredentials: true }
      );
      console.log("response : ",response)
      localStorage.setItem("userInfo", JSON.stringify(response.data.data));
      return response.data.data;
    } catch (error) {
        console.log("error : ",error)
      return rejectWithValue(
        error?.response?.data?.message || "Register User Failed"
      );
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/users/logout`
      );
    } catch (error) {}
  }
);

//slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      (state.user = null), (state.guestId = `guestId_${new Date().getTime()}`);
      localStorage.removeItem("userInfo");
      localStorage.setItem("guestId", state.guestId);
    },
    generateNewGuestId: (state) => {
      state.guestId = `guestId_${new Date().getTime()}`;
      localStorage.setItem("guestId", state.guestId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export const { logout, generateNewGuestId } = authSlice.actions;
export default authSlice.reducer;
