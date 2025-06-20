import { app } from "./app.js";
import dotenv from "dotenv";
import mongoDB from "./DataBase/db.js";
dotenv.config();

app.get("/",(req,res)=>{
  return res.send("Rabbit Project")
})
mongoDB().then(()=>{
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`App running in Port : ${PORT}`);
      });
}).catch((err)=>{
    console.log("App Failed to run : ",err)
})
