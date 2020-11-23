import React from "react";

export default function TimeUpdated(props) {
    let hours = props.time.getHours();
    if (hours<10) {
        hours = `0${props.time.getHours()}`
    }
    let minutes = props.time.getMinutes();
        if (minutes<10) {
            minutes = `0${props.time.getMinutes()}`
        }
    return (`Last updated at ${hours}:${minutes} (UTC)`)
}