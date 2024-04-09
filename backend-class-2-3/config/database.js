const mongoose = require("mongoose");
require("dotenv").config() // jo bhi data define kiya hoga .env mai vo process object mai aa jayega  and env ko use krne ke liye phle dotenv library install krni hai fir esse require config() bhi kyuki ye hi hai jo process mai dalta....

const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL , {
        useNewUrlParser : true,
        useUnifiedTopology:true,
    }).then(()=>{
        console.log("db connected")
    }).catch((e)=>{
        console.log(e)
    })
}

module.exports = dbConnect; // this is how we export