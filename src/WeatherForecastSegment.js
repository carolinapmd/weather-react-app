import React from "react";
import WeatherIcon from "./WeatherIcon"
import Time from "./Time"

import "./WeatherForecastSegment.css"

export default function WeatherForecastSegment(props) {



function temperature() {
    if (props.unit==="celsius") {
     
        return `${Math.round(props.list.main.temp_min)} | ${Math.round(props.list.main.temp_max)}ºC`
    } else {
        return `${Math.round(props.list.main.temp_min * 9/5 + 32)} | ${Math.round(props.list.main.temp_max * 9/5 + 32)}ºF`
        
    }
}


    return(
        <div className="WeatherForecastSegment mt-2">
            <div className="row">
                <span className="col time">
                    <Time time={ new Date((props.list.dt + props.timezoneDifference) * 1000)} />
                </span>
                <span className="col forecastTemperature">
                    {temperature()}
                </span>
                <span className="col forecastIcons">
                    <WeatherIcon code={props.list.weather[0].icon} />
                </span>
                <span className="col-5 description">
                    {props.list.weather[0].description}
                </span>
                </div>
        </div>
    );
}