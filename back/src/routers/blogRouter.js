const express = require("express");
const mongoose = require("mongoose");
const { Blog } = require("../models/Blog");
const blogRouter = express.Router();
const User = require("../models/User")

blogRouter.post('/', async (req,res)=>{
    try{
        const {title, content,isLive,userId} = req.body
        if (typeof title !=="string")
        res.status(400).send({error:"title is required"})
        if (typeof content !=="string")
        res.status(400).send({error:"content is required"})
        if (isLive && isLive !=="boolean")
        res.status(400).send({error:"isLive is required"})
        if (!mongoose.isValidObjectId(userId))
        res.status(400).send({error:"title is required"})

        let user = await User.findById(userId)
        if(!user) res.status(400).send({error:error.message})

        let blog = await new Blog({...req.body,user}).save();
        // let blog = new Blog({...req.body,user})
        // await blog.save();

        return res.send({blog})
        
    } catch (error) {
        return res.status(400
        ).send({error:error.message})
    }
}) 

blogRouter.get("/",async(req,res)=>{
    try {
        let {page} = req.query;
        page = parseInt(page);
        const totalCnt = await Blog.countDocuments({})
        const blogs = await Blog.find({}).skip(page*5).limit(5).populate({path:"user",select:"email name"});
        return res.status(200).send({blogs,totalCnt})
    } catch (error) {
        return res.status(400
        ).send({error:error.message})
    }
})
module.exports = {blogRouter}