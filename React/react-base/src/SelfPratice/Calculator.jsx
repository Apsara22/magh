import React,{useState} from "react";

export default function Calculator(){
    const [result,setResult]= useState("");
    const clickHandler=(event)=>{
        setResult(result.concat(event.target.value))
    }
const  clearDisplay =()=>{
    setResult("");
}

const backSpace = () =>{
    setResult(result.slice(0, result.length-1));
}
const calculate = () => {
    try {
        setResult(eval(result).toString())
    } catch(err) {
        setResult("Oh, no! Error!")
        setTimeout(() => {
            setResult("")
        },2000)
    }
}
    
    return(
        <div className="Calc">
            <input type="text"  placeholder="0" id="answer" value={result}/>
            <input type="button" value="9" className="button" onClick={clickHandler}/>
            <input type="button" value="8" className="button" onClick={clickHandler}/>
            <input type="button" value="7" className="button" onClick={clickHandler}/>
            <input type="button" value="6" className="button" onClick={clickHandler}/>
            <input type="button" value="5" className="button" onClick={clickHandler}/>
            <input type="button" value="4" className="button" onClick={clickHandler}/>
            <input type="button" value="3" className="button" onClick={clickHandler}/>
            <input type="button" value="2" className="button" onClick={clickHandler}/>
            <input type="button" value="1" className="button" onClick={clickHandler}/>
            <input type="button" value="0" className="button" onClick={clickHandler}/>
            <input type="button" value="." className="button" onClick={clickHandler}/>
            <input type="button" value="+" className="button" onClick={clickHandler}/>
            <input type="button" value="-" className="button" onClick={clickHandler}/>
            <input type="button" value="*" className="button" onClick={clickHandler}/>
            <input type="button" value="/" className="button" onClick={clickHandler}/>
            <input type="button" value="%" className="button" onClick={clickHandler}/>
            <input type="button" value="Cle" className="button1" onClick={clearDisplay}/>
            <input type="button" value="DEL" className="button1" onClick={backSpace}/>
        
            <input type="button" value="=" className="button1" onClick={calculate}/>
        </div>
    )
}