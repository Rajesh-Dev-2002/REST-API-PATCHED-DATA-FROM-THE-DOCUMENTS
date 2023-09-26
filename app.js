const express = require("express");

//call the express server
const app = express();

//require the student schema
const Student = require("./models/students");

//assign the port number
const port = process.env.PORT || 3000;

//connection with database mongodb with require it
require("./db/conn");

// due to get undifined result from the post request , thats why we use :- express.json with app.use method
app.use(express.json());

// //then we have to create the student appi, so that we have use the , POST request.
// app.post("/students", (req, res) => {
//   console.log(req.body);
//   const user = new Student(req.body);
//   //now we have to save this data into the database , thats why we call this fuction is :- save
//   user.save().then(()=>{
//     res.status(201).send(user)
//   }).catch((e)=>{
//     res.status(400).send(e);
//   })
// });


//here we can easily use the async function as well:-

app.post("/students",async(req,res)=>{
 
  try {
  //get the input data from the body
  const user = new Student(req.body);
  //save the data into the database , thats why we use
   const createUser=await user.save()
   res.status(201).send(createUser);
  } catch (e) {
    res.status(400).send(e);
  }

})

// to get the data from the database , thats why we use get method thats acts as like read the data, from db;
app.get("/students",  async(req,res)=>{
  try {
   const findData= await Student.find();
    res.status(201).send(findData);
  } catch (e) {
    res.status(401).send(e)
  }
})









// the we have to listen the post resquest from he listen function
app.listen(port, () => {
  console.log("Successfull 🚀");
});
