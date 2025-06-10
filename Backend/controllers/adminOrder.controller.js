import { Order } from "../Model/Order.model.js";
import { apiError } from "../utils/apiError.class.js";
import { apiResponse } from "../utils/apiRes.class.js";

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({}).populate("user","name email")
    console.log("Orders : ",orders)
    if (!orders) {
      throw new apiError(400, "No order found");
    }
    return res
      .status(200)
      .json(new apiResponse(200, "All Orders Display", orders));
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateOrderStatus = async (req, res) => {
  const {status } = req.body;
  try {
    const order = await Order.findById(req.params.id).populate("user","name email");
    if (!order) {
      throw new apiError(400, "Order Not Found");
    }
    order.status = status || order.status;
    order.isDelivered = status === "Delivered" ? true : order.isDelivered;
    order.deliveredAt = status === "Delivered"? Date.now():order.deliveredAt
    await order.save();
    return res
      .status(200)
      .json(new apiResponse(200, "Order Status Changed", order));
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deliveredOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      throw new apiError(400, "No product found");
    }
    order.status = "Delivered";
    order.isDelivered=true;
    order.deliveredAt=Date.now()
    await order.save();
    return res.status(200).json(new apiResponse(200, "Order Delivered", order));
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteOrder = async(req,res)=>{
    try {
        const order = await Order.findById(req.params.id)
        if(order){
            await order.deleteOne()
            return res.status(200).json(new apiResponse(200,"Order Deleted"))
        }else{
            throw new apiError(400,"Order not found")
        }
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
