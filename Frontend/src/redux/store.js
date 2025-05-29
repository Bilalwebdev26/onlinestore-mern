// import { configureStore } from '@reduxjs/toolkit'

// export const store = configureStore({
//   reducer: {auth:authReducre},
// })
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth.slice.js"; // will now work
import prodSlice from "./slices/product.slice.js";
import cartSlice from "./slices/cart.Slice.js";
import checkoutSlice from "./slices/checkout.Slice.js";
import orderSlice from "./slices/order.Slice.js";
import adminUserSlice from "./slices/adminSlice/admin.Slice.js";
import adminProductSlice from "./slices/adminSlice/adminProduct.Slice.js";
import adminOrderSlice from "./slices/adminSlice/adminOrder.Slice.js";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    product: prodSlice,
    cart: cartSlice,
    checkout: checkoutSlice,
    order: orderSlice,
    adminUser: adminUserSlice,
    adminProduct: adminProductSlice,
    adminOrder: adminOrderSlice,
  }, // ⚠️ note `.reducer` here
});
