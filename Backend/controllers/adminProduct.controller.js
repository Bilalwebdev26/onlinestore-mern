import Product from "../Model/product.model.js"
import { apiError } from "../utils/apiError.class.js"
import { apiResponse } from "../utils/apiRes.class.js"

export const showAllProduct = async(req,res)=>{
    try {
        const products = await Product.find({})
        if(!products){
            throw new apiError(400,"No Product found")
        }
        return res.status(200).json(new apiResponse(200,"Show All Products",products))
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const deleteProduct = async(req,res)=>{
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        if(!product){
            throw new apiError(400,"Product not found")
        }
        return res.status(200).json(new apiResponse(200,"Product Deleted"))
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

