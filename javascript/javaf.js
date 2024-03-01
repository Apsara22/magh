// Data types
// String
// Number
//  -integer
   // -Float


/*let count;//undefined or like empty
console.log(count);

let topic1 ="html"
let topic2 ="html"
let topic3 ="html"
*/
//Array syntax 
let topics =["html","css","js","java"]
console.log(topics);
console.log(topics[4]);
topics[4]="python"
console.log(topics[4]);


let ages =[10,20,"thirty"]
console.log(ages);
//change thirty by 30
ages[2]= 30
//console.log("2nd index",ages(2))
console.log(ages);
console.log("3 rd index", ages[3]);
ages[3]=10
console.log("3 rd index", ages[3]);

// let emp=["Sonoo","Vimal","Ratan"];  
// for (i=0;i<emp.length;i++){  
// document.write(emp[i] + "<br/>");  
// }  
let names =["ram","hari","glopal"]
console.log(names[2]);
//object 



 let projector={
   Color: "black",
   brand: "samsung",
   quality:"high",
   price: 20000

 }
 console.log(projector.Color);
 console.log("pre",projector.brand);

 projector.brand ="acer"
 console.log("after",projector.brand);
 console.log(projector);
 console.log(projector.website);
 projector.website="htpps/..."// change in samsung.com
 console.log(projector.website);
 let users =["user1","user2","user3"]

 user1 = {
   name: "Shaym",
   address: "ktm",
   age: 22
}
user2 = {
   name: "Ram",
   address: "ktm",
   age: 22
}
user3 = {
   name: "hari",
   address: "ktm",
   age: 22
}
console.log(users,user1);


let course = ["mern","marketing","python"]
console.log("before",course);
course[1]="digital-marketing"
console.log("after",course);

let detialCourses =[
   {
      name : "mern",
      duration: 3,
   },
   {
      name : "marketing",
      duration: 3,
   },
   {
      name : "python",
      duration: 3,
   },
];
console.log(detialCourses[1]);
detialCourses[1]= "digital-marketing"
console.log(detialCourses);
detialCourses[1].name = "digital marketing"
console.log(detialCourses);

let colors =[
   {
      name: "red",
      hex_v: "ff0000",
      RCB:(255, 0, 0)
   },
   {
      name: "Blue",
      hex_v: "#0000FF",
      RCB:(0, 0, 100)
   },
   {
      name: "White",
      hex_v: "ffffff",
      RCB:(255, 0, 0)
   }

];
console.log(colors);

colors[2].hex_v ="gggg"
console.log(colors);
colors['name']= "green"
console.log(colors);

let user= {
   name : "hari",
   age :18,
   address:{
      prament:{
         district : "NUwakot",
         ward:15
        
   },
   temporary:{
      district: "KTM",
      ward:15

   }
}
}
console.log(user.address['prament']);
user.address.prament['district']="gorkha"
console.log(user.address['prament']);

let employee=[
   {
   name: "gopal",
   address:"manmaiju",
   phone_nu :{
      private:98865444312,
      public: 9876543323
   },
   email:"gobal@gmail.com"
},
{
   name: "hari",
   address:"manmaiju",
   phone_nu :{
      private:"abcd",
      public: 9876543323
   },
   email:"hari@gmail.com"
}
]
employee[1].phone_nu['private']=9888990
employee[1].phone_nu.private=9888990
console.log(employee);


console.log(employee[1].phone_nu.private);

let courses1 =[
   {
      name:"mern",
      duration:3,
      students:[
         {
            name:"Gopal",
            age:21,
            address:"Ktm"
         },
         {
            name: "Ram",
            age:22,
            address:"pokahra"
         }
      ]
      
   },
   {
      name:"java",
      duration: 4,
      students:[
         {
            name:"hari",
            age:22,
            address:"pokahra"
         },
         {
            name: "sita",
            age:22,
            address:"xxx"
         }
       ]
      }

]
console.log(courses1);
console.log("before",courses1[1].students[1]);
courses1[1].students[1].address="dolpha"
console.log("after",courses1[1].students[1]);


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
      name:"javascript",
      status:"completed"
   },
   {
      title:"REact",
      status:"pending"
   }
]

topics2[3].status="react is pending"
console.log(topics2[3]);
topics2[0].status="HTML is completed"
console.log("Topics",topics2[0].status);

topics2[1].status="CSS is completed"
topics2[2].status="jacascript is completes"
console.log("Topics",topics2[1].status);
console.log("Topics",topics2[2].status);





