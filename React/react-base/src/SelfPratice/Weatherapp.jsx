import React, { useState } from "react";
import axios from "axios";
export default function Weatherapp(){
    const[City, SetCity]= useState("")
    const[WeatherData, setWeatherData] = useState("null");

    const fetchWeatherData = async ()=>{
        try{
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`

            );
            setWeatherData(response.data);
        }
        catch(error){
            console.log(error)
        }

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        fetchWeatherData();
      };

    return(
        <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text"  placeholder="ENTER THE CITY NAME"  value={City} onChange={(event) =>SetCity(event.target.value)}/> &nbsp; &nbsp;
            <button type="submit">GET WEATHER</button>
            </form>
            {WeatherData && (
        <div>
          <h2>{WeatherData.name}</h2>
          <p>{WeatherData.weather[1].description}</p>
          <p>Temperature: {WeatherData.main.temp}</p>
        </div>
      )}
            </div>

    )
}