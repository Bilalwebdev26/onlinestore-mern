import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    name: String,
    price: String,
    sizes: String,
    color: String,
    quantity: {
      type: Number,
      default: 1,
    },
    image: String,
  },
  { _id: false }
);
const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  products:[cartItemSchema],
  totalPrice:{
    type:Number,
    required:true,
    default:0
  },
  guestId:String
},{timestamps:true});
export const Cart = mongoose.model("Cart", cartSchema);
