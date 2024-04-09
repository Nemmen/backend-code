const Todo = require("../models/todo")


//update is a put type of request in which we give id of the doc or entry we need to update

//function i sused is findByIdAndUpdate ----

exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params // by destructuring

        const { title, description } = req.body; // getting data from body part of our request

        const todo = await Todo.findByIdAndUpdate(
            { _id: id },
            {
                title, description, updatedAt: Date.now()
            }
        )

        res.status(200).json({
            success : true , 
            data:todo,
            message:`todo ${id} data successfully updated`
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