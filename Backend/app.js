import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()
import userRoutes from "../Backend/Routes/user.routes.js"
import productRoutes from "../Backend/Routes/product.routes.js"

app.use(cors())
app.use(express.json())
app.use(cookieParser())
//User Routes
app.use("/api/users", userRoutes)
//Product Routes
app.use("/api/products",productRoutes)

app.get("/",(req,res)=>{
    res.send("Bilal")
})
export {app}