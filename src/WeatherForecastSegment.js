import React from "react";
import WeatherIcon from "./WeatherIcon"

import "./WeatherForecastSegment.css"

export default function WeatherForecastSegment(props) {

     function Time() {
        let time = new Date((props.list.dt + props.timezoneDifference) * 1000)
    let hours = time.getHours();
    if (hours<10) {
        hours = `0${time.getHours()}`
    }
    let minutes = time.getMinutes();
        if (minutes<10) {
            minutes = `0${time.getMinutes()}`
        }
    return (`${hours}:${minutes}`)
}

function temperature() {
    return `${Math.round(props.list.main.temp_min)} | ${Math.round(props.list.main.temp_max)}ºC`
}

    return(
        <div className="WeatherForecastSegment mt-2">
            <div className="row">
                <span className="col time">
                    {Time()}
                </span>
                <span className="col temperature">
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