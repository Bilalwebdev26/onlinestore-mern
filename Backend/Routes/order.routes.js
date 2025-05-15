import express from "express"
import { protectedRoute } from "../middleware/auth.middleware.js"
import { getOrderDetailById, myOrders } from "../controllers/order.controller.js"
const router = express.Router()

//my-orders
router.get("/my-orders",protectedRoute,myOrders)
router.get("/singleOrder/:id",protectedRoute,getOrderDetailById)

export default router