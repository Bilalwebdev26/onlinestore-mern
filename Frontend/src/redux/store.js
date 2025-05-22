// import { configureStore } from '@reduxjs/toolkit'

// export const store = configureStore({
//   reducer: {auth:authReducre},
// })
import { configureStore } from "@reduxjs/toolkit";
import  authSlice  from "./slices/auth.slice.js"; // will now work

export const store =  configureStore({
  reducer: { auth: authSlice}, // ⚠️ note `.reducer` here
});