const express = require('express')
const bodyParser = require('body-parser') // use to parse data fronm req nody # purani chess abb express.json() use hota



const app= express() //single instance of express
//koi server kisi port pe listen krta mtlab run krta vo hm define krte by following code...


//sepecifically parse json daTA AND add it to req.body object
app.use(bodyParser.json())


app.listen(3001,()=>{
    console.log("hey its working on 3001")
})

//first route 
app.get('/', (req, res) => {   
    
    res.send("hello ji ")
    //when user hit / then this function will execute
    
    //res is used to send data from server to client
    // req is used to get the data sent by the client

    //to send data we use write method
    // res.write('Hello World');
    // res.end();

    //we can also send html page using writeFile method
    // it takes two parameter first is path of file and second is callback function
    // if there are no error in our system then it will call the callback function  
    //and inside that callback function we will  send response to the client
})
// get mai response bhejoge
// post request ismr data add krke bhejo ge 
// is route pe post kr skte ho
app.post('/api/cars', (req,res)=>{
   const {name , brand } = req.body // abb yhan error ayega kyuki we need middleware to parse the data from req.body sowe use "body-parser"
   console.log(name);
   console.log(brand);
    res.send("success bro no tention")
})

//to check apiu or test your server post req and all we use postman it is a tool for developers for testing server...

//Mongo db -- > nosql database... can store in the form of key value pAIR OR IN THE FORM OF GRAPH OR ...

//install mongo, mongo shell -- can use command and interact with datbase using CRUD operation

// we will use mongo db compass it is used to interact with dtabase in mongo using ui that is easy to interact simple it is a graphical representation

// aftyer download open then click connect then create datbase

// now to use mongob in our server using express we use mongoose that is to connect express and mongodb we use mongoose

//mongoose --> odm (objkect data modling ) libraray --> node js mai data object ki form mai store hota hai and mongo mai document mai jo object and document ki jo maping hoti vo ye handle krta --- that is odm libraray 

const mongoose = require('mongoose')


// syntax -> mongoose.connect('[servername on whice mongodb is running coppy pasete it form mongodb compase] -> mongodb://localhost:27017/[yhan database ka name agar hua tho connect hojega agar ni hua tho naya ban jega datbase] ' , {      yhan configuration object define hota like --> useNewurlParser:true, useUnifiedTopology:true --> iske bina nahi run krega vese 4 hai ye par loccaly 2 hi likhni padti..     }).then(()=>{console.log("connected")}).catch((e)=>{console.log(error) })

mongoose.connect('mongodb://localhost:27017/mydatabase', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{console.log("mongodb connected")}).catch((e)=>{console.log(e) })
