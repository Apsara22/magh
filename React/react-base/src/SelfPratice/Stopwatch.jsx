import { useEffect, useState, useRef } from "react";

export default function Stopwatch(){
    const[time, setTime]= useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const intervalRef = useRef(null)

    useEffect(()=> {
        if(isRunning){
            intervalRef.current = setInterval(()=>{
                setTimer((prevTimer)=> prevTimer=10);
            },10);
        }
        else if (!isRunning){
            clearInterval(intervalRef.current);
        }
        return()=> clearInterval(intervalRef.current)
    },[isRunning]);

    const startTimer = () =>{
        setIsRunning(true);
    }
    const stopTimer = () => {
        setIsRunning(false);
      };
    
      const resetTimer = () => {
        setTimer(0);
      };
    
      const formatTime = (timer) => {
        const getSeconds = `0${(timer / 1000) % 60}`.slice(-2);
        const minutes = `${Math.floor(timer / 60000)}`.padStart(2, '0');
        const milliseconds = `0${(timer % 1000)}`.slice(-3);
    
        return `${minutes} : ${getSeconds} : ${milliseconds}`;
      };

    return(
        <div>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
        </div>

    )
}