import React from "react";

export default function WeatherFeelsLike(props) {
    
        return(
            <div className="WeatherFeelsLike">
            <span className="weatherValue">{Math.round(props.feelsLike)}</span>
            </div>
               
        )

}