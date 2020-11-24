import React, { useState } from "react";
import WeatherForecastSegment from "./WeatherForecastSegment"

import axios from "axios";
import "./WeatherForecast.css"

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false)
    const [forecast, setForecast] = useState(null)

    function handleForecastResponse(response) {
        setForecast(response.data)
        setLoaded(true)
    }

   

    if (loaded && props.city === forecast.name) {
        
        return (
        <div className="WeatherForecast">
           
            <WeatherForecastSegment list={forecast.list[0]} timezoneDifference={props.timezoneDifference} />
            <WeatherForecastSegment list={forecast.list[1]} timezoneDifference={props.timezoneDifference} />
            <WeatherForecastSegment list={forecast.list[2]} timezoneDifference={props.timezoneDifference} />
            <WeatherForecastSegment list={forecast.list[3]} timezoneDifference={props.timezoneDifference} />
            <WeatherForecastSegment list={forecast.list[4]} timezoneDifference={props.timezoneDifference} />
            <WeatherForecastSegment list={forecast.list[5]} timezoneDifference={props.timezoneDifference} />
         
            
        </div>
            );

    } else {
        let apiKey = "3a77522093e4f100cfb7df1a8289b1f6"
        let apiUrl= `http://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleForecastResponse);

        return null;

    }



}