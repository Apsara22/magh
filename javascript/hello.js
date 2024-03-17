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
// console.log(todos[1].title)
for(i=0; i<todos.length; i++){
if(todos[i].status==true){
    console.log(todos[i].title)
}
else{
    console.log("false")
}
}