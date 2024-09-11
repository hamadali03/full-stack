import mongoose from "mongoose";

const Database=async()=>{
    try{

        const conn=await mongoose.connect(process.env.DATABASE_URL)
         console.log(`Connect with MongoDB :${conn.connection.host}`)
    }catch(error){
        console.log(`Error in Connection with MongoDB `,error.message)
        process.exit(1)
    }
}


export default Database;