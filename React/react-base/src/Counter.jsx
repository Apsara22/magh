import React,{useState} from "react";
import Countvalue from "./Countvalue";
export default function Counter() {
    // let count = 100;
    console.log("re-render")
    const[count,setCount]= useState(101);

    function increment(){

      setCount(count+1);
    }
    function decrement(){

      setCount(count-1);
    }
  
    // function increment() {
    //   console.log("increment.");
    //   let newValue = count + 1;
    //   document.getElementById("count-value").innerText = newValue;
    //   count = newValue
    // }
  
    return (
      <div>
        <h2>
          count: <span id="count-value" >{count}</span>
          {/* count::<Countvalue/> */}
        </h2>
        <button onClick={increment}>increment</button>
        <br/>
        <br/>
        <button onClick={decrement}>decrement</button>

      </div>
    );
  }
  