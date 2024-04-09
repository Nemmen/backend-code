//import model


const Post = require("../models/postmodel")

const Comment = require("../models/commentmodel")


exports.createComment = async(req,res) => {
   try{
    //fetch data from req body
    const { post , user , body} = req.body;

    // create a comment object
    const comment = new Comment({
        post , user , body
    })
    //save into datbase
    const saveComment = await  comment.save(); // new way to create a document into db


    //find the post using  id of post and push this commment in it's comments array

    const updatePost  = await Post.findByIdAndUpdate(post , {$push : {Comment: saveComment._id}},{new:true}).populate("Comment").exec()  // push is update operator... and pull to delete an documentin an array and new:true means  after the updation return the updated document otherwise it will return the purana documnet 
    //populate  is used to get full detail of that particular field which we are going to use here simplere populate the component array with comment document meas show the whole comment related to the comment id 

    res.json({
        post : updatePost
    })

   }catch(e){
    console.error(e)
    console.log(e)
    res.send()
   } 
}