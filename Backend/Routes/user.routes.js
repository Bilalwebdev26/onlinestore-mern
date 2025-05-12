import express from "express"
import { login, logout, profile, register } from "../controllers/user.controller.js"
import { protectedRoute } from "../middleware/auth.middleware.js"
const router = express.Router()

router.post("/register",register)
router.post("/login",login)
router.get("/logout",protectedRoute,logout)
router.get("/profile",protectedRoute,profile)


export default router