const Todd = require("../models/todo")

exports.deleteTodo = async (req,res)=>{
    try{
        const { id } = req.params // by destructurin
        
        const todo = await Todo.findByIdAndDelete(
            { _id: id }
        )

        res.status(200).json({
            success : true , 
            data:todo,
            message:`todo ${id} data successfully delted`
        })



    } catch (e) {
        console.error(e)
        console.log(e)
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:e.message
        })
    }
}

