import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

import "./WeatherIcon.css"

export default function WeatherIcon(props) {
const codeMapping = {
    "01d": { description: "CLEAR_DAY", color: '#F8F587'},
    "01n": { description: "CLEAR_NIGHT", color: '#6C93C9'},
    "02d": { description: "PARTLY_CLOUDY_DAY", color: '#F8F587'},
    "02n": { description: "PARTLY_CLOUDY_NIGHT", color: '#6C93C9'},
    "02d": { description: "PARTLY_CLOUDY_DAY", color: '#F8F587'},
    "02n": { description: "PARTLY_CLOUDY_NIGHT", color: '#6C93C9'},
    "03d": { description: "PARTLY_CLOUDY_DAY", color: '#F8F587'},
    "03n": { description: "PARTLY_CLOUDY_NIGHT", color: '#6C93C9'},
    "04d": { description: "CLOUDY", color: 'white'},
    "04n": { description: "CLOUDY", color: 'white'},
    "09d": { description: "RAIN", color: 'white'},
    "09n": { description: "RAIN", color: 'white'},
    "10d": { description: "SLEET", color: '#6C93C9'},
    "10n": { description: "SLEET", color: '#6C93C9'},
    "11d": { description: "SLEET", color: '#6C93C9'},
    "11n": { description: "SLEET", color: '#6C93C9'},
    "13d": { description: "SNOW", color: '#white'},
    "13n": { description: "SNOW", color: '#white'},
    "50d": { description: "FOG", color: '#EDF2F4'},
    "50n": { description: "FOG", color: '#EDF2F4'},
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