const express = require('express');

const app = express();

// load database congig from 
require('dotenv').config();
const PORT = process.env.PORT || 4000;


// Middleware to parse the json body request
app.use(express.json());

//import routes for TODO api
const todoRoutes = require("./routes/todos")

//mount/add/append the todo api routes
app.use("/api/v1",todoRoutes);

// start the server
app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
});

//connect to database
const dbConnect = require("./config/database");
dbConnect();

//default route for homepage
app.get("/",(req,res)=>{
    res.send(`<h1>This is todo api homepage</h1>`)
})


