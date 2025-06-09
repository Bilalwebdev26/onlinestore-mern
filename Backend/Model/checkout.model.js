import mongoose from "mongoose";
const checkoutItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    sizes: String,
    color: String,
    images: {
      type: String,
    },
  },
  { _id: false }
);

const checkoutSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  checkoutItems: [checkoutItemSchema],
  shippingAddress: {
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  isPaid: {
    type: Boolean,
    default: false,
  },
  paidAt: { type: Date },
  paymentStatus:{
    type:String,
    default:"Pending"
  },
  paymentDetail:{
    type:mongoose.Schema.Types.Mixed
  },
  isFinalized:{
    type:Boolean,
    default:false
  },
  finalizedAt:{
    type:Date
  }
},{timestamps:true});

export const CheckOut = mongoose.model("CheckOut",checkoutSchema)
