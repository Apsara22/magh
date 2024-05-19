import React, { useEffect, useState } from "react";
    export default function Input(){
        
        const [title, setTitle] = useState(["html", "css","js"])
        useEffect(() => {
            const items = JSON.parse(localStorage.getItem('title'));
            if (title) {
              setTitle(title);
            }
          });

        function AddnewTitle(e){
        e.preventDefault()
        // console.log(e.target.topic.value)

        let temp = [...title];
        temp.push(e.target.topic.value);
        setTitle(temp)
        // console.log(temp)
        }
         function deleteData(deletDatas){
            console.log("delete..",deletDatas);
            let temp =[...title];
            // temp.slice(index,1);
            temp = temp.filter((el, idx) => deletDatas !== idx);
        setTitle(temp);
         }

         
        return(
            <>
            <h2>Input data</h2>
            <form action="" onSubmit={AddnewTitle}>
                <input type="text" name="topic" placeholder="Insert new data" />
                <button>Add</button>
            </form>
            {JSON.stringify(title)}
            <ul>{title.map((el, index)=>{
                return<li key={index}>
                    {el}
                    <button onClick={()=>deleteData(index)}>Delete</button>
                    </li>
            })}</ul>

            
            </>
    
        )
    }