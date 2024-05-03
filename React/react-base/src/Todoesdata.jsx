import React,{useState} from "react";
const[todos,setTodosData]=useState
[
        {
            title: "html", 
            status: "completed",
        },
        {
            title: "CSS", 
            status: "completed",
        },
        
    ];

    export default function Todoesdata(){
        return(
            <>
            <form action="">
                <input type="text"  placeholder="Enter the data"/>
                <button>Add</button>
            </form>
            
            </>
        )
    }

