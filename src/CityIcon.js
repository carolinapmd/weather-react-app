import React from "react"
import Delphi from "./img/png/Delphi.png";
import Tokyo from "./img/png/Tokyo.png";
import "./CityIcon.css"


export default function CityIcon(props) {
    const cityMapping = {
        "Delphi": Delphi,
        "Tokyo": Tokyo
    }

    let CityIcon = cityMapping[props.city]

       if(CityIcon) {

           return (<div className="CityIcon">
            <img src={CityIcon} alt={`${props.city} Icon`} />
        </div>
        );
    } else {
        return null;
    }

       

}