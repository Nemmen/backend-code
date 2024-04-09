const mongoose = require('mongoose')


//when u need to store the id u need to know about the model name who id u gona store
const postSchema = new mongoose.Schema({
   title:{
    type:String,
    required:true
   },
   body:{
    type:String,
    required: true 
   },
   Likes:[{
    type:mongoose.Types.ObjectId,
    ref:'Like'
   }],
   Comment:[{
    type:mongoose.Types.ObjectId,
    ref:'Comment'
   }],
})

module.exports = mongoose.model("Post",postSchema)//exporting the Like model
