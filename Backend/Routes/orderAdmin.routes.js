import express from "express"
import { checkAdmin, protectedRoute } from "../middleware/auth.middleware.js"
import { deleteOrder, deliveredOrder, getAllOrders, updateOrderStatus } from "../controllers/adminOrder.controller.js"
const router = express.Router()

router.get("/all",protectedRoute,checkAdmin,getAllOrders)
router.put("/status/:id",protectedRoute,checkAdmin,updateOrderStatus)
router.put("/delivered/:id",protectedRoute,checkAdmin,deliveredOrder)
router.delete("/delete/:id",protectedRoute,checkAdmin,deleteOrder)

export default router