const Router =  require('express');
const { default: mongoose } = require('mongoose');
const { Blog } = require('../models/Blog');
const User = require('../models/User');
const {Comment} =  require('../models/Comment')
const commentRouter = Router({mergeParams : true});

commentRouter.post("/", async (res,req)=>{
    try {
        const {blogId} = req.params;
        const {userId, content} = req.body;
        if(!mongoose.isValidObjectId({blogId}))
        return res.status(400).send({message:"blogId is not"});

        if(!mongoose.isValidObjectId({userId}))
        return res.status(400).send({message:"userId is not"});
        
        if(typeof content !== "string")
        return res.status(400).send({message:"내용이 없습니다."});

        const [blog,user] =  await Promise.all(
            [Blog.findOne({blogId}),
            User.findById(userId)]
        )
        // const blog = await Blog.findOne({blogId});
        // const user = await User.findById(userId);

        const comment = new Comment({blog,content,user}).save();
        return res.status(200).send({comment});
    } catch (error) {
        return res.status(400).send({error: error.message});
    }
})
commentRouter.get("/", async (res,req)=>{
    try {
        const {blogId} = req.params
        if(!mongoose.isValidObjectId({blogId}))
        return res.status(400).send({message:"blogId is not"});
        const comment = await Comment.find({blog:blogId}).populate([
            {path:'user',select : "email name"}
        ]);
        return res.status(200).send({comment});
    } catch (error) {
        return res.status(400).send({error: error.message});
    }
})

commentRouter.delete("/:commentId", async (res,req)=>{
    try {
        const {commentId} =  req.params;
        const deletedComment = await Comment.findByIdAndDelete(commentId);
        if(!deletedComment) return res.status(400).send({message:"코멘트가 없음"})
        return res.status(200).send({message:"댓글이 삭제 되었습니다."});
    } catch (error) {
        return res.status(400).send({error: error.message});
    }
})
module.exports = {commentRouter}