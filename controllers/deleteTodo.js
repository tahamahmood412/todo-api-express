// Import the Todo Model
const Todo = require('../models/Todo')

// Get Todo by id parameter and delete it
exports.deleteTodo = async(req,res) =>{
    try{

        // get the id parameter from request
        const {id} = req.params;

        // find by id and delete the todo
        const todo = await Todo.findByIdAndDelete({_id:id})
        res.status(200).json(
            {
                success:true,
                data:todo,
                message: 'Deleted Successfully'
            }
        )

    }
    catch(error){
        console.error(error)
        res.status(500).json(
            {
                success:false,
                data:"Internal Server Error",
                message:error.message
            }
        )
    }
}