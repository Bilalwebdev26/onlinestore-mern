import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
  "user/AdminUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/adminuser/users`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || "Error to fetch all users");
    }
  }
);
//create user
export const createUser = createAsyncThunk(
  "user/createUser",
  async (userDetail, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/adminuser/create-user`,
        userDetail,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || "Failed to create user");
    }
  }
);
//updated user
export const updatedUserRole = createAsyncThunk(
  "user/updatedUser",
  async (id, name, email, role, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/adminuser/updateUser/${id}`,
        {
          data: { name, email, role },
        },
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || "Updated User Error");
    }
  }
);
//delete user
export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/adminuser/delete/${id}`,
        {
          withCredentials: true,
        }
      );
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data || "Failed to delete user");
    }
  }
);
const adminUserSlice = createSlice({
  name: "adminUser",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      //update user
      .addCase(updatedUserRole.pending,(state,action)=>{
        state.loading=true
        state.error=null
      })
      .addCase(updatedUserRole.fulfilled,(state,action)=>{
        state.loading=false
        const updateUser = action.payload
        const userIndex = state.users.findIndex((user)=>user._id === updateUser._id)
        if(userIndex !== -1){
            state.users[userIndex] = updateUser
        }
      })
      .addCase(updatedUserRole.rejected,(state,action)=>{
        state.loading=false
        state.error=action.payload.message
      })
        //delete user
      .addCase(deleteUser.pending,(state,action)=>{
        state.loading=true
        state.error=null
      })
      .addCase(deleteUser.fulfilled,(state,action)=>{
        state.loading=false
        state.users = state.users.filter((user)=>user._id !== action.payload)
      })
      .addCase(deleteUser.rejected,(state,action)=>{
        state.loading=false
        state.error=action.payload.message
      })
    //create user
    .addCase(createUser.pending,(state,action)=>{
        state.loading=true
        state.error=null
      })
      .addCase(createUser.fulfilled,(state,action)=>{
        state.loading=false
        state.users.push(action.payload.user)
      })
      .addCase(createUser.rejected,(state,action)=>{
        state.loading=false
        state.error=action.payload.message
      })
  },
});

export default adminUserSlice.reducer
