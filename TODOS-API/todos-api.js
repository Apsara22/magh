
const express = require('express')
const app = express()
const mongoose = require('mongoose'); 
const Schema = mongoose.Schema

const TOdosSchema = new Schema({
  title: String,
  status: Boolean,
})

const Todo = mongoose.model('Todo',TOdosSchema);


mongoose.connect('mongodb://127.0.0.1:27017/todos')
  .then(() => console.log('Connected!'));
  app.use(express.json())

app.get("/api/todos", async(req, res) =>{
  let todos =await Todo.find()
  console.log(todos);
  // res.send(["html","css"])
  res.send(todos)
})
app.post("/api/todos", async (req, res) => {
  // db.todos.insertOne({title:})
  try {
    if(!req.body.title){
    res.status(400).send({
      msg: "Bad request",
      error:{
        title: "required field"
      }
    })

    }
    let newTodo = await Todo.create({
      title: req.body.title,
      status: req.body.status,
    })
    
    res.send("data added")
  } catch (err) {
    console.log(err)
    res.status(500).send("server error")
  }
})

app.put("/api/todos/:id", async (req, res) => {
  let error ={}
  let hasError =false
  if(!req.body.title)
    {
      error.title = "required"
      hasError =true
    }
    if(!req.body.status)
      {
        error. status= "required"
        hasError =true
      }
      if(hasError){
        res.status(400).send(error)
        return;
      }
  
  try {
    let todo = await Todo.findByIdAndUpdate(req.params.id)
    if(!todo) {
      res.status(404).send("rescources is not found")
    }
    await Todo.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      status: req.body.status,
    })

    res.send("data updated.")
  } catch (err) {
    console.log(err);
    res.status(500).send("server error")
  }
})
app.delete("/api/todos/:id", async (req, res) => {
  

  let todo = await Todo.findByIdAndDelete(req.params.id)
  res.send("data deleted.")
})


app.listen(8000,()=>{
    console.log("... Server Started")
  });