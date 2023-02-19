
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

const app=express();
const port=5000;

const _filename=fileURLToPath(import.meta.url);

app.get("/",(req, res) => {
    res.send("<h1>Hello World</h1>");
});
app.listen(port,() => {
    console.log(`App listening on port ${port}`);
});