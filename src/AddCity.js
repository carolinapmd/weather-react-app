import React, { useState } from "react";
import Weather from "./Weather";

import "./AddCity.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


import "./Weather.css"


export default function AddCity(props){
    const [clicked, setClicked] = useState(false)

    function addCityCard(event) {
        event.preventDefault();
        setClicked(true);
        return(null)
    }
    
    if (clicked) {
        return ( 
        <div className="AddCity row">
            <div className="col">
            <Weather defaultCity={props.defaultCity}/>
            </div>
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
                <div className="AddCity col">
                    <div className="card-body">
                        <button type="button" title="Add a new city" className="btn btn-light mt-5" onClick={addCityCard}><FontAwesomeIcon icon="plus" />
                        </button>                               
                    </div>
            </div>
            )
            ;
        }

        
}