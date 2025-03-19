
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


// Get Todo by id parameter
exports.getTodoById = async(req,res) =>{
    try{

        // get the id from request body
        const id = req.params.id;

        // get the todo from db based on id and _id
        const todo = await Todo.findById({ _id:id });

        //data forbidden id not fount
        if(!todo){
            return res.status(404).json(
                {
                    success:false,
                    message:"No Data found , no ID"
                }
            )
        }

        //data for id found
        res.status(200).json(
            {
                success:true,
                data:todo,
                message: `Todo ${id} data successfully fetched`
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