import mongoose from "mongoose";

async function connectDB() {
    try {
        const result = await mongoose.connect('mongodb+srv://rushikesh:rushikesh@atlascluster.76r73wg.mongodb.net/')
        
        console.log('connected to db');
        // console.log(result);
    } catch (error) {
        console.log("connection failed with database with following error: " + error)
    }
}



export default connectDB;