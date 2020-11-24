import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import TimeUpdated from "./TimeUpdated"
import Timezone from "./Timezone"

import "./WeatherCard.css"


export default function WeatherCard(props) {

     let timezone = props.data.timezone.getHours()

   function sky() {       
       if (timezone >= 5 && timezone < 8) {
           return ("sunrise")
        } else {
            if (timezone >= 8 && timezone < 18) {
                return ("day")
            } else { 
                if (timezone >= 18 && timezone < 20) {
                    return ("sunset")
                } else {
                    return ("night")
                }
            }
        } 
    }
    
    return (
    <div className="WeatherCard">
        <div className="card mt-5 mb-5 ">
            <div className={sky()}>           
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <Timezone date={props.data.timezone} />
                        </div>
                        <div className="col">
                            <h5><small><FontAwesomeIcon icon="map-marker-alt" /></small>{" "}{props.data.city},</h5>
                            <h6>{props.data.country}</h6>
                        </div>
                    </div>
                    <div className="WeatherInfo">
                        <WeatherIcon code={props.data.icon} alt={props.data.description} />
                        <WeatherTemperature celsius={props.data.temperature} min= {props.data.minTemperature} max= {props.data.maxTemperature} description={props.data.description} feelsLike={props.data.feelsLike} humidity={props.data.humidity} wind={props.data.wind}/>              
                    </div>                
                    <TimeUpdated time={props.data.update} />
                </div>                
            </div>
        </div>
        
    </div>
     
    );
    }