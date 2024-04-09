const Post = require("../models/postmodel")

exports.postCreate= async(req,res)=>{
    try{
        const {title , body} = req.body
        const post = new Post({
            title,body
        })

        const savePost = await post.save()

        res.json({
            post : savePost
        })
    }catch(e){
        console.log(e)
        res.send({
            message : "error in post bhai"
        })
    }
}

exports.getAllPost= async(req,res)=>{
    try{
       
        const allPost = await Post.find().populate("Likes").populate("Comment").exec()

        res.json({
            posts : allPost
        })

    }catch(e){
        console.log(e)
        res.send({
            message : "error in get all post bhai"
        })
    }
}
