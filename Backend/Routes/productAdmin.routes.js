import express from "express"
import { checkAdmin, protectedRoute } from "../middleware/auth.middleware.js"
import { deleteProduct, showAllProduct } from "../controllers/adminProduct.controller.js"
const router = express.Router()

router.get("/all",protectedRoute,checkAdmin,showAllProduct)
router.delete("/delete/:id",protectedRoute,checkAdmin,deleteProduct)

export default router