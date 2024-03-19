let numbers =[6,5,4,3,2,1,0];
let evenNumbers=[]

for(index=0; index<numbers.length; index++){
    let elements = numbers[index];
    if(elements % 2 ===0){
        console.log(elements);
    }
    else{
        console.log(elements);
    }
}

let todos = [
    {
      title: "html",
      status: true,
    },
    {
      title: "css",
      status: true,
    },
    {
      title: "js",
      status: true,
    },
    {
      title: "react",
      status: false,
    },
  ];

//   let completedTodo = []
// // console.log(todos[1].title)
// for(i=0; i<todos.length; i++){
// if(todos[i].status==true){
//      console.log(todos[i].title)
//     completedTodo.push(todos[i])
// }

// }

//function
//return function
//arrow function
  function printStatus(index){
    console.log(`${todos[index].title} is ${todos[index].status}`);
  }
  printStatus(0)
  printStatus(1)
  printStatus(2)
  printStatus(3)
//let list = [1,2,3,4,5];

 function dNum(index){
return index*2;
 }
 console.log("the number is", dNum(2));
 console.log("the number is", dNum(3));
 console.log("the number is", dNum(4));



 /*function, call back
    asynchronous 
    a function pass as a parameter to another functionhing 

 */

 const dosomething = () =>{
  console.log("do domething");
  return undefined;
 };

 setTimeout(dosomething(),2000);
 console.log("after set timeout");


 