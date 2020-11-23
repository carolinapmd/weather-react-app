import React from "react";

export default function Timezone(props) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = days[props.date]
    return (`${props.date}`);
}