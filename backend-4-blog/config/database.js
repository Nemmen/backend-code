const mongoose = require("mongoose");
require("dotenv").config()

const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL , {
        useNewUrlParser : true,
        useUnifiedTopology:true,
    }).then(()=>{
        console.log("db connected")
    }).catch((e)=>{
        console.log(e)
        process.exit(1)
    })
}

module.exports = dbConnect; // this is how we export