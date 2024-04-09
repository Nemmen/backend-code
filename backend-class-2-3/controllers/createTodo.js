// import model

const Todo = require("../models/todo")

// important kam define route handler for the route that lead to  this controller 

//async function mai likhenge taki main thread block na ho iske liye...
exports.createTodo = async(req,res) => {

    try{
        //extract title and description from requert body

        const { title , description} = req.body;

        const response = await Todo.create({title ,description}); // .create se data insert hota...
        res.status(200).json(
            {
                sucess:true,
                data:response,
                message:'entry Created successfully'
            }
        )

    }catch(e){
        console.log(e)
        console.error(e)
        res.status(500).json({
            sucess:false,
            data:"internal server error",
            message: e.message
        })
    }

} // this is the syntax....

