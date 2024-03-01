let blogs = [
    {
      title: "Basic Computer  Training in Nepal",
      created_at: "2024-03-22T15:14:31.944539+05:45",
    },
    {
      title: "Exploring Video Editing Opportunities",
      created_at: "2024-01-22T14:51:41.401510+05:45",
    },
    {
      title: "Mastering Adobe Illustrator at Mindrisers",
      created_at: "2024-02-22T14:49:45.524809+05:45",
    },
  ];
  
  // "2024-02-22T15:14:31.944539+05:45".substring(0,10)
  //console.log(blogs);
   function subString(index){

    // console.log(`The substring is ${blogs[0].title.substring(1,10)}`);
    /*console.log(`The substring is ${blogs[0].created_at.substring(0,10)}`);
    console.log(`The substring is ${blogs[1].created_at.substring(0,10)}`);
    console.log(`The substring is ${blogs[2].created_at.substring(0,10)}`);*/
return blogs[0].created_at.substring(0,2)



   }
   console.log("the output is",blogs[0]);
   subString(0)
   subString(1)
   subString(2)

   let text ="Iran sends Russia hundreds of ballistic missiles";

   function newText(index){
    return text.substring(0,12)
   }
   console.log("the text string is",text.substring(0,12))
   newText(text)


  