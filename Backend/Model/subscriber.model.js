import mongoose from "mongoose";
const subscribeSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true,
        trim:true
    },
    subscribeAt:{
        type:Date,
        default:Date.now()
    }
})
export const Subscriber = mongoose.model("Subscriber",subscribeSchema)