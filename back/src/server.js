const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv =  require("dotenv");
const userRouter = require("./routers/userRouter");

dotenv.config();
app.use(express.json());
const server = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB 연결됨")
        mongoose.set("debug", true)
        app.use("/user",userRouter)
        app.listen(4000,function (){
        console.log("server on port 4000")
    })
    } catch (errors) {
        console.log("DB 연결 실패!!!!")
    }
    
}
server();