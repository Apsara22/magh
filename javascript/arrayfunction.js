let names =["ram", "shyam","hari", "gita","gopal"];

let users = names.map((element, index) =>{
     return{
        name : element,
        email:`${element} @gmail.com`,
        password:`${element}-${index}`
     }
    
})
console.log(users);

let students = ["Apsara","Sarala","laxmi","Namarata"];

let users1 = students.map((element, index) =>({
   
      name : element,
      email:`${element} @gmail.com`,
      password:`${element}-${index}`
   
})); 
console.log(users1);

// setTimeout function
// promise
//find
 setTimeout(function(){
      console.log("I a  Apsara");
 },2000)
