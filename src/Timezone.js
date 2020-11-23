import React from "react";
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
      let hours = props.date.getHours();
          if (hours<10) {
              hours = `0${props.date.getHours()}`
          }
          let minutes = props.date.getMinutes();
              if (minutes<10) {
                  minutes = `0${props.date.getMinutes()}`
              }
          return (`${hours}:${minutes}`)
  }

    return (
        <div className="Timezone mt-2">
        <p>{day}, {month} {dateSuffix()}</p>
        <p>{localTime()}<small> Local ime</small></p>
    </div>
        );
}