import React,{useState} from "react";
import {login} from "react-router-dom"
 export default function Regi(){
   const[input, SetInput] = useState({
      name:"",
      email:"",
      password:"",
   })
    function fromSubmit(e){
      e.preventDefault();
      localStorage.setItem("user",JSON.stringify(input));

    }

 
 return(
 <>
 <form action="" onSubmit={fromSubmit}>
   <h1>Create An Account</h1>
    
    <input required type="text" placeholder="Enter the name" 
    name="name"
    value={input.name}
    onChange={(e) =>
      SetInput({...input, [e.target.name]: e.target.value,})
    }
    /> 
    
    <input required type="email" placeholder="Enter the email"
    name="email"
    value={input.email}
    onChange={(e) =>
      SetInput({...input, [e.target.name]: e.target.value,})
    }/> 
    
    <input required type="password"  placeholder="Enter the password"
    name="password"
    value={input.password}
    onChange={(e) =>
      SetInput({...input, [e.target.name]: e.target.value,})
    }/> 
    <button type="submit">Register</button>

 </form>
 </>
 )
 }