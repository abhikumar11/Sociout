import mongoose from "mongoose";
import dotenv from "dotenv";
const connectDb=async()=>{
    try {
        const conn=await mongoose.connect("mongodb://localhost:27017/sociout");
        console.log('connected to database',conn.connection.host);
    } catch (error) {
        console.error(error.message); 
        process.exit(1);
    }
} 
mongoose.set('strictQuery', false);
export default connectDb;