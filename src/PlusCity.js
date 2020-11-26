import React, { useState } from "react";
import Weather from "./Weather";

import "./PlusCity.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


import "./Weather.css"


export default function PlusCity(props){
    const [clicked, setClicked] = useState(false)

    function addCityCard(event) {
        event.preventDefault();
        setClicked(true);
    }
    
    if (clicked) {
        return ( 
        <div className="PlusCity">
            <Weather defaultCity={props.defaultCity}/>
            <div className="col">
                <div className="card-body">
                        <button type="button" className="btn btn-light mt-1" onClick={addCityCard}><FontAwesomeIcon icon="plus" />
                        </button>                               
                    </div>
            </div>
        </div>
        );
    } else {
        return(
            <div className="PlusCity col">
                    <div className="card-body">
                        <button type="button" title="Add a new city" className="btn btn-light mt-5" onClick={addCityCard}><FontAwesomeIcon icon="plus" />
                        </button>                               
                    </div>
            </div>
            )
            ;
        }

        
}