import express from "express"
import cors from "cors"
import dotenv from 'dotenv';
import multer from "multer"; // Add multer


import userRoute from "./routes/user.route.js"
import Database from "./config/ConnectDB.js"
const app=express()


dotenv.config();

Database()
//middleware
// Configure multer
const upload = multer();
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded bodies
app.use(upload.none());

 
app.use('/api/user',userRoute)

app.get('/',(req,res)=>{ 
   res.status(401).json({success:true,message:"Server running for API"})
})

app.listen(process.env.PORT,()=>{
    console.log(`Server Running On The Port ${process.env.PORT}`)
})


