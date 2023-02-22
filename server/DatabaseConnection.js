import mongoose from "mongoose";
const connectDb=async()=>{
    try {
        const conn=await mongoose.connect(process.env.CONNECTION_URL);
        console.log('connected to database',conn.connection.host);
    } catch (error) {
        console.error(error.message); 
        process.exit(1);
    }
} 
mongoose.set('strictQuery', false);
export default connectDb;