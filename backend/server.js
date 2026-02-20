import express from "express";
import dotenv from "dotenv";
import connectDB from "./config.js/db.js";

const app = express();
dotenv.config();

await connectDB();
app.listen(process.env.PORT, ()=>{
    console.log('Server is running on port 5000');
})