//best practice to add the id not the actual data , we have the dat in other file we just add a id that refere to that like or comment

const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
        post:{
            type:mongoose.Schema.Types.ObjectId, // this  will be the id of a Post document in another this is how it is stored
            ref:"Post" // refrence  to the Post model in other file
        },
        user:{
            type:String,
            required:true
        },
        body:{
           type:String,
           required:true 
        }
})


module.exports = mongoose.model("Comment",commentSchema)