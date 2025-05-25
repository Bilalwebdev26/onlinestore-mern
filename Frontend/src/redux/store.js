// import { configureStore } from '@reduxjs/toolkit'

// export const store = configureStore({
//   reducer: {auth:authReducre},
// })
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth.slice.js"; // will now work
import prodSlice from "./slices/product.slice.js";
import cartSlice from "./slices/cart.Slice.js";

export const store = configureStore({
  reducer: { auth: authSlice, product: prodSlice, cart: cartSlice }, // ⚠️ note `.reducer` here
});
