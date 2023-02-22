
import  express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path  from "path";
import { fileURLToPath } from "url";
import connectDb from "./DatabaseConnection.js";
const app=express();
dotenv.config({path: '.env'})
const port=process.env.PORT;

const _filename=fileURLToPath(import.meta.url);
const _dirname=path.dirname(_filename);
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(cors());
app.use("/assets", express.static(path.join(_dirname,"public/assets")));

const storage=multer.diskStorage({
     destination:(req,file,cb)=>{
        cb(null,"public/assets");
     },
     filename:(req,file,cb)=>{
        cb(null,file.originalname)
     }  
});
const upload=multer({storage});
connectDb();
app.get("/",(req, res) => {
    res.send("<h1>Hello World</h1>");
});
app.listen(port,() => {
    console.log(`App listening on port ${port}`);
});