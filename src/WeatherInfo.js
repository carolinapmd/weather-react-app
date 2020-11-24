import React from "react";
import WeatherIcon from "./WeatherIcon";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./WeatherInfo.css"

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">      
            <div className="visualWeather">
              
                <WeatherIcon code={props.info.icon} alt={props.info.description} />
                
                    <div className="row">
                        <div className="col temperature">
                            {Math.round(props.info.temperature)}
                        </div>
                        <div className="col temperatureUnits">
                            <ul>
                                <li className="units">ºC | ºF</li>
                                <li className="maxMinTemperature"><FontAwesomeIcon icon="angle-down" /> {Math.round(props.info.minTemperature)}  |  <FontAwesomeIcon icon="angle-up" /> {Math.round(props.info.maxTemperature)}{"              "}</li>
                            </ul>
                        </div>                      
                    </div>
                    <p className="card-text">{props.info.description}</p>
            </div>
            <div className="row parameters">
                    <div className="col">
                        <p>Feels like:</p>
                        <p><span className="weatherValue">{Math.round(props.info.feelsLike)}</span>ºC</p>
                        <FontAwesomeIcon icon="temperature-low" />
                    </div>
                    <div className="col">
                        <p>Humidity:</p>
                        <p><span className="weatherValue">{props.info.humidity}</span>%</p>
                        <FontAwesomeIcon icon="tint" />
                    </div>
                    <div className="col">
                        <p>Wind:</p>
                        <p><span className="weatherValue">{Math.round(props.info.wind)}</span> km/h</p>
                        <FontAwesomeIcon icon="wind" />
                    </div>
            </div>
        </div>

    );
}