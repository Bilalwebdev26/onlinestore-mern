import express from "express"
import { protectedRoute } from "../middleware/auth.middleware.js"
import { createCheckout, finalize, pay } from "../controllers/checkout.controller.js"
const router = express.Router()

//create checkout session
router.post("/create",protectedRoute,createCheckout)
router.put("/pay/:id",protectedRoute,pay)
router.post("/finalize/:id",protectedRoute,finalize)

export default router