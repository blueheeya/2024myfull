const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require("mongoose");
const dotenv =  require("dotenv");
const userRouter = require("./routers/userRouter");
const { blogRouter } = require("./routers/blogRouter");
const { getFaker } = require("../faker");
const { commentRouter } = require("./routers/commentRouter");


dotenv.config();
app.use(express.json());
app.use(cors());
const server = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB 연결됨")
        mongoose.set("debug", true)
        app.use("/user",userRouter)
        app.use("/blog",blogRouter)
        app.use("/blog/:blogId/comment",commentRouter)
        app.listen(4000,async function (){
        console.log("server on port 4000");
        // await getFaker(10,2);
    })
    } catch (errors) {
        console.log("DB 연결 실패!!!!")
    } 
}
server();