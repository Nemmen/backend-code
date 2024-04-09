//create schema in mongoose

const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema( //this is hpw you define schema...
    {
        title:{
            type:String, 
            required:true,
            maxLength:50,
        },
        description:{
            type: String,
            required:true,
            maxLength:50,
        },
        createdAt:{
            type:Date,
            required:true,
            default: Date.now()
        },
        updatedAt:{
            type:Date,
            required:true,
            default: Date.now()
        }
    }
)

module.exports= mongoose.model("Todo",todoSchema)//export the model so it can be used elsewhere this is the syntax....