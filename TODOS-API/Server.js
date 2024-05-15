const express = require('express')//()=>{get:(), post:}
const app = express()
let todos =["html", "css", "js"]

//
//  let role = "seller"
 let role = "buyer"

let isLogin = true
function checkAuthenitication( req, res, next){
  if(isLogin){
    // req.body ={"titlle":"custom"}
    next()
  }
  else{
  console.log("check Authenitication");
  res.status(401).send("unathenticate")
  }
}

function checkSellerrole(req,res, next){
  if(role === "seller"){
    next()
  } else{
    console.log("check Authenitication");
  res.status(401).send("un authorized")
  }
}
// app.use(checkAuthenitication)
// app.use(checkSellerrole)
app.use(express.json())

app.get('/', function (req, res) {
    res.send('Hello World')
  })
  app.get('/api/todos', function (req, res) {
    todos.push("mangodb");
    // res.send("todos created")

    res.send(todos)
  })

  app.post('/api/todos', checkAuthenitication, function (req, res) {
    // console.log("data base created")
    if(isLogin){
      
      console.log("res.body",res.body)
    
    res.send("database created")
    }
    else{
  res.status(401).send("unathenticate")

    }
  })

  app.post('/api/products',checkAuthenitication, checkSellerrole, function (req, res) {
    // console.log("data base created")
    if(role === "seller" ){
      console.log("data  send")
    res.send("data sent")

    } else{
      console.log("check Authenitication");
    // res.status(401).send("un authorized")
    }
  })
   
  
  
  app.listen(8000,()=>{
    console.log("... Server Started")
  });
