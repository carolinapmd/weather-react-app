import React, { useState } from "react";
import axios from "axios"
import WeatherCard from "./WeatherCard";

import "./Weather.css"


export default function Weather(props){
    const [weatherData, setWeatherData] = useState({city: props.defaultCity, searched:false})

    function handleResponse(response) {
        setWeatherData({
            timezone: response.data.timezone,
            city: response.data.name,
            country: response.data.sys.country,
            temperature: response.data.main.temp,
            feelsLike: response.data.main.feels_like,
            description: response.data.weather[0].description,
            maxTemperature: response.data.main.temp_max,
            minTemperature: response.data.main.temp_min,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            update: response.data.dt,
            icon: response.data.weather[0].icon,
            searched: true
        
        });
      
    }

    let form =  (<div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
            <input type="search" className="form-control" autoFocus="on" placeholder="Enter a city..." />
                </div>
                <div className="col-3">
            <input type="submit" className="btn btn-info " value="Search" />
                </div>
            </div>
        </form>
        <WeatherCard data={weatherData} />
    </div>);

    if (weatherData.searched) {
        return (form) 
    } else {
        let apiKey= `2e441a46ac7fd97e3ca0c59e6e2a3fcc`
        let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${weatherData.city}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse)

        return ("Loading...")
        }
}