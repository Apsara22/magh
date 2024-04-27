 let willRain = false
 let hasProbility= false
 let isVerySunny =true
if(willRain){
    console.log("take the umbrella");
}
// else if(hasProbility){
//     console.log(" you may need take umbrella");
// }
// else{
//     console.log("not to need umbrella");
// }

else{
    if(hasProbility){
          console.log(" you may need take umbrella");
    }
    else 
    {if(isVerySunny)
    console.log("not to need umbrella");
}
}

let todo=[{
    title:"HTML",
    status:"completed"
 },
 {
    title:"Css",
    status:"completed"
 },
 {
    name:"javascript",
    status:"completed"
 },
 {
    title:"REact",
    status:"pending"
 }];
 //let todo[0].status=completed
 if(todo[0].status=="pending"){
    console.log("html is completed");
 }
 else{
    console.log("React is imcompleted");
 }
 if(todo[2].status=="pending"){
    console.log(`${todo[2].name} is completed`);
 }
 else{
    console.log(`${todo[2].name} is pending`);

 }

 
 let students = [
   {
       name:"ram",
       hasPaid:false,
       hasScholorship:true,
   },
   {
       name:"hari",
       hasPaid:false,
       hasScholorship:false,
   },
   {
       name:"shyam",
       hasPaid:true,
       hasScholorship:false,
   },
]

/*  ram can give exam  */
/*  hari cannot give exam  */
/*  shyam can give exam  */
function checkStudentAviability(result)
{
if(students.hasPaid==true){
   console.log(`${students.name} give exam`);
   
}
else if(students.hasScholorship==false){
   console.log(`${students.name} give exam`);

}
else{
   console.log(`${students.name} canot give exam`);
   
}
}
checkStudentAviability(students[0])
checkStudentAviability(students[1])
checkStudentAviability(students[2])

console.log(10%3);