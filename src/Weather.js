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
            timezoneDifference: response.data.timezone,
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
                const apiKey= `76184a71275816c9e0d0b09aa75a7bcf`
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

    function showPosition(position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        const apiKey= `76184a71275816c9e0d0b09aa75a7bcf`
        let apiUrl=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse)
    }

    function getCurrentLocation(event) {
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(showPosition)
    }

    let form =  (   
        <div className="searchEngine row">
            <div className="col-10">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                            <div className="col-9">
                                <input type="search" className="form-control" autoFocus="on" placeholder="Enter a city..." onChange={handleCityChange}/>
                            </div>
                            <div className="col-3">
                                <button type="submit" className="btn btn-info" >Search</button>                         
                            </div>
                    </div>
                </form>
            </div>
            <div className="col-2">
                <button className="btn btn-info " title="Geolocation" onClick={getCurrentLocation}><FontAwesomeIcon icon="compass" spin /></button>                      
            </div>
        </div>
    );

    if (weatherData.searched) {
        return (
            <div className="Weather">
                            
                    {form} 
                    <WeatherCard data={weatherData} />        
                  
            </div>
        );
    } else {
        search();
        return (
        <div className="Weather col">            
          <FontAwesomeIcon icon="spinner" pulse size={"3x"} />
        </div>
        );
    }
}