
const Todo = require("../models/todo")


exports.getTodo = async(req,res)=>{
    try{
        //fetch  the todo list from database
        let todos= await Todo.find({}) // mongoose libraray provide many function that we used to query the datbase find() is one of the function that get all the entries jus have {} inside () of find
        
        //response
        res.status(200).json({
            success : true , 
            data:todos,
            message:"Entry getting Successfully"
        })
    }catch(e){
        console.error(e)
        console.log(e)
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:e.message
        })

    }
}

//get single todo -- >

exports.getTodoId = async(req,res)=>{
    try{
        //fetch/extract the todo list from database by a single id
        const id = req.params.id; // this is how u extract the params through express ( by using .params)
        let todo= await Todo.findById({_id : id}) // syntax to fetch the single id

        //if not fetch...
        if(!todo){
            return res.status(404).json({
                success:false,
                data:todo,
                message:'no data found'
            })
        }
        //response id fetched...
        res.status(200).json({
            success : true , 
            data:todo,
            message:`todo ${id} data successfully fetched`
        })
    }catch(e){
        console.error(e)
        console.log(e)
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:e.message
        })

    }
}