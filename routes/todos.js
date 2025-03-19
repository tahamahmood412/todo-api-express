const express = require('express')

const router= express.Router();

// Import the Controller
const {createTodo}= require("../controllers/createTodo");
const {getTodo,getTodoById}= require("../controllers/getTodo.js");
const {updateTodo}= require("../controllers/updateTodo.js");
const {deleteTodo}= require("../controllers/deleteTodo.js");



// Define the API Route
router.post("/createTodo",createTodo)
router.get("/getTodos",getTodo)
router.get("/getTodos/:id",getTodoById)
router.put("/updateTodo/:id",updateTodo)
router.delete("/deleteTodo/:id",deleteTodo)

// Export the router
module.exports = router;

