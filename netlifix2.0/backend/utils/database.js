import mongoose from "mongoose";
import dotenv from "dotenv";

const MONGO_URI = process.env.MONGO_URI;
dotenv.config();

const databaseConnection = () => {
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("mongodb connected successfully");
    }).catch((error)=>{
        console.log(error);
    })
};
export default databaseConnection;