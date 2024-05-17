const express = require('express')
const app = express()
let idArr=[1,2, 3]
let database =[
    {
    "id": 1,
    "name":"Ram"
    },
    {
    "id": 2,
    "name":"Shyam"
    },
    {
    "id": 3,
    "name":"hari"
} ];

app.get('/', function (req, res) {
    res.send('data is running')
  })
  app.get('/api/database', function (req, res) {
    // res.send('data is running')

    database.push("mangodb");
    // res.send("todos created")


    res.send(database)
  })
  app.put('/api/database/:id', function (req, res) {
    // res.send('data is running')
    console.log(req.params)
    objIndex = database.findIndex(obj => obj.id == 2);
    database[objIndex].name = "Laila"
    res.send("update")

  })
  app.delete('/api/database/:id', function (req, res) {
    // res.send('data is running')
    console.log(req.params)
     delete database [1];
    //  let data = database.filter(item => !idArr.includes(item.id));

    res.send("...delete")

  })


  app.listen(8000,()=>{
    console.log("... Server Started")
  });
