import expres from "express"
import { checkAdmin, protectedRoute } from "../middleware/auth.middleware.js"
import { createUserAdmin, deleteUser, getAllUsers, updateUser } from "../controllers/admin.controller.js"
const router = expres.Router()

router.get("/users",protectedRoute,checkAdmin,getAllUsers)
router.post("/create-user",protectedRoute,checkAdmin,createUserAdmin)
router.put("/updateUser/:id",protectedRoute,checkAdmin,updateUser)
router.delete("/delete/:id",protectedRoute,checkAdmin,deleteUser)

export default router