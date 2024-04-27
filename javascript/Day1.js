
 

 
    // console.log("the sum is ",sum1(3,6));
    // console.log(sum1(3,6));
 
    //foreach
    let sumArray =[1, 4, 0, 9, -3];

      sumArray.forEach((element)=>{
        sum =0;
        sum += element;
        return sum;

     })
     console.log(sum);

    let avgArray =[1, 4, 0, 9, -3];
    for(i=0; i<=avgArray.length; i++)
    avgArray.forEach((element)=>{
        avg =0;
        avg += element/avgArray.length;
        return avg;

     })

//setTimeout
//      setTimeout(function(){
//         // console.log("I a  Apsara");
//      console.log(avg);

//    },2000)

// setInterval(function(){
//  console.log("I a  Apsara");
//  //console.log(avg);

// },2000)

//promise


let db_usesr=[
  {name:"Apsara", email:"apsara1@gmail.com", password:"apsara123"},
  {name:"Sita", email:"sita1@gmail.com", password:"sita123"},
  {name:"Hari", email:"hari1@gmail.com", password:"hari123"},
  {name:"gopal", email:"gopal1@gmail.com", password:"gopal123"},
  {name:"laxmi", email:"laxmi1@gmail.com", password:"laxmi123"},
];
