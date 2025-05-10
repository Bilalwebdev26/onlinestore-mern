import express from "express"
import cors from "cors"

const app = express()
import userRoutes from "../Backend/Routes/user.routes.js"

app.use(cors())
app.use(express.json())
//UserRoutes
app.use("/api/users", userRoutes)

app.get("/",(req,res)=>{
    res.send("Bilal")
})
export {app}