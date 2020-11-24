import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

import "./WeatherIcon.css"

export default function WeatherIcon(props) {
const codeMapping = {
    "01d": { description: "CLEAR_DAY", color: 'goldenrod'},
    "01n": { description: "CLEAR_NIGHT", color: 'goldenrod'},
    "02d": { description: "PARTLY_CLOUDY_DAY", color: 'goldenrod'},
    "02n": { description: "PARTLY_CLOUDY_NIGHT", color: 'goldenrod'},
    "02d": { description: "PARTLY_CLOUDY_DAY", color: 'goldenrod'},
    "02n": { description: "PARTLY_CLOUDY_NIGHT", color: 'goldenrod'},
    "03d": { description: "PARTLY_CLOUDY_DAY", color: 'goldenrod'},
    "03n": { description: "PARTLY_CLOUDY_NIGHT", color: 'goldenrod'},
    "04d": { description: "CLOUDY", color: 'goldenrod'},
    "04n": { description: "CLOUDY", color: 'goldenrod'},
    "09d": { description: "RAIN", color: 'goldenrod'},
    "09n": { description: "RAIN", color: 'goldenrod'},
    "10d": { description: "SLEET", color: 'goldenrod'},
    "10n": { description: "SLEET", color: 'goldenrod'},
    "11d": { description: "SLEET", color: 'goldenrod'},
    "11n": { description: "SLEET", color: 'goldenrod'},
    "13d": { description: "SNOW", color: 'goldenrod'},
    "13n": { description: "SNOW", color: 'goldenrod'},
    "50d": { description: "FOG", color: 'goldenrod'},
    "50n": { description: "FOG", color: 'goldenrod'},
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