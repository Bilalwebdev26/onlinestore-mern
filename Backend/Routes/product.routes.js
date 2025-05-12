import express from "express"
import { checkAdmin, protectedRoute } from "../middleware/auth.middleware.js"
import { bestSellerProduct, createProduct, deleteProduct, newArival, showAllProduct, showProduct, similarProduct, updateProduct } from "../controllers/product.controller.js"
const router = express.Router()

router.post("/createproduct",protectedRoute,checkAdmin,createProduct)
router.put("/:id/edit",protectedRoute,checkAdmin,updateProduct)
router.delete("/delete/:id",protectedRoute,checkAdmin,deleteProduct)
router.get("/all",showAllProduct)
router.get("/bestSellerProduct",bestSellerProduct)
router.get("/newArrivals",newArival)
router.get("/:id",showProduct)
router.get("/simillar/:id",similarProduct)
export default router