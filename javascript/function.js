/*let input1 = 1
let input2 = 2
sum=input1+input2;
console.log("1+2=",sum);
console.log(1,"+",2,"+","=",3);


 let input3 =2
 let input4= 3
 sum=input3+input4;
 console.log("2+3=",sum)
 console.log(`${input3} + ${input4}  = 5`);
*/

 let input5 =3
 let input6= 4
 

 function double(input){
   // console.log({"input": input});
   // console.log({"input": input});
   console.log(`double of ${input} is ${input*2}`);

   
   //console.log('double of 2 is 4');
 }
 //calling running the function
 double(2)
 double(10)

 function calculateSum(userTnput1,userTnput2){//input is known as parameter
   console.log(userTnput1,userTnput2)
   console.log(`${userTnput1} + ${userTnput2} = ${userTnput1+userTnput2}`);

}
calculateSum(1,2)
calculateSum(1,3)
calculateSum(1,4)
calculateSum(1000,1000)


let topics2 =[
   {
      title:"HTML",
      status:"completed"
   },
   {
      title:"Css",
      status:"completed"
   },
   {
      title:"javascript",
      status:"completed"
   },
   {
      title:"REact",
      status:"pending"
   }
];

function printMultiple(index){

console.log(`${topics2[index].title} is ${topics2[index].status}`);
}
printMultiple(0)
printMultiple(1)
printMultiple(2)
printMultiple(3)
function topicsStatus(index){
   //let selectedTopics = topics2;
console.log(`${topics2[index].title} is ${topics2[index].status}`);

}
topicsStatus(0)
topicsStatus[1]

function sum(input1,input2){
   //let result=input1+input2
   //console.log(`The result is ${result}`);
   return input1+input2
   console.log(`${result}`);
}
sum(10,20)

function double(input){
   //console.log(`double of ${input} is ${input*2}`)
   return input*2;
}
double(8)
double(12)
double(100)
console.log("the sum is",double(2))
 
function sum1(input1,input2){
   //let result = input1+input2
   return input1+input2
   }

   console.log("the sum is ",sum1(3,6));
    
   function multi(input1,input2){
      return input1*input2;
   }
   console.log("the multiply is",multi(20,30));






