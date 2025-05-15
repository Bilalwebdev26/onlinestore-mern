import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()
import userRoutes from "../Backend/Routes/user.routes.js"
import productRoutes from "../Backend/Routes/product.routes.js"
import cartRoutes from "../Backend/Routes/cart.routes.js"
import checkOutRoutes from "../Backend/Routes/checkout.routes.js"
import orderRoutes from "../Backend/Routes/order.routes.js"
import uploadRoutes from "../Backend/Routes/uploadRoutes.js"
import subscribeRoutes from "../Backend/Routes/subscribe.routes.js"

app.use(cors())
app.use(express.json())
app.use(cookieParser())

//User Routes
app.use("/api/users", userRoutes)
//Product Routes
app.use("/api/products",productRoutes)
//cart Routes
app.use("/api/cart",cartRoutes)
//checkout Routes
app.use("/api/checkout",checkOutRoutes)
//order Routes
app.use("/api/order",orderRoutes)
//uplaod Routes
app.use("/api/upload",uploadRoutes)
//subscribe Routes
app.use("/api/subscribe",subscribeRoutes)

export {app}