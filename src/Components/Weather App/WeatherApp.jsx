import React from 'react';
import './WeatherApp.css'

import search_icon from '../Assets/download.png';
import icon from '../Assets/1.png';
import ser from '../Assets/clod.png';
import set  from '../Assets/sun.png';

const WeatherApp = () => {
  let api_key="441919a6e0b8aa66ce126b05e4c7b664";
  //const [wicon,setWicon]=useState(icon)

  const search=async()=>{
     const element=document.getElementsByClassName("cityInput")
    if(element[0].value==="")
    {
      return 0;
    }
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
  
  let response=await fetch(url);
  let data= await response.json();
  const humidity=document.getElementsByClassName("humidity_percentage")
  const wind=document.getElementsByClassName("wind_rate")
  const temperature=document.getElementsByClassName("weather_temp")
  const location=document.getElementsByClassName("weather_location")
humidity[0].innerHTML=data.main.humidity+"%";
wind[0].innerHTML=data.wind.speed+"km/h";
temperature[0].innerHTML=data.main.temp+"&degC";
location[0].innerHTML=data.name;

}

  return (
    <div className='container'>
        <div className='top-bar'>
            <input type="text" className='cityInput' placeholder='Search'/>
            <div className='search_icon' onClick={()=>{search()}}>
              <img src={search_icon} alt=""/>
            </div>
    
      </div> 
   <div className="weather_image">
    <img src={ser} alt=""/>
    </div> 
    <div className="weather_temp">24deg</div>
    <div className="weather_location">London</div>
    <div className="data_container">
      <div className="element">
        <img src={set} alt="" className="icon" />
        <div className="data">
          <div className="humidity_percentage">64%</div>
          <div className="text">Humidity</div>
        </div>
      </div>
      <div className="element">
        <img src={icon} alt="" className="icon" />
        <div className="data">
          <div className="wind_rate">18 km/h</div>
          <div className="text">Wind</div>
        </div>
      </div>
    </div>



  </div>

  );
}

export default WeatherApp;
