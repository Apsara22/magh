
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

app.get("/api/todoes", asyn(req, res) => {
  let Todo = await Todo.find()
  console.log(todo);
  // res.send(["html","css"])
  res.send(todos)
})
  

app.listen(8000,()=>{
    console.log("... Server Started")
  });