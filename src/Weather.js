import React from "react";
import WeatherCard from "./WeatherCard";

import "./Weather.css"


export default function Weather(){
return (
    <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
            <input type="search" className="form-control" autoFocus="on" placeholder="Enter a city..." />
                </div>
                <div className="col-3">
            <input type="submit" className="btn btn-info " value="Search" />
                </div>
            </div>
        </form>
        <WeatherCard />
    </div>
)
}