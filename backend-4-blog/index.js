const express = require("express")
const app = express()
const dbConnect = require("./config/database")
require("dotenv").config();
const blog =require("./routes/blog")

const port = process.env.PORT || 4000

app.listen( port, ()=>{
    console.log(`its running ${port}`)
})

app.get( "/", (req, res) => { 
    res.send(`<h1>My homePage</h1>`)
})
app.use(express.json())
app.use("/api/v1",blog)

dbConnect();