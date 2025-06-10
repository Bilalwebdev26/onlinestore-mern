import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv"

const app = express();
import userRoutes from "../Backend/Routes/user.routes.js";
import productRoutes from "../Backend/Routes/product.routes.js";
import cartRoutes from "../Backend/Routes/cart.routes.js";
import checkOutRoutes from "../Backend/Routes/checkout.routes.js";
import orderRoutes from "../Backend/Routes/order.routes.js";
import uploadRoutes from "../Backend/Routes/uploadRoutes.js";
import subscribeRoutes from "../Backend/Routes/subscribe.routes.js";
import adminRoutes from "../Backend/Routes/admin.routes.js";
import adminProduct from "../Backend/Routes/productAdmin.routes.js";
import adminOrder from "../Backend/Routes/orderAdmin.routes.js";

app.use(express.json());
app.use(cookieParser());
dotenv.config();
const corsOptions = {
  origin: process.env.FRONTEND_URL, // or true for all origins
  credentials: true // THIS is the important part
};

app.use(cors(corsOptions));
app.get("/",(req,res)=>{
  return res.send("Rabbit Project")
})

//User Routes
app.use("/api/users", userRoutes);
//Product Routes
app.use("/api/products", productRoutes);
//cart Routes
app.use("/api/cart", cartRoutes);
//checkout Routes
app.use("/api/checkout", checkOutRoutes);
//order Routes
app.use("/api/order", orderRoutes);
//uplaod Routes
app.use("/api/upload", uploadRoutes);
//subscribe Routes
app.use("/api/subscribe", subscribeRoutes);
//Admin User
app.use("/api/adminuser", adminRoutes);
//Admin Product
app.use("/api/adminproduct", adminProduct);
//Admin Order
app.use("/api/adminorder", adminOrder);

export { app };
