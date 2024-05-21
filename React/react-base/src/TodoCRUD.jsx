import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TodoCRUD(){
    const[Todos, setTodos] = useState([])
    
    useEffect(() => {
        axios.get("https://todo-api-dom.vercel.app/api/todos")
    .then(res =>{
        console.log(res)
        console.log(res.data.data)
        setTodos(res.data.data)
    })
      }, []);
    return(
        <>
            <h1>Todos data</h1>
            {Todos.map((el)=> {

               return <li>{el.title} ✔️❌</li>
               
               {JSON.stringify(Todos)}

            })}
            

        </>
    )
}