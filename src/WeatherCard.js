import React from "react";

import TimeUpdated from "./TimeUpdated"
import WeatherInfo from "./WeatherInfo"
import Timezone from "./Timezone"

import "./WeatherCard.css"

export default function WeatherCard(props) {
    return (
    <div className="WeatherCard">
        <div className="card mt-5 mb-5" >
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <Timezone date={props.data.timezone} />
                    </div>
                    <div className="col">
                        <h5><small><i className="fas fa-map-marker-alt" /></small>{" "}{props.data.city},</h5>
                        <h6>{props.data.country}</h6>
                    </div>
                </div>
                <WeatherInfo info={props.data} />                
                <TimeUpdated time={props.data.update} />
            </div>                
        </div>
    </div>     
    );
    }