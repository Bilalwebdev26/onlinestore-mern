import express from "express"
import { subscribe } from "../controllers/subscribe.controller.js"
const router = express.Router()

router.post("/new-subscriber",subscribe)

export default router