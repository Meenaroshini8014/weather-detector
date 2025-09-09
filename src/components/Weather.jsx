
import { useState } from "react";
import axios from "axios";
import Video from "../assets/video.mp4";

function Weather() {
  const [cityInput, setCityInput] = useState("");
  const[city,setCity]=useState("")
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState("");
  const [desc, setDesc] = useState("");

  function handleCity(event) {
    setCityInput(event.target.value);
  }

  function getWeather() {
    
var weatherData=
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=87bc89439e676b0949cc95facfd56997`
      )
      .then(function (success) {
        console.log(success.data);
        setWeather(success.data.weather[0].main);
        setDesc(success.data.weather[0].description);
        setTemp(success.data.main.temp); 
        setCity(success.data.name);
        setCityInput("");
      })
      
  }

  return (

 <div className="relative w-full h-screen overflow-hidden ">
            <video autoPlay loop muted playsInline  className="absolute w-full h-full object-cover top-0 left-0 right-0 bottom-0">
             <source src={Video}type="video/mp4"/>
            </video>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-black">
            <h1 className="  text-6xl font-bold p-5  ">Weather Report 🌦</h1>
            <p className="text-xl mr-16">I can give you a weather report about your city</p>
            <input onChange={handleCity}value={cityInput} type="text" placeholder="Enter your City" 
            className="border border-black outline-none rounded-md mt-3 p-2 mr-2"></input>
            <button onClick={getWeather} className="border border-black mt-2 p-2 rounded-lg bg-sky-300 font-bold">Get Report</button>
     <div>

         <h1><b>City:</b>{city}</h1>
         <p><b>Weather:</b>{weather}</p>
          <p><b> Temperature:</b>{temp}</p>
          <p><b> Description:</b>{desc}</p>
          </div>
            </div>
            </div>  
                
            
        


    
  );
}

export default Weather;
