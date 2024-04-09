const express = require('express') // always require express in index.js 
const app = express();

//load config from env file
require("dotenv").config()

const port = process.env.PORT || 4000 // mtlab agar Port nahi ayya tho 4000 use krenge

// middleware to parse jsn request body
app.use(express.json());

//import routes for todo api

const todoRoutes = require("./routes/todos")

//now we need to mount the todo api routes  basically we can define the custom directory or the url and if make the the cahnges in our api so we can again mout it on anothe url we deifne so not to break the flow of the user using my previous mout 
app.use("/api/v1",todoRoutes)



//start the server
app.listen(port, () => console.log(`Server running on http://localhost:${port}/`))

//connect the db
const  connectDB = require('./config/database');
connectDB();

//default route bhi likhna hoga
app.get('/', (req, res)=>{
    res.send({msg:"Welcome to Todo API"})
});