import React from "react";

import "./WeatherCard.css"

export default function WeatherCard(props) {
    return (
    <div className="WeatherCard">
        <div className="card mt-5 mb-5" >
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <ul>
                            <li>
                                Saturday, 21st
                            </li>
                            <li>
                            10:00     
                           </li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <li>
                                <h5>{props.data.city},</h5>
                            </li>
                            <li>
                                <h6>{props.data.country}</h6>                           
                           </li>
                        </ul>
                     </div>
                </div>
                <div className="visualWeather">
                    <img src={`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`} alt={props.data.description}/>
                    <div className="row">
                        <div className="col temperature">
                            {Math.round(props.data.temperature)}
                        </div>
                        <div className="col temperatureUnits">
                            <ul>
                                <li className="units">ºC | ºF</li>
                                <li className="maxMinTemperature">{Math.round(props.data.minTemperature)} | {Math.round(props.data.maxTemperature)}{"              "}</li>
                            </ul>
                        </div>                      
                    </div>
                    <p className="card-text">{props.data.description}</p>
                </div>
                <div className="row parameters">
                    <div className="col">
                        <p>Feels like:</p>
                        <p><span className="weatherValue">{Math.round(props.data.feelsLike)}</span>ºC</p>
                        <i className="fas fa-temperature-low" />
                    </div>
                    <div className="col">
                        <p>Humidity:</p>
                        <p><span className="weatherValue">{props.data.humidity}</span>%</p>
                        <i className="fas fa-tint"/>
                    </div>
                    <div className="col">
                        <p>Wind:</p>
                        <p><span className="weatherValue">{Math.round(props.data.wind)}</span> km/h</p>
                        <i className="fas fa-wind"/>
                    </div>
                </div>
            </div>                
        </div>
    </div>     
    );
    }