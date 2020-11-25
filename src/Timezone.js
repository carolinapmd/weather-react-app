import React from "react";
import TimeUpdated from "./Time"
import "./Timezone.css"

export default function Timezone(props) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = days[props.date.getDay()]
      const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[props.date.getMonth()]

  
  function dateSuffix()  {
    let dateNumber = props.date.getDate()
      if (dateNumber === 1 || dateNumber === 21) {
    return `${dateNumber}st`;
  } else {
    if (dateNumber === 3 || dateNumber === 23) {
      return `${dateNumber}rd`;
    } else {
      if (dateNumber === 2 || dateNumber === 22) {
        return `${dateNumber}nd`;
      } else {
        return `${dateNumber}th`;
      }
    }
  }
}
  function localTime() {
    return <TimeUpdated time={props.date} />  
    
  }

    return (
        <div className="Timezone mt-2">
        <p>{day}, {month} {dateSuffix()}</p>
        <p>{localTime()}<small> Local Time</small></p>
    </div>
        );
}