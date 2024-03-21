let numbers = [7,5,3,1];

const printElements = (element) =>{
    console.log(element);
};
numbers.forEach(printElements);


numbers.forEach((element) => {
    console.log(element);
});



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
   const printTitle = (element) =>{


   // let element = todos[element].title;
    console.log(element);
   };
   todos.forEach(printTitle)
      
   let completedTodos = [];
   todos.forEach((element) =>{
    if(element.status){
        completedTodos.push(element);
        console.log(`${element.title} is completed`);
    }
    else{
        console.log(`${element.title} is pending`);

    }

    //console.log(element.title)
   })


let cardItems =[
  {
    product_id : "watch",
    quantity: 1,
    rate: 20,
  },
  {
    product_id : "mobile",
    quantity: 1,
    rate: 10,
  }

];
//let printSumtotal = [];
sumtotal =0;

cardItems.forEach((element) => {

  for(i=0; i<=cardItems.length; i++)
  sumtotal =sumtotal+(element.rate * element.quantity);

})
console.log(`the total sum is ${sumtotal}`);


let users = [
  {
    name: "ram",
    cartItems: [
      {
        product: "watch",
        quantity: 1,
        rate: 1000,
      },
      {
        product: "mouse",
        quantity: 2,
        rate: 2000,
      },
    ],
  },
  {
    name: "hari",
    cartItems: [
      {
        product: "keyboard",
        quantity: 1,
        rate: 2000,
      },
      {
        product: "mouse",
        quantity: 2,
        rate: 2000,
      },
    ],
  },
];

/* ram has order of rs:  /
/ hari has order of rs:  */

 users.forEach((user) =>
 {
  let total=0;
   user.cartItems.forEach((item) =>{
    total = total + item.rate * item.quantity
   })
   console.log(`${user.name} has ordered rs: ${total}`);
 })

 
 let users1 = [
  {
    name: "ram",
    cartItems: [
      {
        product: "watch",
        quantity: 1,
        rate: 1000,
      },
      {
        product: "mouse",
        quantity: 2,
        rate: 2000,
      },
    ],
  },
  {
    name: "hari",
    cartItems: [
      {
        product: "keyboard",
        quantity: -1,
        rate: 2000,
      },
      {
        product: "mouse",
        quantity: -2,
        rate: 2000,
      },
    ],
  },
];

/* ram has order of rs:  /
/ hari has order of rs:  */

 users1.forEach((user) =>
 {
  let total=0;
   user.cartItems.forEach((item) =>{
  //if(item.quantity>=0){
    total = total +(item.quantity > 0 ? item.quantity *item.rate :0 ) 
   })
   console.log(`${user.name} has ordered rs: ${total}`);
 })

//  let todoes = [
//   {title: "html", status: true},
//   {title: "css", status: true},
//   {title: "js", status: false},
//  ]
//  todoes.forEach((todo) =>{
//   console.log(`${todo.title} is ${todo.status ? "completed" : "pending"}`);
//  })


//  filter method
 let complete =[
  {title: "html", status: true},
  {title: "css", status: true},
  {title: "js", status: false},
  {title:"react", status: false}
 ]

// let completedto =[];
// complete.forEach((element) =>{
//   if(element.status){
//     completed.push(element)
//   }
// })


completedto = todos.filter((element) =>{
  if(element.status){
    return true;
  }
})
console.log(completedto);


let numbers1 = [1,2,3,4];
let evenNum = numbers1.filter((element) =>{
  if(element % 2 == 0)
  return true;
})
console.log(evenNum);

//  //map 
let doubleNumber = numbers1.map((element) =>{
  return element*2;
});
console.log(doubleNumber);

 const double =(input) => input * 2;
 console.log(double(100));




 let todoes =[
  {title: "html", status: true},
  {title: "css", status: true},
  {title: "js", status: false},
  {title:"react", status: false}
 ]

 let modifiedTools = todoes.map((element) =>{
  if(element.status){
    return{
      title : element.title,
      status : "completed"
    }
  }
  else{
    return{
      title : element.title,
      status : "pending"
    }
  }
 })
 console.log(modifiedTools);



 