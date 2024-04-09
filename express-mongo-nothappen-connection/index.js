// var express = require('express');
// var mongodb = require('mongodb');
// var app = express();

// var MongoClient = mongodb.MongoClient;
// var db;

// app.listen(3000, () => {

//     console.log("Listening on port 3000");
// });

// // Initialize connection once
// MongoClient.connect("mongodb://localhost:27017/mydatabase", function (err, database) {
//     if (err) {
//         console.error("Error connecting to MongoDB:", err);
//     } else {
//         console.log("Connected to MongoDB successfully!");
//         db = database;

//         // Start the application after the database connection is ready

//     }});

// // Reuse database object in request handlers
// app.get("/", function (req, res) {
//     db.collection("todos").find({}, function (err, docs) {
//         docs.each(function (err, doc) {
//             if (doc) {
//                 console.log(doc);
//             }
//             else {
//                 res.end();
//             }
//         });
//     });
// });

const express=require("express");
const { Db } = require("mongodb");
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017",{
useNewUrlParser:true,
useUnifiedTopology:true
}).then(()=>{
    console.log("connected...");
  

})
// mongoose.connection.once('open', function() {
//     console.log('MongoDB connected successfully');
  
//     // Access the MongoDB connection object
//     const db = mongoose.connection.db;
  
//     // Fetch data using MongoDB driver methods
//     db.collection('todos').find({}).toArray(function(err, docs) {
//       if (err) {
//         console.error('Error fetching documents:', err);
//         return;
//       }
//       console.log('Fetched documents:', docs);
//     });
//   });

  const userSchema=new mongoose.Schema({
    name:String
  })
  const Users=mongoose.model('Users',userSchema);

const Server=express();
//How to create a port and start a server 
Server.listen(9000,(request,response)=>{
console.log("server is running on 9000");

})



Server.get("/registerUser",(request,response)=>{
  const query=new Users({
    name:"Sumit"
  })
  query.save();
  response.json({
    message:"user save"
  })
})