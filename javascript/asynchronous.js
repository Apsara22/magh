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


