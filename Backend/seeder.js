import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./Model/product.model.js";
import User from "./Model/User.model.js";
import { products } from "./data/product.js";
import { dbName } from "./DataBase/databaseName.js";
dotenv.config()
//connect to mongodb
await mongoose.connect(`${process.env.MONGODB_URI}/${dbName}`)
//fucntion seed data
const seedData = async()=>{
    try {
        await Product.deleteMany()
        await User.deleteMany()
        const createAdmin = await User.create({
            name:"Admin",
            email:"Admin@gmail.com",
            password:"admin123",
            role:"admin"
        })
        const userId = createAdmin._id
        const sampleProduct = products.map((product)=>{
            return{...product,user:userId}
        })
        await Product.insertMany(sampleProduct)
        console.log("Product data send successfully!")
        process.exit()
    } catch (error) {
        console.log("Error sending data",error)
        process.exit(1)
    }
}
seedData()