import React from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import TimeUpdated from "./TimeUpdated"
import WeatherInfo from "./WeatherInfo"
import Timezone from "./Timezone"

import "./WeatherCard.css"
import { faStickyNote } from "@fortawesome/free-solid-svg-icons";


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
        } } 
        
    



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
                <WeatherInfo info={props.data} />                
                <TimeUpdated time={props.data.update} />
             </div>                
            </div>
        </div>
        
    </div>
     
    );
    }