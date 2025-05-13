import express from "express";
import {
  createCart,
  deleteProduct,
  getAllCart,
  mergeCart,
  updateQunatity,
} from "../controllers/cart.controller.js";
import { protectedRoute } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/", createCart);
router.put("/changeQunatity", updateQunatity);
router.delete("/delete", deleteProduct);
router.get("/all", getAllCart);
router.post("/merge",protectedRoute,mergeCart);

export default router;
