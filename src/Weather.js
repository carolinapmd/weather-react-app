import React, { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "axios"
import WeatherCard from "./WeatherCard";

import "./Weather.css"


export default function Weather(props){
    const [weatherData, setWeatherData] = useState({searched:false});
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        setWeatherData({
            timezone: new Date(Date.now() + response.data.timezone*1000),
            city: response.data.name,
            country: response.data.sys.country,
            temperature: response.data.main.temp,
            feelsLike: response.data.main.feels_like,
            description: response.data.weather[0].description,
            maxTemperature: response.data.main.temp_max,
            minTemperature: response.data.main.temp_min,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            update: new Date(response.data.dt * 1000),
            icon: response.data.weather[0].icon,
            searched: true
            
        });
            }

            function search() {
                const apiKey= `3a77522093e4f100cfb7df1a8289b1f6`
                let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
                axios.get(apiUrl).then(handleResponse)
            }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value)
    }

    let form =  (<div className="Weather">
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-9">
            <input type="search" className="form-control" autoFocus="on" placeholder="Enter a city..." onChange={handleCityChange}/>
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
        search();
        return (<FontAwesomeIcon icon="spinner" pulse size={"3x"} />)
        }
}