import { useState } from "react";

export default function Stopwatch(){
    const[time, setTime]= useState(0)
    const [isRunning, setRunning] = useState(false)
    return(
        <div>
            <button>Start</button>
            <button>Stop</button>
            <button>Reset</button>
        </div>

    )
}