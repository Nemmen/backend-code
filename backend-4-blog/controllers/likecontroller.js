const Post = require("../models/postmodel")
const Like = require("../models/likemodel")

exports.likePost = async (req, res) => {
    try {
        const { post, user } = req.body
        const like = new Like({
            post, user
        })
        const saveLike = await like.save()

        const updatePost = await Post.findByIdAndUpdate(post, {
            $push: {
                Likes: saveLike._id
            }
        }, { new: true }).populate("Likes").exec()
        res.json({
            post: updatePost
        })
    } catch (e) {
        console.log(e)
        res.json({
            message: "error in like "
        })

    }
}

exports.unLikePost = async (req, res) => {
    try {
        const { post, like } = req.body

        const deleteLike = await Like.findOneAndDelete({ post: post, _id: like })

        //update the post collection
        const updatePost = await Post.findByIdAndUpdate(post,{$pull:{Likes:like}},{new:true})

        res.json({
            post:updatePost,
            deletelike : deleteLike
        })

    } catch (e) {
        console.log(e)
        res.json({
            message:"ptani ky agalt hai"
        })

    }
}