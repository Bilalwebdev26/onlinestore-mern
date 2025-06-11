import { CheckOut } from "../Model/checkout.model.js";
import { apiError } from "../utils/apiError.class.js";
import { apiResponse } from "../utils/apiRes.class.js";
import { Order } from "../Model/order.model.js";
import { Cart } from "../Model/cart.model.js";
import { deleteOrder } from "./adminOrder.controller.js";

export const createCheckout = async (req, res) => {
  const {checkoutItems, shippingAddress, paymentMethod, totalPrice } =
    req.body;
    console.log(checkoutItems)
  // if (!checkoutItems || checkoutItems.length === 0) {
  //   throw new apiError(400,"No items in checkout")
  // }
  try {
    const newCheckout = await CheckOut.create({
        user:req.user._id,
        checkoutItems:checkoutItems,
        shippingAddress,
        paymentMethod,
        totalPrice,
        paymentStatus:"Pending",
        isPaid:false
    })
    //await newCheckout.save()
    console.log("Create checkout : ",newCheckout)
    return res.status(201).json(new apiResponse(201,"Checkout Detail",newCheckout))
  } catch (error) {
    console.log("Error : ",error)
    return res.status(500).json({message:error.message})
  }
};
export const pay = async(req,res)=>{
    const{paymentDetail,paymentStatus}=req.body
    try {
        const checkout = await CheckOut.findById(req.params.id)
        if(!checkout){
            throw new apiError(404,"Checkout not found")
        }
        if(paymentStatus === "Paid"){
            checkout.isPaid=true;
            checkout.paymentStatus=paymentStatus
            checkout.paymentDetail=paymentDetail
            checkout.paidAt=Date.now()
            await checkout.save()
            return res.status(200).json(new apiResponse(200,"Checkout Done",checkout))
        }else{
            return res.status(400).json({message:"Invalid Payment status"})
        }
    } catch (error) {
        console.error(error)
        return res.status(500).json({message:error.message})
    }
}

//convert to order after confirmation
export const finalize = async(req,res)=>{
     try {
        const checkout = await CheckOut.findById(req.params.id)
        if(!checkout){
            throw new apiError(404,"Checkout not found")
        }
        if(checkout.isPaid && !checkout.isFinalized){
            //create final order based on the checkout detail
           const order = await Order.create({
            user:checkout.user, 
            orderItem:checkout.checkoutItems,
            shippingAddress:checkout.shippingAddress,
            paymentMethod:checkout.paymentMethod,
            totalPrice:checkout.totalPrice,
            isPaid:true,
            paidAt:Date.now(),
            isDelivered:false,
            paymentStatus:"paid",
            paymentDetail:checkout.paymentDetail
           })
           checkout.isFinalized=true,
           checkout.finalizedAt=Date.now()
           await checkout.save();
           //delete the cart associated with user
           await Cart.findOneAndDelete({user:req.user._id})//user:checkout.user
           console.log("Orders : ",order)
           return res.status(201).json(new apiResponse(201,"Order Created SuccessFully",order))
        }else if(checkout.isFinalized){
              throw new apiError(400,"Checkout already finalized")
        }else{
            throw new apiError(400,"Checkout is not paid")
        }
     } catch (error) {
        console.error(error)
        return res.status(500).json({message:error.message})
     }
}