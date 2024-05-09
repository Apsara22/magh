import React,{useState} from "react";

export default function Changetheme(){
    const [currentTheme, setcurrentTheme] = useState("light");
    
    
    return(
       <div className={currentTheme=="light" ? "dark": "light"}>
        {

        }
        <button type="button" onClick={()=> setcurrentTheme('dark')}>Dark Theme</button>
        <button type="button" onClick={()=> setcurrentTheme('light')}>Light Theme</button>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis harum,<br/>
             consequuntur adipisci quasi consequatur commodi reprehenderit error, quisquam vitae quis quod 
            architecto minus ipsam doloribus quam officiis, similique repellat quas.</p>
        </div>
    )
}