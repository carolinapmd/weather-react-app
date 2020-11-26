import React, { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import WeatherForecast from "./WeatherForecast"

import "./WeatherTemperature.css"

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");

    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit")
    }

    function convertToCelsius(event) {
        event.preventDefault();
        setUnit("celsius")
    }

    function fahrenheitTemperature() {
        return (Math.round(props.data.temperature* 9/5 + 32))
    }
    function fahrenheitMinTemperature() {
        return (Math.round(props.data.minTemperature* 9/5 + 32))
    }
    function fahrenheitMaxTemperature() {
        return (Math.round(props.data.maxTemperature* 9/5 + 32))
    }

    if (unit === "celsius") {
        return(
            <div className="WeatherTemperature">
                <div className="visualWeather">
                    <div className="row">
                        <div className="col-7 temperature">
                            {Math.round(props.data.temperature)}
                        </div>
                        <div className="col-5 temperatureUnits">
                            <ul>
                                <li className="units"><strong>ºC</strong> | <small><a href="/" onClick={convertToFahrenheit}>ºF</a></small></li>
                                
                                <li className="maxMinTemperature">
                                    <FontAwesomeIcon icon="angle-down" /> {Math.round(props.data.minTemperature)}  |  <FontAwesomeIcon icon="angle-up" /> {Math.round(props.data.maxTemperature)}{"              "}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p className="card-text">{props.data.description}</p>
                </div>
                <div className="row parameters">
                    <div className="col">
                        <p>Feels like:</p>
                        <p><span className="weatherValue">{Math.round(props.data.feelsLike)}</span>ºC</p>
                        <FontAwesomeIcon icon="temperature-low" />
                    </div>
                    <div className="col">
                        <p>Humidity:</p>
                        <p><span className="weatherValue">{props.data.humidity}</span>%</p>
                        <FontAwesomeIcon icon="tint" />
                    </div>
                    <div className="col">
                        <p>Wind:</p>
                        <p><span className="weatherValue">{Math.round(props.data.wind)}</span> km/h</p>
                        <FontAwesomeIcon icon="wind" />
                    </div>
                </div>
                <div className="WeatherForecast mt-3 mb-2">
                        <WeatherForecast unit="celsius" city={props.data.city} timezoneDifference={props.data.timezoneDifference}/>
                </div> 
            </div>
        );

    } else {

        return (
            <div className="WeatherTemperature">
                <div className="visualWeather">
                    <div className="row">
                        <div className="col-7 temperature">
                            {fahrenheitTemperature()}
                        </div>
                        <div className="col-5 temperatureUnits">
                            <ul>
                            <li className="units"><strong>ºF</strong> | <small><a href="/" onClick={convertToCelsius}>ºC</a></small></li>
                                <li className="maxMinTemperature">
                                    <FontAwesomeIcon icon="angle-down" /> {fahrenheitMinTemperature()}  |  <FontAwesomeIcon icon="angle-up" /> {fahrenheitMaxTemperature()}{"              "}
                                </li>
                            </ul>
                        </div>                      
                    </div>
                    <p className="card-text">{props.data.description}</p>
                </div>
                <div className="row parameters">
                        <div className="col">
                            <p>Feels like:</p>
                            <p><span className="weatherValue">{Math.round(props.data.feelsLike * 9/5+32)}</span>ºF</p>
                            <FontAwesomeIcon icon="temperature-low" />
                        </div>
                        <div className="col">
                            <p>Humidity:</p>
                            <p><span className="weatherValue">{props.data.humidity}</span>%</p>
                            <FontAwesomeIcon icon="tint" />
                        </div>
                        <div className="col">
                            <p>Wind:</p>
                            <p><span className="weatherValue">{Math.round(props.data.wind)}</span> km/h</p>
                            <FontAwesomeIcon icon="wind" />
                        </div>
                </div> 
                <div className="WeatherForecast mt-3 mb-2">
                        <WeatherForecast unit="fahrenheit" city={props.data.city} timezoneDifference={props.data.timezoneDifference}/>
                </div>      
            </div>  
            );
    }

}