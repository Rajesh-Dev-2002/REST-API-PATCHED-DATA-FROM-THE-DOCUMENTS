const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.6")
.then(()=>{
    console.log("Connection is established");
})
.catch(()=>{
    console.log("Connection is lost");
})