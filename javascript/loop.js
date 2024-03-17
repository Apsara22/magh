let users=["ram","shyam","hari"]

for(let i=0; i<users.length; i++){
    console.log("print the result",users[i]);
}
for(let i=0; i<=10; i++){
    console.log("hello world",i);
}

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
 ]
 for( let index=0; index<topics2.length; index++){
    console.log(index)
 console.log(`${topics2[index].title} is ${topics2[index].status}`)

 }
 //console.log(`${topics2[0].name} is ${topics2[0].status}`)

 function  findMultiplication(num, multipler =1) {//multiply of five,ten
if(multipler>10)
{
   return;
}
console.log(`${num} * ${multipler} =${num * multipler}`);
findMultiplication(num, multipler+1);
}
findMultiplication(5);
console.log("print table 10");
findMultiplication(10);


function multipleTable(input){
   for (let sp=5; sp<11; sp++){
      let result =input+sp;

      console.log(`${input} * ${sp} =${result}`);
   }


}
multipleTable(5)

 /*findMultiply({
   number:10,
   startForm: 5,
   stopAt: 10
 )};*/

 function findMultiply(input,startForm,endAt){
   for(let sp=startForm; sp<=endAt; sp++){

   let result =input+sp;

      console.log(`${input} * ${sp} =${result}`);
   }
 }
 findMultiply(5)

 findMultiply({
   number:10,
   startForm: 5,
   stopAt: 10
 });
 findMultiply(5)

 findMultiply({
   number:12,
   startForm: 1,
   stopAt: 10
 });

 //object destructuring
//  let input=filterObj.input;
//  let startForm = filterObj.startForm;

let numbers = [1,2,3,4,5]

for(i=1;i<numbers.length;i++){
   console.log("the print number is",numbers[i]*2);
}

for(i=0;i<5;i++){
   console.log(i);
}