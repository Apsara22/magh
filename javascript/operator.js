let count =100;
//count  = count +1
console.log("count", ++count);//pre interment

console.log({count});
console.log("count", count++);//post intcrement

function double(input){
    return input*2;
}
console.log(double(10))
//console.log("count", count++);//post intcrement
console.log("count", ++count);//pre interment
console.log("ram"=="Ram");
console.log("ram"=="ram");

let dbUser={
    username: "ram12",
    password:"12345678",
    isActivated: false,
}

let inputPassword="12345678"
//ram can login
let inputUser="ram12"
//ram can login used logical operaTOR
 /*if(dbUser.password==inputPassword)

 {
    if(dbUser.username==inputUser){
    console.log("can login")
 }
 else{
    console.log("cannot login")

 }
}
 else{
    console.log("cannot login")

 }*/
 if(dbUser.username == inputUser && dbUser.password == inputPassword && dbUser.isActivated){
    console.log("can login")
 }
 else{
    console.log("cannot login")
 }

 let students = [
    {
        name:"ram",
        hasPaid:true,
        hasScholorship:true,
        hasAttendence:true

    },
    {
        name:"hari",
        hasPaid:false,
        hasScholorship:false,
        hasAttendence:false

    },
    {
        name:"shyam",
        hasPaid:true,
        hasScholorship:true,
        hasAttendence:true
    },
 ]
 /*if(students[0].hasPaid || students[0].hasPaid ){
    console.log("give exam")
 }
 else{
    console.log("give exam")

 }
 if(students[0].hasPaid && students[0].hasPaid && students[0].hasAttendence){
    console.log("give exam")
 }
 else{
    console.log("not give exam")

 }*/
 function checkDetails(input){
    if(students.hasPaid || students.hasPaid && students[0].hasAttendence){
        console.log(`${students.name} can give exam`);
     }
     else{
        console.log(`${students.name} cannot give exam`);

     }

 }
 checkDetails(students[0])
 checkDetails(students[1])
 checkDetails(students[2])