import React from "react";
import "./WeatherInfo.css"

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">      
            <div className="visualWeather">
                    <img src={`http://openweathermap.org/img/wn/${props.info.icon}@2x.png`} alt={props.info.description}/>
                    <div className="row">
                        <div className="col temperature">
                            {Math.round(props.info.temperature)}
                        </div>
                        <div className="col temperatureUnits">
                            <ul>
                                <li className="units">ºC | ºF</li>
                                <li className="maxMinTemperature">{Math.round(props.info.minTemperature)} | {Math.round(props.info.maxTemperature)}{"              "}</li>
                            </ul>
                        </div>                      
                    </div>
                    <p className="card-text">{props.info.description}</p>
            </div>
            <div className="row parameters">
                    <div className="col">
                        <p>Feels like:</p>
                        <p><span className="weatherValue">{Math.round(props.info.feelsLike)}</span>ºC</p>
                        <i className="fas fa-temperature-low" />
                    </div>
                    <div className="col">
                        <p>Humidity:</p>
                        <p><span className="weatherValue">{props.info.humidity}</span>%</p>
                        <i className="fas fa-tint"/>
                    </div>
                    <div className="col">
                        <p>Wind:</p>
                        <p><span className="weatherValue">{Math.round(props.info.wind)}</span> km/h</p>
                        <i className="fas fa-wind"/>
                    </div>
            </div>
        </div>

    );
}