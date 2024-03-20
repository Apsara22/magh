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
  if(item.quantity>=0){
    total = total + item.rate * item.quantity
   }})
   console.log(`${user.name} has ordered rs: ${total}`);
 })



 