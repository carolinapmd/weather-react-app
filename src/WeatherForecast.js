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

   

    if (loaded && props.city === forecast.city.name) {
        
        
        return (
        <div className="WeatherForecast">
            <WeatherForecastSegment list={forecast.list[0]} timezoneDifference={props.timezoneDifference} unit={props.unit}/>
            <WeatherForecastSegment list={forecast.list[1]} timezoneDifference={props.timezoneDifference} unit={props.unit}/>
            <WeatherForecastSegment list={forecast.list[2]} timezoneDifference={props.timezoneDifference} unit={props.unit}/>
            <WeatherForecastSegment list={forecast.list[3]} timezoneDifference={props.timezoneDifference} unit={props.unit}/>
            <WeatherForecastSegment list={forecast.list[4]} timezoneDifference={props.timezoneDifference} unit={props.unit}/>
            <WeatherForecastSegment list={forecast.list[5]} timezoneDifference={props.timezoneDifference} unit={props.unit}/>
                
        </div>
            );

    } else {
        let apiKey = "76184a71275816c9e0d0b09aa75a7bcf"
        let apiUrl= `http://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleForecastResponse);

        return null;

    }



}