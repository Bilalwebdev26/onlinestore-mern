import express from "express"
import multer from "multer"
import cloudinary from "../config/cloudinay.config.js"
import streamifier from "streamifier"
import { apiError } from "../utils/apiError.class.js"
const router = express.Router()

//Multer setup using disk memory storage
const storage = multer.memoryStorage()
const upload = multer({storage})

router.post("/",upload.single("image"),async(req,res)=>{
    try {
        if(!req.file){
            throw new apiError(400,"No File Uploaded")
        }
        //function to handle the stream upload to cloudinary
        const streamUpload = (fileBuffer)=>{
            return new Promise((resolve,reject)=>{
                const stream = cloudinary.uploader.upload_stream((error,result)=>{
                    if(result){
                        resolve(result)
                    }else{
                        reject(error)
                    }
                })
                streamifier.createReadStream(fileBuffer).pipe(stream)
            })
        }
        //call the stream uplaod function
        const result = await streamUpload(req.file.buffer)
        return res.json({imageUrl:result.secure_url})
    } catch (error) {
     return res.status(500).json({message:error.message})   
    }
})

export default router