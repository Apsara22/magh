
const express = require('express')
const app = express()
const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/todos')
  .then(() => console.log('Connected!'));

app.get('/api/todos', function (req, res) {
  res.send("html","css")
})

app.listen(8000,()=>{
    console.log("... Server Started")
  });