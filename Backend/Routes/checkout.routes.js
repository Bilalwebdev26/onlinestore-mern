import express from "express"
import { protectedRoute } from "../middleware/auth.middleware.js"
import { createCheckout } from "../controllers/checkout.controller.js"
const router = express.Router()

//create checkout session
router.post("/create",protectedRoute,createCheckout)

export default router