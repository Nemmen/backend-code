const mongoose = require('mongoose')

const likeSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId, // this  will be the id of a Post document in another this is how it is stored
        ref:"Post" // refrence  to the Post model in other file
    },
    user:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Like",likeSchema)//exporting the Like model
