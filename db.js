import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser:true,   //
        useFindAndModify:false  //신버전엔 돼있을거임
    }
);

const db = mongoose.connection;

const handleOpen =()=>console.log("▶Connected to DB");
const handleError = (error)=> console.log(`(X) Error on DB Connection:${error}`);
db.once("open",handleOpen);
db.on("error",handleError);
