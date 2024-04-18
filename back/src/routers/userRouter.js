const express = require("express");
const { Mongoose } = require("mongoose");
const userRouter = express.Router();
const User = require("../models/User");
const {hash, compare} = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth")

userRouter.get('/', async (req,res)=>{
    try {
        const user = await User.find({})
        return res.status(200).send({user})
    }catch(error) {
        return res.status(400).send({error:error.message})
    }
})

userRouter.post("/register", async (req,res)=>{
    try {
        // const user = new User();
        const password = await hash(req.body.password,10)
        const user = await new User({
            name:req.body.name,
            email:req.body.email,
            password,
            createAt:new Date()
        }).save();
        return res.status(200).send({user});  
    }catch (error) {

    }
})

userRouter.post("/login", async(req, res)=>{
    try {
        const user = await User.findOne({email:req.body.email})
        if(!user) {
            return res.status(400).send({error:"이메일을 다시 입력하세요"})
        }
        const isMatch =  await compare(req.body.password,user.password)
        if(!isMatch) {
            return res.status(400).send({error:"비밀번호를 확인해주세요"})
        }
        const payload = {
            userId:user._id.toHexString(),
            email:user.email
        }
        const accessToken = jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:"1h"});
        return res.status(200).send({user,accessToken,message:"로그인에 성공하였습니다."})
    } catch(error) {
       console.log("로그인에 실패했습니다.");
    }
})

userRouter.get("/auth", auth, async (req, res) => {
    try {
      const user = {
        id: req.user.id,
        email: req.user.email,
        name: req.user.name,
        role: req.user.role,
        image: req.user.image,
      };
      return res.status(200).send({user});
    } catch (e) {
      return res.status(500).send({error: e.message});
    }
  });
module.exports = userRouter;