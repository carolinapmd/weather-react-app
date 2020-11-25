import React from "react";
import WeatherIcon from "./WeatherIcon"
import Time from "./Time"

import "./WeatherForecastSegment.css"

export default function WeatherForecastSegment(props) {



function temperature() {
    return `${Math.round(props.list.main.temp_min)} | ${Math.round(props.list.main.temp_max)}ºC`
}

    return(
        <div className="WeatherForecastSegment mt-2">
            <div className="row">
                <span className="col time">
                    <Time time={ new Date((props.list.dt + props.timezoneDifference) * 1000)} />
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