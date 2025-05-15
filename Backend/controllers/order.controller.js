import { Order } from "../Model/Order.model.js"
import { apiError } from "../utils/apiError.class.js"
import { apiResponse } from "../utils/apiRes.class.js"

export const myOrders = async(req,res)=>{
    try {
        const orders = await Order.find({user:req.user?._id}).sort({createdAt:-1})
        if(!orders){
            throw new apiError(400,"Order not found")
        }
        return res.status(200).json(new apiResponse(200,"All Orders listed",orders))
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const getOrderDetailById = async(req,res)=>{
    try {
        const order = await Order.findById(req.params.id).populate("user","name email")
        if(!order){
            throw new apiError(400,"No Order Found")
        }
        return res.status(200).json(new apiResponse(200,"Order Found by id",order))
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}