import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

import "./WeatherIcon.css"

export default function WeatherIcon(props) {
const codeMapping = {
    "01d": { description: "CLEAR_DAY", color: 'goldenrod'},
    "01n": { description: "CLEAR_NIGHT", color: '#195883'},
    "02d": { description: "PARTLY_CLOUDY_DAY", color: '#F4E270'},
    "02n": { description: "PARTLY_CLOUDY_NIGHT", color: '#195883'},
    "02d": { description: "PARTLY_CLOUDY_DAY", color: '#F4E270'},
    "02n": { description: "PARTLY_CLOUDY_NIGHT", color: '195883'},
    "03d": { description: "PARTLY_CLOUDY_DAY", color: '#F4E270'},
    "03n": { description: "PARTLY_CLOUDY_NIGHT", color: '195883'},
    "04d": { description: "CLOUDY", color: '#D9E1ED'},
    "04n": { description: "CLOUDY", color: '#D9E1ED'},
    "09d": { description: "RAIN", color: '#D7EEF4'},
    "09n": { description: "RAIN", color: '#D7EEF4'},
    "10d": { description: "SLEET", color: '#155A8A'},
    "10n": { description: "SLEET", color: '#155A8A'},
    "11d": { description: "SLEET", color: '#155A8A'},
    "11n": { description: "SLEET", color: '#155A8A'},
    "13d": { description: "SNOW", color: '#F4E270'},
    "13n": { description: "SNOW", color: '#F4E270'},
    "50d": { description: "FOG", color: '#4A7EBA'},
    "50n": { description: "FOG", color: '#4A7EBA'},
}

    return (<div className = "WeatherIcon">
    <ReactAnimatedWeather
    icon={codeMapping[props.code].description}
    color={codeMapping[props.code].color}
    size={140}
    animate={true}
    />
    </div>
    );
}