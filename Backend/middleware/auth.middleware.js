import jwt from "jsonwebtoken"
import { apiError } from "../utils/apiError.class.js"
import User from "../Model/User.model.js"
export const protectedRoute  = async(req,res,next)=>{
     try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        if(!token){
            throw new apiError(401,"unauthorized")
        }
        const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRETKEY)
        if(!decodedToken){
            throw new apiError(403,"error in decodedtoken forbidden")
        }
        const user = await User.findById(decodedToken._id).select("-password -refreshToken")
        if(!user){
            throw new apiError(401,"Forbidden accessToken")
        }
        req.user=user
        next()

     } catch (error) {
        console.log("Catch auth error : ",error)
        throw new apiError(401,error?.message||"Invalid accessToken")
     }
}

export const checkAdmin  = async(req,res,next)=>{
    if(req.user && req.user.role ==="admin"){
        next()
    }
    else{
        res.status(403).json({message:"No authorized as an admin"})
    }
}