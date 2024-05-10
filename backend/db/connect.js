import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

async function connectDB() {
    try {
        const result = await mongoose.connect(process.env.MONGO_URL)
        
        console.log('connected to db');
        // console.log(result);
    } catch (error) {
        console.log("connection failed with database with following error: " + error)
    }
}



export default connectDB;