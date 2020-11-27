import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import CityIcon from "./CityIcon"
import Time from "./Time"
import Timezone from "./Timezone"


import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



import "./WeatherCard.css"


export default function WeatherCard(props) {

     let timezone = props.data.timezone.getHours()

   function sky() {       
       if (timezone >= 5 && timezone < 8) {
           return ("sunrise")
        } else {
            if (timezone >= 8 && timezone < 12) {
                return ("morning")
            } else { 
            if (timezone >= 12 && timezone < 18) {
                return ("afternoon")
            } else { 
                if (timezone >= 18 && timezone < 20) {
                    return ("sunset")
                } else {
                    return ("night")
                }
            }
        } 
    }
}

    return (
    <div className="WeatherCard">
        <div className="card mt-2 mb-5 ">
            <div className={sky()}>           
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <Timezone date={props.data.timezone} />
                        </div>
                        <div className="col">
                            <h5><small><FontAwesomeIcon icon="map-marker-alt" /></small>{" "}{props.data.city},</h5>
                            <h6>{props.data.country}</h6>
                            <CityIcon city={props.data.city} />
                        </div>
                    </div>
                    <div className="WeatherInfo">
                        <WeatherIcon code={props.data.icon} alt={props.data.description} />
                        <WeatherTemperature data={props.data} />              
                    </div>
               
                    Last updated at <Time time={props.data.update} /> (UTC)
                </div>                
            </div>
        </div>
        
    </div>
     
    );
    }