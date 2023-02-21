import mongoose from "mongoose";

export const connectDb=async()=>{
    try {
        const connect=await mongoose.connect(process.env.CONNECTITON_URL);
        console.log('connected to database',conn.connection.host);
    } catch (error) {
        console.error(error.message); 
        process.exit(1);
    }
} 
mongoose.set('strictQuery', false);