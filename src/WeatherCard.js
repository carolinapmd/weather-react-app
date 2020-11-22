import React from "react";

import "./WeatherCard.css"

export default function WeatherCard() {
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
                                <h5>New York,</h5>
                            </li>
                            <li>
                                <h6>US</h6>                           
                           </li>
                        </ul>
                     </div>
                </div>
                <div className="visualWeather">
                     <img src="https://cdn3.iconfinder.com/data/icons/meteocons/512/sun-symbol-512.png"/>
                     <p><span className="temperature">19</span><span className="units"> ºC | ºF</span></p>
                     <p className="card-text">Sunny</p>
                </div>
                <div className="row parameters">
                   
                    <div className="col">
                        <p className="parameter">Feels like:</p>
                        <p><span className="weatherValue">12</span>ºC</p>
                      
    
                        <i className="fas fa-temperature-low" />
                    </div>
                    <div className="col">
                        <p className="parameter">Humidity:</p>
                        <p><span className="weatherValue">20</span>%</p>
                        <i className="fas fa-tint"/>
                    </div>
                    <div className="col">
                        <p className="parameter">Wind:</p>
                        <p><span className="weatherValue">4</span> km/h</p>
                        <i className="fas fa-wind"/>
                    </div>
                </div>
            </div>                
        </div>
    </div>     
    );
    }