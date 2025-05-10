import mongoose from "mongoose";
import { dbName } from "./databaseName.js";
const mongoDB = async()=>{
   try {
    const connect = await mongoose.connect(`${process.env.MONGODB_URI}/${dbName}`)
    console.log("database connection successfully : ",connect.connection.host)
   } catch (error) {
    console.log("DataBase Connection Failed",error)
    process.exit(1)
   }
}
export default mongoDB