
// Import the 
const Todo = require('../models/Todo')


// Get all todos 
exports.getTodo = async(req,res) =>{
    try{

        // fetch all todo items from database
        const todos = await Todo.find({});

        //response
        res.status(200).json(
            {
                success:true,
                data:todos,
                message: 'Entire todos fetched'
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


// Get Todo by id parameter and update it
exports.updateTodo = async(req,res) =>{
    try{

        // get the id parameter from request
        const {id} = req.params;

        //get new title and description from request body
        const {title,description} = req.body;

        // find by id and update the todo
        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updatedAt:Date.now()},
        )

        res.status(200).json(
            {
                success:true,
                data:todo,
                message: 'Updated Successfully'
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


